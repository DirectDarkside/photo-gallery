let images = [
    "background.jpg", "christmas-1.jpg", "christmas-2.jpg", "christmas-market.jpg", 
    "cinnamon.jpg", "cocoa.jpg", "gift.jpg", "hochybrig.jpg", 
    "nature.jpg", "snowflake.jpg", "snowman.jpg", "winter.jpg"
];


function render() {
  includeHTML();
  printImg();
}


function printImg() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  for(let i = 0; i < images.length; i++) {
    content.innerHTML += `
      <div class="img-container">
        <img src="./assets/img/${images[i]}" alt="Image" onclick="generateFullScreen(${i})">
      </div>
    `;
  }
}


function generateFullScreen(value) {
  const content = document.getElementById('content');
  const header = document.getElementById('header');
  header.classList.add('d-none');
  content.innerHTML = '';

  content.innerHTML += /*html*/ `
    <div class="current-img-container">
        <img class="arrow" src="./assets/img/left-arrow.png" alt="left arrow" onclick="changeImage(${value}, 'back')">
        <img class="current-img" src="./assets/img/${images[value]}" alt="current image">
        <img class="arrow" src="./assets/img/right-arrow.png" alt="right-arrow" onclick="changeImage(${value}, 'forward')">
    </div>
  `;
}


function changeImage(value, control) {
  if(control === 'back') {
    value--;
    if(value < 0) {
      value = checkValue(value);
    }
    generateFullScreen(value);
  }
  if(control === 'forward') {
    value++;
    if(value > (images.length - 1)) {
      value = checkValue(value);
    }
    generateFullScreen(value);
  }
}


function checkValue(index) {
  if(index < 0) {
    index = images.length - 1;
    return index;
  }
  if(index > (images.length - 1)) {
    index = 0;
    return index;
  }
}


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }