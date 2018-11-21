<template lang="pug">
  #app
    video(:id="'marker-input'" autoplay="true")
    .uk-card-secondary.uk-card
      a(@click="capture")
        card(:item="item")
      // .uk-tile
        ul
          li(v-for="i in item.operation")
            label(for='volume') {{ i.name }}
            // input#start(type='range', name='volume', min='0', max='10', v-model="i.control.blur").uk-progress
            
</template>
<style>
video#marker-input {
  visibility:none;
  margin-top: -100%;
}
</style>

<script>
import jsfeat from 'jsfeat'
import paper from 'paper'
import fabric from 'fabric'

import card from '~/components/pure/uikit/card'

const R = require('rambda') 

export default {
  layout: 'abrie',
  components: {
    card
  },
  data: function() {
    return {
      item: {
        name: 'marker-output',
        operations: [
          'grey',
          'blur',
          'canny'
          // 'sobel',
          // 'scharr'
        ],
        controls: [
          {
            name: 'grey'
          },
          {
            name: 'blur',
            control: {
              blur: '1'
            }
          },
          {
            name: 'canny',
            control: {
              low: '5',
              high: '15'
            }
          }
        ]
      },
      stateVideo: undefined,
      video: {},
      canvas: {},

    }
  },
  created: function() {
    console.log("video marker created")
  },
  mounted: function() {
    console.log("video marker mounting")
    let input = document.getElementById("marker-input");
    let output = document.getElementById("marker-output");

    this.$nextTick(() => {
      console.log("video marker next tick started")

      let video = input
      let canvas = output
      let options,ctx,canvasWidth,canvasHeight;
      let img_u8, img_gxgy, img_mag, corners, threshhold, control;

      ctx = canvas.getContext('2d');

      // set canvas size = video size when known
      canvasWidth = video.offsetWidth
      canvasHeight = canvasWidth * 0.75
      canvas.width  = canvasWidth;
      canvas.height = canvasHeight;

      // create mediation matrices
      img_u8 = new jsfeat.matrix_t(canvasWidth, canvasHeight, jsfeat.U8C1_t);
      img_gxgy = new jsfeat.matrix_t(canvasWidth, canvasHeight, jsfeat.S32C2_t);
      img_mag = new jsfeat.matrix_t(canvasWidth, canvasHeight, jsfeat.S32C1_t);
      
      let ops = this.item.operations
      let cts = this.item.controls
      let operation = (i) => ops.forEach( (op) => {
        const findOp = a => a.name === op
        const ct = R.find(findOp, cts)
        switch (op) {
          case 'grey':
            jsfeat.imgproc.grayscale(i.data, canvasWidth, canvasHeight, img_u8)
            break
          case 'blur':
            var r = ct.control.blur;
            var kernel_size = (r+1) << 1;
            jsfeat.imgproc.gaussian_blur(img_u8, img_u8, kernel_size, 0);
            break;
          case 'canny':
            jsfeat.imgproc.canny(img_u8, img_u8, ct.control.low, ct.control.high);
            break;
          case 'sobel':
            jsfeat.imgproc.sobel_derivatives(img_u8, img_gxgy);
            break;
          case 'scharr':
            jsfeat.imgproc.scharr_derivatives(img_u8, img_gxgy);
            break;
          default:
        }
      })

      let stateVideo = undefined
      video.addEventListener('play', function() {
        let $this = this; //cache
        (function loop() {
          if (!$this.paused && !$this.ended) {
            ctx.drawImage($this, 0, 0, canvasWidth, canvasHeight);
            let img = ctx.getImageData(0,0, canvasWidth, canvasHeight);
            operation(img)

            var data_u32 = new Uint32Array(img.data.buffer);
            var alpha = (0xff << 24);
            var i = img_u8.cols*img_u8.rows, pix = 0, gx = 0, gy = 0;
            while(--i >= 0) {
                gx = Math.abs(img_gxgy.data[i<<1]>>2)&0xff;
                gy = Math.abs(img_gxgy.data[(i<<1)+1]>>2)&0xff;
                pix = img_u8.data[i];
                data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
                // pix = ((gx + gy)>>2)&0xff;
                // data_u32[i] = (pix << 24) | (gx << 16) | (0 << 8) | gy;
            }
            ctx.putImageData(img, 0, 0);
            stateVideo = img
            //jsfeat.fast_corners.set_threshold(30);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
          }
        })();
      });

      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          video.src = window.URL.createObjectURL(stream);
          // video.play();
        });
      } else {
        console.log("NO")
      }
      
      console.log("video marker next tick ended")
    });
    console.log("video marker mounted")
  },
  methods: {
    capture() {
      let output = document.getElementById('marker-output');
      let pngURL = output.toDataURL("image/png");
      this.stateVideo = pngURL
      console.log("captured", pngURL)
    }
  }
}
</script>