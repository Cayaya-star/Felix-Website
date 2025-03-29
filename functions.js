
function validateContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formResponse = document.getElementById("form-response");

   
    if (!name || !email || !message) {
        formResponse.style.color = "red";
        formResponse.innerHTML = "Please fill out all fields.";
        return false;
    }

    if (!validateEmail(email)) {
        formResponse.style.color = "red";
        formResponse.innerHTML = "Please enter a valid email address.";
        return false;
    }

 
    formResponse.style.color = "green";
    formResponse.innerHTML = "Thank you for your message! We'll get back to you soon.";
    
    
    document.getElementById("contact-form").reset();
    return false;  
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); 
}
function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}