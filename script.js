// let age = prompt('How old are you?');
// alert(`You are ${age} yeras old.`);

// let isBoss = confirm('Are you the Boss?');
// alert(`welcome to our site ${name}.`);

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) alert( 'You are right!' );


function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// let arg = prompt("Enter a value?");
// switch (arg) {
// case '0':
// case '1':
// alert( 'One or zero' );
// break;
// case '2':
// alert( 'Two' );
// break;
// case 3:
// alert( 'Never executes!' );
// break;
// default:
// alert( 'An unknown value' );
// }

// function showMessage(from, text = "no text given") {
//   alert( from + ": " + text );
//   }
//   showMessage("Ann"); // Ann: no text given

//check age function
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
let age = prompt('How old are you?', 18);
if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
};

//contact.css
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}