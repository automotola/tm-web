<template>
    <a-scene background="color: #00002a">
        <a-entity position="0 1.25 -5" particle-system="preset: dust; type: 2; size: 3; color: #15e8ff,#2affa9,#FF2AE2"></a-entity>

        <assets>
            <img id="gravel" crossorigin="anonymous" src="images/gravel.jpg"> 
        </assets>

        <a-sphere  position="0 1 -7" color="white" opacity="0.9" radius="1.5" texture-animator="htiles:4; vtiles:2; tiles:8; src:images/gravel.jpg; dur:5"></a-sphere>
        <a-sphere  position="0 1 -7" color="blue" opacity="0.5" radius="2" texture-animator="htiles:4; vtiles:2; tiles:8; src:images/gravel.jpg; dur:5"></a-sphere>
        <a-sphere  position="0 1 -7" color="white" opacity="0.1" radius="2.5" texture-animator="htiles:2; vtiles:2; tiles:2; src:images/gravel.jpg; dur:10"></a-sphere>
       
        <a-entity geometry="primitive: box" material="color: red" id="cube" position="3 1 -7"></a-entity>
                <a-entity light="type: ambient; intensity: 1;"></a-entity>
                <a-entity light="type: spot;
                                 castShadow: true;
                                 intensity: 1;
                                 shadowCameraVisible: true;"
                          position="-2 3 8">
                </a-entity>
    
    
    </a-scene>
</template>
<script>
import AFRAME from 'aframe'
export default {
    created() {
        if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
  }
  
  AFRAME.registerComponent('texture-animator', {
      schema: {
          htiles: {
              default: 1
          },
          vtiles: {
              default: 1
          },
          tiles: {
              default: 1
          },
          dur: {
              default: 10
          },
          src: {
              default: null
          }
      },
  
      init: function() {
          if(this.data.src == null) {
              console.log("Can't run texture-animator on element without source image.");
              return false;
          }
  
          // note: texture passed by reference, will be updated by the update function.
          this.tilesHorizontal = this.data.htiles;
          this.tilesVertical = this.data.vtiles;
          // how many images does this spritesheet contain?
          //  usually equals tilesHoriz * tilesVert, but not necessarily,
          //  if there at blank tiles at the bottom of the spritesheet. 
  
          this.numberOfTiles = this.data.tiles;
          this.texture = new THREE.ImageUtils.loadTexture( this.data.src ); // Gets the texture from the element
          //this.texture = this.el.getObject3D('mesh').material.map;
  
          // Set image to doubleSide:
          this.el.object3DMap.mesh.material.map = this.texture;
          this.el.object3DMap.mesh.material.side = THREE.DoubleSide;
  
          this.texture.wrapS = this.texture.wrapT = THREE.RepeatWrapping; 
          this.texture.repeat.set( 1 / this.tilesHorizontal, 1 / this.tilesVertical );
  
          // how long should each image be displayed?
          this.tileDisplayDuration = this.data.dur;
  
          // how long has the current image been displayed?
          this.currentDisplayTime = 0;
  
          // which image is currently being displayed?
          this.currentTile = 0;
      },
      tick: function () {
          this.currentDisplayTime += 1;
          while (this.currentDisplayTime > this.tileDisplayDuration)
          {
              this.currentDisplayTime -= this.tileDisplayDuration;
              this.currentTile++;
  
              if (this.currentTile == this.numberOfTiles) {
                  this.currentTile = 0;
              }
  
              var currentColumn = this.currentTile % this.tilesHorizontal;
              this.texture.offset.x = currentColumn / this.tilesHorizontal;
  
              var currentRow = Math.floor( this.currentTile / this.tilesHorizontal );
              this.texture.offset.y = currentRow / this.tilesVertical;
          }
      },
  });
    }
}
</script>
