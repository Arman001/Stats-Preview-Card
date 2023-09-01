const image = document.getElementById("main-image");

const widthLimit = 600;

const updateImage = ()=>{
  
  const screeWidth =  window.innerWidth;

  if(screeWidth>updateImage){
    image.src = "../images/image-header-desktop.jpg"
  }
  else{
    image.src = "../images/image-header-mobile.jpg"
  }
}

updateImage();
window.addEventListener('resize', updateImage);


