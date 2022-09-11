images = [
  "./img3/9.jpg",
  "./img3/8.jpg",
  "./img3/7.jpg",
  "./img3/6.jpg",
  "./img3/5.jpg",
  "./img3/4.jpg",
  "./img3/3.jpg",
  "./img3/4.jpg",
  "./img3/10.jpg",
];


let index = 0;

let banner = document.getElementById("image");
banner.src = images[0];

function show_image(initial) {
  if (initial == "left") {
    index--;
  } else {
    index++;
    index %= images.length - 1;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  banner.src = images[index];
}

setInterval(show_image, 3000);











