let nSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  nSlider = createSlider(1, 200, 100, 10);
  nSlider.position(100, 100);
}

let gridSize = 20;

function draw() {
  background(0);
  stroke(255);
  let nscale = nSlider.value();

  for (y = 0; y <= height; y += gridSize) {
    let rc = floor(random(0, 255));
    for (x = 0; x <= width; x += gridSize) {
      let fc = 255 * noise(x/nscale,y / nscale);
      let aColor;
      if (fc > 200){
        aColor = "Salmon";
      } else if (fc >150){
        aColor = "pink";
      }  else if (fc >120){
        aColor = "peachpuff";
      } else{
        aColor = "papayawhip";
      }
      fill(aColor);
      rect(x, y, gridSize, gridSize);
    }
  }
}
