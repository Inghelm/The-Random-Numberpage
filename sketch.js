// The Random Numberpage! - P5JS lib. 
// Design By : MR K.ING
let refreshbutton
function setup() {
   let canvas = createCanvas(windowWidth, 400);
   canvas.parent('canvascontainer');
   background(255, 0, 0);
   fill(255, 255, 255, 100);
   textSize(30);
   textAlign(CENTER);
   text("The Random Numberpage!", width/2, height/4);
   text(getSequence(5,5), width/2, height/2.5);
   text(getSequence(5,5), width/2, height/2.1);
   text(getSequence(5,5), width/2, height/1.8);
   text(getSequence(5,5), width/2, height/1.6);
   text(getSequence(5,5), width/2, height/1.4);
   refreshbutton = createButton('Refresh');
   refreshbutton.position(40,40);
   refreshbutton.mousePressed(refresh);
   function getSequence(row, col) {
   let initial = '';
   for(let i = 1; i < row*col; i++) {
         if(i%col != 0) {
            initial += getRandomInt(10) + " ";
         }
         else {
            initial += getRandomInt(10) + "  "
         }
   }
   initial += getRandomInt(10);
   return initial;
}
}
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}
function refresh() {
   window.location.reload();
}
