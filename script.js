function changeColors() {
    const header = document.querySelector('.header');
    const button = document.querySelector('button');
  
    // Generate random hex color
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  
    // Apply new colors
    header.style.backgroundColor = randomColor;
    button.style.backgroundColor = randomColor;
  }
  