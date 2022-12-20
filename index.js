$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// $(document).ready(function() {
//     var autoplaySlider = $('#autoplay').lightSlider({
//         auto:true,
//         loop:true,
//         pauseOnHover: true,
//         onBeforeSlide: function (el) {
//             $('#current').text(el.getCurrentSlideCount());
//         } 
//     });
//     $('#total').text(autoplaySlider.getTotalSlideCount());
// });

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }else{
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el))
