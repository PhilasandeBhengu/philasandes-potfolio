document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  document.getElementById("nextBtn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
  });

  slides[currentSlide].classList.add("active");
});
document.addEventListener("DOMContentLoaded", function () {
  var bars = document.querySelectorAll(".skill-bar div");
  bars.forEach(function (bar) {
    var percentage = bar.getAttribute("data-skill");
    bar.style.width = percentage + "%";
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   let currentSlide = 0;
//   const slides = document.querySelectorAll(".slide");
//   const totalSlides = slides.length;

//   document.getElementById("nextBtn").addEventListener("click", function () {
//     slides[currentSlide].classList.remove("active");
//     currentSlide = (currentSlide + 1) % totalSlides;
//     slides[currentSlide].classList.add("active");
//   });

//   document.getElementById("prevBtn").addEventListener("click", function () {
//     slides[currentSlide].classList.remove("active");
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     slides[currentSlide].classList.add("active");
//   });

//   slides[currentSlide].classList.add("active");
// });

document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");

  const revealService = () => {
    const windowHeight = window.innerHeight;
    services.forEach((service) => {
      const serviceTop = service.getBoundingClientRect().top;
      if (serviceTop < windowHeight - 50) {
        service.style.opacity = "1";
        service.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealService);
  revealService(); // Run the function on initial load
});
