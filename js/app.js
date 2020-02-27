$(document).ready(function() {

  var slideIndex = 1;
  showSlides(slideIndex);

  // // Next/previous controls
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  $("#prev").click(function() {
      showSlides(slideIndex += -1);
  });

  $("#next").click(function() {
      showSlides(slideIndex += 1);
  });

  // Thumbnail image controls
  function goToSlide(n) {
      showSlides(slideIndex = n);
  }

  $("#dot-1").click(function() {
      goToSlide(1);
  });
  $('#dot-2').click(function() {
      goToSlide(2);
  });
  $('#dot-3').click(function() {
      goToSlide(3);
  });
  $('#dot-4').click(function() {
      goToSlide(4);
  });
  $('#dot-5').click(function() {
      goToSlide(5);
  });

  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
          slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }

  $("#revealer").click(function() {
      $("#answer").fadeIn(500);
      $("#revealer").hide();
  });

  // PAGE 2 Multiple-Choice Quiz
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');



});