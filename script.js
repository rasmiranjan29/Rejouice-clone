
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();






const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var tl = gsap.timeline()
tl.from("#loader h3",{
    scale:0,
    opacity:0,
    duration:2,
    stagger:.5
})
tl.to("#loader h3",{
  scale:20,
  opacity:0,
  duration:.7,
  stagger:.5
})
tl.to("#loader",{
  
  opacity:0,
  duration:1,
})
tl.from("#page1-content h1 span",{
  y:200,
  opacity:0,
  stagger:0.1,
  duration:0.4,
  delay:-0.5
})
tl.to("#loader",{
  display:"none"
})






var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x-50,
        y:e.y-50
    })
});

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
});


page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0.7,
        opacity:0
    })
});

gsap.from(".anim h3",{
    y:100,
    stagger:0.5,
    duration:2,
    ScrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start:"top 30%",
        end:"top 37%",
    }
})




var page5 = document.querySelector("#page5");
var cursor2 = document.querySelector("#cursor2");
page5.addEventListener("mousemove",function(e){
  gsap.to(cursor2,{
      x:e.x-750,
      y:e.y-400
  })
});

page5.addEventListener("mouseenter",function(){
  gsap.to(cursor2,{
      scale:1,
      opacity:1
  })
});


page5.addEventListener("mouseleave",function(){
  gsap.to(cursor2,{
      scale:0.7,
      opacity:0
  })
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  }
});



