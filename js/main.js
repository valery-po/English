const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}


const videoBtn = document.querySelector("#video-story-button");
const videoFile = document.querySelector("#video-story");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
//const videoIconBlock = document.querySelector(".promo-video__play-btn");


videoBtn.addEventListener("click", function() {
  
  videoBtn.style.display = "block";
 
  function toggleOverlay(event) {
    if(event.type === "mouseleave"){
      videoBtn.classList.add("hidden");
    }
  }
  
  
  function toggleEnter(event) {
    if(event.type === "mouseenter"){
      videoBtn.classList.remove("hidden");
    } 
  }
  
  if(videoFile.paused){
    videoFile.play();
    videoBtnIcon.src = "./img/Pause.svg";
    videoBtn.onmouseleave = toggleOverlay;
    videoBtn.onmouseenter = toggleEnter;
    
  }else {
    videoFile.pause();
    videoBtnIcon.src = "./img/play.svg";
     videoBtn.onmouseleave = toggleOverlay;
    videoBtn.onmouseenter = toggleEnter;
  }
 
})




