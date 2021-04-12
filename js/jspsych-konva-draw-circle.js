//TODO: alert needs to be variable in order for the language to work 


jsPsych.plugins['konva-draw-circle'] = (function(){

  var plugin = {};

  plugin.info = {
    name: 'konva-draw-circle',
    parameters: {
        
        canvas_width: {
            
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area width',
        default: .8*window.innerWidth, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
            
        },
        canvas_height:{
        
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area height',
        default: .8*window.innerHeight, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
  
        },
        prompt:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Provide a reminder about the action the subject is supposed to take.'
        
        },
        button_label:{
            
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to continue to the next trial.'
            
        }
        
    }
  }

  plugin.trial = function(display_element, trial){
      
    var start_time = performance.now()
    var html = ""
    if (trial.prompt !== null){
        html += trial.prompt
    }
      
    html += '<select id="tool">' + 
      '<option value="brush">Brush</option>' + 
      '<option value="eraser">Eraser</option>'+
      '<option value="circle">Circle</option>' +
    '</select>'  
    
    html += '<body>' + 
        
    '<div id="stage-parent">'+
        
    '<div id="container1"></div>'+
        
    '<div id="menu">'+
    '<div>' + 
    '<button id="delete-button">Delete</button>'+
    '</div>'+
    '</div>'
      
    display_element.innerHTML = html
      
      
    display_element.innerHTML += '<p><button id="jspsych-draw-circles-done-btn" class="jspsych-btn">'+trial.button_label+'</button></p>';
      
// set up stage
      
    var stage = new Konva.Stage({container: 'container1', width: trial.canvas_width, height: trial.canvas_height});
    var layer = new Konva.Layer({draggable: false});
    stage.add(layer);
      
      
    var layer = new Konva.Layer();
    stage.add(layer);
      
     //filler circle: 
    var r_filler = new Konva.Circle({x: 0, y: 0, radius: 0,stroke: 'red', dash: [2,2]})  //, 
    var shapes = stage.find('Circle');
    r_filler.listening(false); // stop filler catching our mouse events.
    layer.add(r_filler)
      
    stage.draw()

    var isPaint = false;
    var mode = 'brush';
    var circle_mode = ""
    var dragging = ""
    var lastLine;
      
      
      
      // helper function for drag and draw the circle 
     function startDrag(posIn){
        
       posStart = {x: posIn.x, y: posIn.y};
       posNow = {x: posIn.x, y: posIn.y};
        
       var shapes = stage.find('Circle');
       
     }
      
     function updateDrag(posIn){ 

      // update rubber circle position
       posNow = {x: posIn.x, y: posIn.y};
       var posRect = reverse(posStart,posNow);
       r_filler.x(posRect.x1);
       r_filler.y(posRect.y1);


       radius = Math.sqrt(Math.pow((posRect.x2 - posRect.x1), 2) + Math.pow((posRect.y2 - posRect.y1), 2))    
       r_filler.radius(radius);
       r_filler.visible(true);  
       //console.log(r_filler)
      
       stage.draw(); // redraw any changes.

     }
      
     // reverse co-ords if user drags left / up
    function reverse(r1, r2){
      var r1x = r1.x, r1y = r1.y, r2x = r2.x,  r2y = r2.y, d;
      if (r1x > r2x ){
        d = Math.abs(r1x - r2x);
        r1x = r2x; 
        r2x = r1x + d;
      }
      if (r1y > r2y ){
        d = Math.abs(r1y - r2y);
        r1y = r2y; r2y = r1y + d;
      }
        return ({x1: r1x, y1: r1y, x2: r2x, y2: r2y}); // return the corrected rect.     
    }
      
      
      
   
      
      

      stage.on('mousedown touchstart', function (e) {
        isPaint = true;
          
        if (mode != "circle"){
            var pos = stage.getPointerPosition(); 
            lastLine = new Konva.Line({
              stroke: '#df4b26',
              strokeWidth: 5,
              globalCompositeOperation:
                mode === 'brush' ? 'source-over' : 'destination-out',
              points: [pos.x, pos.y],
            });
            
            layer.add(lastLine);
        }else{
            
            if (e.evt.button === 2) { //prevent right click to create label 
                return;
            }
            circle_mode = "drawing"
            dragging = "no"
            
            startDrag({x: e.evt.layerX, y: e.evt.layerY})            
            
            
        }

      });

      stage.on('mouseup touchend', function (e) {
        if (mode != "circle"){
            isPaint = false;
        }else{
            if (circle_mode === "drawing" && dragging === "yes" ){
                //r_filler.visible(false)
                if (r_filler.radius()>5){
                    var newCirc = new Konva.Circle({
                      x: r_filler.x(),
                      y: r_filler.y(),
                      radius: r_filler.radius(),
                      fill: 'red',
                      listening: true
                    })
        
                    layer.add(newCirc);
                    stage.draw();
                     dragging = "no"
                
                }else{
                    alert("The circle you drew is too small!Please try again!")
                }
        }   
        }  
      });

      // and core function - drawing
      
   
      
      
      
      stage.on('mousemove touchmove', function (e) {
        
        
        if (mode != "circle") {
            if (!isPaint) {
                return;
            }
            
            const pos = stage.getPointerPosition();
            var newPoints = lastLine.points().concat([pos.x, pos.y]);
            lastLine.points(newPoints);
            layer.batchDraw();
        }else{
            
            if (circle_mode === "drawing"){
                dragging = "yes"
                updateDrag({x:e.evt.layerX, y:e.evt.layerY})
                
            }
            
            //
        }
          
          
      });

      var select = document.getElementById('tool');
      select.addEventListener('change', function () {
        mode = select.value;
      })
    
    var r1 = new Konva.Rect({x: 0, y: 0, width: trial.canvas_width, height: trial.canvas_height, fill: 'white'})    
    layer.add(r1)
      

      

    stage.draw() // First draw of canvas.
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

display_element.querySelector('#jspsych-draw-circles-done-btn').addEventListener('click', function(){

   
            
    
            
     

      var trial_data = {
        //"locations": JSON.stringify(locations),
        //"rt": rt,
        //"labels": labels.map(function(x){return x.attrs.text})
        
      };
        
      display_element.innerHTML = '';
      jsPsych.finishTrial(trial_data);

    
    
      // advance to next part
      
    });

  }

  return plugin;

})();