const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgFname = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */

const altImg = {
  pic1alt: "Closeup of a human eye",
  pic2alt: "Closeup of a shell",
  pic3alt: "Flowers...perhaps violets?",
  pic4alt: "Egyptian tomb paintings",
  pic5alt: "Butterfly on a leaf",
}

/* Looping through images */

const imgAlt = Object.values(altImg);

for (let i = 0; i < imgFname.length && i < imgAlt.length; i++ ) {
  const imgSrc = imgFname[i];
  const picAlt = imgAlt[i];
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imgSrc);
  newImage.setAttribute('alt', picAlt);
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', imgSrc);
    displayedImage.setAttribute('alt', picAlt);
  });
  thumbBar.appendChild(newImage);
} 

// another loop possibility
/*
for (let i = 0; i < imgFname.length; i++ ) {
  const newImage = document.createElement('img');
  const imgSrc = imgFname[i];
  for (let j = 0; j < imgAlt.length; j++) {
    const picAlt = imgAlt[j];
    newImage.setAttribute('alt', picAlt);
  }
  newImage.setAttribute('src', imgSrc);
  thumbBar.appendChild(newImage);
}
*/

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
  btn.setAttribute("class", "dark");
  btn.textContent = "Darken";
  overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"; 
  }
})

// the following handler seems a little more concise...
/* 
btn.addEventListener('click', (e) => {
  
  if (e.target.textContent === "Darken") {
     e.target.textContent = "Lighten";
     overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
    e.target.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
  })
*/

