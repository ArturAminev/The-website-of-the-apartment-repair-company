let images = [{
    url: "./img/Completed-projects/1.jpg",
    title: "ROSTOV-ON-DON, ADMIRAL"
}, {
    url:  "./img/Completed-projects/2.jpg",
    title: "SOCHI THIEVES"
}, {
    url:  "./img/Completed-projects/3.jpg",
    title: "ROSTOV-ON-DON PATRIOTIC"
}];

function initSlider(options) {
    if (!images || !images.length) return;

    options = options || {
      titles: false,
      dots: true,
      autoplay: false,
    };
    
    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider-arrows");
    let sliderDots = document.querySelector(".slider-dots");
    let sliderTitles = document.querySelector(".slider__titles");
    
    initImages();
    initArrows();
    
    if (options.dots) {
      initDots();
    }
    
    if (options.titles) {
      initTitles();
    }
    
    if (options.autoplay) {
      initAutoplay();
    }
    
    function initImages() {
        images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
        });
    }
    
    function initArrows() {
      sliderArrows.querySelectorAll(".slider-arrows__item").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0  ?  images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
    }
    
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider-dots__item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider-dots__item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
    }
    
    function initTitles() {
      images.forEach((image, index) => {
        let title = `<div class="slider__titles-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
        sliderTitles.innerHTML += title;
      });
      sliderTitles.querySelectorAll(".slider__titles-item").forEach(title => {
        title.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
    }
  
    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      if (options.dots) {
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
      }
      if (options.titles) {
        sliderTitles.querySelector(".active").classList.remove("active");
        sliderTitles.querySelector(".n" + num).classList.add("active");
      }
    }
    
    function initAutoplay() {
      setInterval(() => {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        moveSlider(nextNumber);
      }, options.autoplayInterval);
    }
  }
    
  let sliderOptions = {
    dots: true,
    titles: true,
    autoplay: true,
    autoplayInterval: 15000
  };
  
function initSliderMobile() {

  let sliderImagesMobile = document.querySelector(".slider-mobile__images");
  let sliderArrowsMobile = document.querySelector(".slider-arrows-mobile");

  initImagesMobile();
  initArrowsMobile();

  function initImagesMobile() {
    images.forEach((image, index) => {
    let MobileImageDiv = `<div class="mobile-images num${index} ${index === 0 ? "active-mobile" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImagesMobile.innerHTML += MobileImageDiv;
    });
  }

  function initArrowsMobile() {
    sliderArrowsMobile.querySelectorAll(".slider-arrows-mobile__item ").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let number = +sliderImagesMobile.querySelector(".active-mobile").dataset.index;
        let TwoNumber;
        
        if (arrow.classList.contains("previous")) {
          TwoNumber = number === 0  ?  images.length - 1 : number - 1;
        } else {
          TwoNumber = number === images.length -1 ? 0 : number + 1;
        }
        moveSliderMobile(TwoNumber);
      });
    });
  }

  function moveSliderMobile(x) {
    sliderImagesMobile.querySelector(".active-mobile").classList.remove("active-mobile");
    sliderImagesMobile.querySelector(".num" + x) .classList.add("active-mobile");
  }
}

let galery = [{
  url: "./img/design-solution/1.png",
}, {
  url:  "./img/design-solution/2.png",
}, {
  url:  "./img/design-solution/3.png",
},{
  url:  "./img/design-solution/4.png",
}];

function initSliderGaleryMobile() {

  let sliderGaleryMobile = document.querySelector(".slider-mobile__galery-images");
  let sliderGaleryArrowsMobile = document.querySelector(".design-solution__slider-arrows-mobile");

  initGaleryMobile();
  initArrowsGaleryMobile();

  function initGaleryMobile() {
    galery.forEach((img, index) => {
    let MobileGaleryDiv = `<div class="mobile-galery number${index} ${index === 0 ? "active-img" : ""}" style="background-image:url(${galery[index].url});" data-index="${index}"></div>`;
    sliderGaleryMobile.innerHTML += MobileGaleryDiv;
    });
  }

  function initArrowsGaleryMobile() {
    sliderGaleryArrowsMobile.querySelectorAll(".slider-arrows-galery-mobile__item ").forEach(arrows => {
      arrows.addEventListener("click", function() {
        let numbers = +sliderGaleryMobile.querySelector(".active-img").dataset.index;
        let NewNumber;
        
        if (arrows.classList.contains("One")) {
          NewNumber = numbers === 0  ?  galery.length - 1 : numbers - 1;
        } else {
          NewNumber = numbers === galery.length -1 ? 0 : numbers + 1;
        }
        moveSliderGaleryMobile(NewNumber);
      });
    });
  }

  function moveSliderGaleryMobile(i) {
    sliderGaleryMobile.querySelector(".active-img").classList.remove("active-img");
    sliderGaleryMobile.querySelector(".number" + i) .classList.add("active-img");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions),initSliderMobile(),initSliderGaleryMobile();
});