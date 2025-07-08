const typingElement = document.getElementById("typing");

const texts = [
  'this.is("<span style=\'color:#e7b8d8\'>Data Science Student</span>");',
  'this.is("<span style=\'color:#e7b8d8\'>Robotics Explorer</span>");'
];

let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function type() {
  typingElement.innerHTML = currentText;

  if (!isDeleting && j <= texts[i].length) {
    currentText = texts[i].substring(0, j++);
    setTimeout(type, 80);
  } else if (isDeleting && j >= 0) {
    currentText = texts[i].substring(0, j--);
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
    setTimeout(type, 1000);
  }
}

type();
