<template>
    <div>
        <canvas id="myCanvas" resize></canvas>
        <canvas id="secondCanvas" resize></canvas>
        <canvas id="thirdCanvas" resize></canvas>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            original: {
                start: 100,
                target: 70,
                sizeSmall: 15,
                sizeMedium: 30,
                sizeLarge: 45,
                sizeXL: 60
            },
            twotango: {
                start: 100,
                starttwo: 85,
                startthree: 100,
                startfour: 85,
                target: 70,
                sizeSmall: 15,
                sizeMedium: 30,
                sizeLarge: 45,
                sizeXL: 60
            },
            mini: {
                start: 100,
                starttwo: 85,
                startthree: 100,
                startfour: 85,
                target: 70,
                sizeSmall: 15,
                sizeMedium: 30,
                sizeLarge: 45,
                sizeXL: 60
            },
            
        }
    },
    mounted: function(){
        console.log('Hello from Paper')
        const paper = require('paper')
        let s = this.original
        // Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path.Circle(new paper.Point(s.start, s.target), s.sizeLarge);
		// Give the stroke a color
		path.strokeColor = 'black';

	    var path = new paper.Path.Circle(new paper.Point(s.start, s.target), s.sizeMedium);
		// Give the stroke a color
		path.strokeColor = 'black';

        var path = new paper.Path.Circle(new paper.Point(s.start, s.target), s.sizeSmall);
		// Give the stroke a color
        path.strokeColor = 'black';
        
         var path = new paper.Path.Circle(new paper.Point(s.start, s.target), s.sizeXL);
		// Give the stroke a color
		path.strokeColor = 'black';


         let t = this.twotango
        // Get a reference to the canvas object
		var canvas = document.getElementById('secondCanvas');
		// Create an empty project and a view for the canvas:
        paper.setup(canvas);

        // Create a Paper.js Path to draw a line into it:

         var path = new paper.Path.Circle(new paper.Point(t.start, t.target), t.sizeXL);
		// Give the stroke a color
        path.strokeColor = 'black';
        
		var path = new paper.Path.Circle(new paper.Point(t.starttwo, t.target), t.sizeLarge);
		// Give the stroke a color
		path.strokeColor = 'black';

	    var path = new paper.Path.Circle(new paper.Point(t.startthree, t.target), t.sizeMedium);
		// Give the stroke a color
		path.strokeColor = 'black';

        var path = new paper.Path.Circle(new paper.Point(t.startfour, t.target), t.sizeSmall);
		// Give the stroke a color
        path.strokeColor = 'black';
        
        
        let m = this.mini
        // Get a reference to the canvas object
		var canvas = document.getElementById('thirdCanvas');
		// Create an empty project and a view for the canvas:
        paper.setup(canvas);

        // Create a Paper.js Path to draw a line into it:

         var path = new paper.Path.Circle(new paper.Point(m.start, m.target), m.sizeXL);
		// Give the stroke a color
        path.strokeColor = 'black';
        
		var path = new paper.Path.Circle(new paper.Point(m.starttwo, m.target), m.sizeLarge);
		// Give the stroke a color
		path.strokeColor = 'black';

	    var path = new paper.Path.Circle(new paper.Point(m.startthree, m.target), m.sizeMedium);
		// Give the stroke a color
		path.strokeColor = 'black';

        var path = new paper.Path.Circle(new paper.Point(m.startfour, m.target), m.sizeSmall);
		// Give the stroke a color
        path.strokeColor = 'black';

    	// Draw the view now:
		paper.view.draw();

    },
    
}
</script>

