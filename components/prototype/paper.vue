<template lang="pug">
  canvas(:id="id")
</template>
<style>
#thirdCanvas {
    border-radius: 100%;
    background: lightgray;
}
</style>

<script>
export default {
    props: [
        "x",
        "y",
        "r",
        "id"
    ],
    data: function() {
        return {
            circles: [
                {
                    x: 150,
                    y: 150,
                    r: 30
                },
                {
                    x: 150,
                    y: 150,
                    r: 15
                },
                {
                    x: 150,
                    y: 150,
                    r: 60
                }
            ]
            
        }
    },
    mounted: function(){
        console.log('Hello from Paper')
        const paper = require('paper')
        let circles = this.circles
        // Get a reference to the canvas object
        let canvas = document.getElementById('thirdCanvas');
        let cW = 300
        let cH = 300
        canvas.width  = cW;
        canvas.height = cH;
        let cWC = cW / 2
        let cHC = cH / 2
		// Create an empty project and a view for the canvas:
        paper.setup(canvas);
        
        circles.forEach(function(circle){
            let center, x, y, r
            center = cHC
            x = circle.x
            y = circle.y
            r = circle.r

            // Create a Paper.js Path to draw a line into it:
            var path = new paper.Path.Circle(new paper.Point(x, y), r);
            path.strokeColor = 'black';
        })

        /* // Create a Paper.js Path to draw a line into it:
         var path = new paper.Path.Circle(new paper.Point(x, y), r);
		// Give the stroke a color
        path.strokeColor = 'black';
        
		var path = new paper.Path.Circle(new paper.Point(cHC, m.target), m.sizeLarge);
		// Give the stroke a color
		path.strokeColor = 'black';

	    var path = new paper.Path.Circle(new paper.Point(cHC, m.target), m.sizeMedium);
		// Give the stroke a color
		path.strokeColor = 'black';

        var path = new paper.Path.Circle(new paper.Point(cHC, m.target), m.sizeSmall);
		// Give the stroke a color
        path.strokeColor = 'black'; */

    	// Draw the view now:
		paper.view.draw();
    },
    
}
</script>

