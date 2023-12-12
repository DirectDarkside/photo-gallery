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
        <img src="./assets/img/${images[i]}" alt="Image">
      </div>
    `;
  }
}


function generateFullScreen(value) {
  const content = document.getElementById('content');

  content.innerHTML += {
    
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