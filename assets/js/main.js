
//cursor
const cursor = document.querySelector('.cursor');
const cursorPointer = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
  gsap.set(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: .1,
  });
});
cursorPointer.forEach((el) => {
  el.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
          scale: 2,
          duration: .5,
      });
  });

  el.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
          scale: 1,
          backgroundColor: '#fff',
          duration: .5,
      });
  });
});



aaaa = gsap.timeline({
  onComplete:function(){
      $('.preloader').remove();
      startIntro();
  }
})

aaaa
.to(".preloader__counter", 1,{
  innerText: 100,
  snap : {
    innerText: 1
 },
 stagger:0.01,
})
.to('.preloader__container', 2,{
      transform: 'rotate(-90deg) scale(30, 30)',
  })


  //intro animation
  function startIntro() {
    //intro 글자 나누기
    const headerTxt = new SplitType('.header__item', { types: 'words, chars', });
    const introHeaderTxt = new SplitType('.intro__header-main span', {types: 'words, chars',})
    const introSubTxt = new SplitType('.intro__header-sub', {types: 'words, chars',})
    const introTitleTxt = new SplitType('.intro__title', {types: 'words, chars',})


    const intro = gsap.timeline();
    intro
    .to('.intro__wrapper',{opacity:1},0)
    .fromTo('.intro__video',
      {opacity: 0},
      {opacity: 1, duration: 3}, 0
    )
    .fromTo('.header__item .char',
      {opacity:0, transform: 'translate(0px, 120%)'},
      {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },1
    )
    .fromTo('.intro__overtitle-item',
      {opacity: 0, transform: 'translate(0px, 120%)'},
      {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },1
    )
    .to('.intro__overtitle-item.pt2',
      {marginLeft: '7.5vw', duration: 2}, 2
    )
    .to('.intro__overtitle-item.pt3',
      {marginLeft: '11.5vw', duration: 2}, 2
    )
    .to('.intro__overtitle-item.pt4',
      {marginLeft: '16.6vw', duration: 2}, 2
    )
    .to('.intro__overtitle-item.pt5',
      {marginLeft: '25vw', duration: 2}, 2
    )
    .fromTo('.intro__header-main .char',
      {opacity: 0, transform: 'translate(0px, 120%)'},
      {opacity:1, transform: 'translate(0px, 0%)',
        stagger: .05  
        },2
    )
    .fromTo('.intro__header-sub .char', 
      {opacity: 0, transform: 'translate(0px, 120%)'},
      {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },3
    )
    .fromTo('.intro__title .char',
      {opacity: 0, transform: 'translate(0px, 120%)'},
      {opacity:1, transform: 'translate(0px, 0%)',
        stagger: {
          from:"center",
          each:0.05,
         } 
       },4
    )
  }
  


//service
const service = gsap.timeline({
  scrollTrigger: {
      trigger: '.service',
      start: 'top top',
      end: '50% top',
      scrub: 0,
  }
})
service
.to('.service__heading', {yPercent: '-50'})
.to('.service__container', {yPercent:'-50'})



//fragment
const fragmentTopTxt = new SplitType('.fragment__top-text .split', { types: 'chars', });
const fragmentTopTxt2 = new SplitType('.fragment__top-year .split', { types: 'chars', });
const fragmentTop = gsap.timeline({
  scrollTrigger: {
      trigger: '.fragment__top',
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: 0,
  }
})
fragmentTop
.fromTo('.fragment__top-text .char',
{opacity: 1, transform: 'translate(0px, 120%)'},
{opacity: 1, transform: 'translate(0px, 0%)', stagger: .05 },1
)
.fromTo('.fragment__top-year .char',
{opacity: 1, transform: 'translate(0px, 120%)'},
{opacity: 1, transform: 'translate(0px, 0%)', stagger: .05 },1
)

const fragmentTitleTxt = new SplitType('.fragment__title', { types: 'chars', });
const fragmentTitle = gsap.timeline({
  scrollTrigger: {
      trigger: '.fragment__title-wrapper',
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: 1,
  }
})
fragmentTitle
.fromTo('.fragment__title .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,
    stagger: {
    from:"center",
    each:0.05,
   }})

   $('.fragment__content-item').each(function(){
    gsap.to($(this),{
        scrollTrigger: {
            trigger: $(this),
            start: "0% 50%",
            end: "100% 50%",
            scrub: 1,
        },
        yPercent: -100,
    })
    
})


const reviewTitleTxt = new SplitType('.review__heading', { types: 'chars', });
const reviewPostTxt = new SplitType('.review__client-title', { types: 'words', });
const reviewClientTxt = new SplitType('.review__client-text', { types: 'words', });
const reviewserviceTitleTxt = new SplitType('.review__service-title', { types: 'words', });
const reviewserviceheadingTxt = new SplitType('.review__service-heading', { types: 'words', });
const reviewserviceitemTxt = new SplitType('.review__service-item', { types: 'words', });
const reviewlinkTxt = new SplitType('.review__link', {types: 'words'});

const reviewTitle = gsap.timeline({
  scrollTrigger: {
      trigger: '.review',
      start: 'top 50%',
      end: '50% bottom',
      scrub: 1,
  }
})
reviewTitle
.fromTo('.review__heading .char',
  {opacity: 0, transform: 'translate(0px, 120%)'},
  {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },
)

//review toggle
$('.review__item').click(function (e) {
  e.preventDefault();

  const $this = $(this);
  const isActive = $this.hasClass('active');

  $('.review__item.active').not($this).each(function () {
    const $activeItem = $(this);
    $activeItem.removeClass('active');
    gsap.set(
      $activeItem.find('.review__container, .review__social-link, .review__client-img, .review__hashtag-item'),
      { clearProps: 'all' }
    );
  });

  if (!isActive) {
    $this.addClass('active');
    const timeline = gsap.timeline();
    timeline
      .fromTo($this.find('.review__container'), { opacity: 0 }, { opacity: 1 })
      .fromTo($this.find('.review__social-link'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 },)
      .fromTo($this.find('.review__client-img'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }, "<")
      .fromTo($this.find('.review__hashtag-item'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }, "<")
      .fromTo(
        $this.find('.review__client-title .word'),
        { opacity: 0, transform: 'translate3d(0px, 0px, -60px) rotateY(90deg)' },
        { opacity: 1, transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)' }, "<"
      )
      .fromTo(
        $this.find('.review__client-text .word'),
        { opacity: 0, transform: 'translate3d(0px, 0px, -60px) rotateY(90deg)' },
        { opacity: 1, transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)' }, "<"
      )
      .fromTo(
        $this.find('.review__service-title .char'),
        { opacity: 0, transform: 'translate3d(0px, 0px, -60px) rotateY(90deg)' },
        { opacity: 1, transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)' }, "<"
      )
      .fromTo(
        $this.find('.review__service-heading .word'),
        { opacity: 0, transform: 'translate3d(0px, 0px, -60px) rotateY(90deg)' },
        { opacity: 1, transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)' }, "<"
      )
      .fromTo(
        $this.find('.review__service-item .word'),
        { opacity: 0, transform: 'translate3d(0px, 0px, -60px) rotateY(90deg)' },
        { opacity: 1, transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)' }, "<"
      )
      .fromTo(
        $this.find('.review__link .word'),
        { opacity: 0, transform: 'translate3d(0px, 0px, -60px) rotateY(90deg)' },
        { opacity: 1, transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)' }, "<"
      );
  } else {
    $this.removeClass('active');
    gsap.set($this.find('.review__container, .review__social-link, .review__client-img, .review__hashtag-item'), {
      clearProps: 'all',
    });
  }
});



//social
const socialTitleTxt = new SplitType('.social__title', { types: 'chars', });
const socialCaptionTxt = new SplitType('.social__caption-item', {types: 'chars'});

const socialTitle = gsap.timeline({
  scrollTrigger: {
      trigger: '.social__title',
      start: 'top 70%',
      end: 'top 30%',
      scrub: 1,
  }
})
socialTitle
.fromTo('.social__title .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,
    stagger: {
    from:"center",
    each:0.05,
   }})


   $('.social__row').each(function () {
    const $this = $(this);
  
    const socialCaption = gsap.timeline({
      scrollTrigger: {
        trigger: $this[0],
        start: 'top 70%',
        end: 'top 30%',
        scrub: 1,
      },
    });
  
    socialCaption
    .fromTo(
      $this.find('.social__caption-item .char'),
      { opacity: 0, transform: 'translate3d(0px, 0px, -60px) rotateY(90deg)' },
      { opacity: 1, transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)', stagger: 0.3 }
    );
  });

//feedback
const feedbackTitleTxt = new SplitType('.feedback__title', { types: 'chars', });
const feedbackCaptionTxt = new SplitType('.feedback__text-circle', {types: 'chars'});
const feedbackCaptionTxt2 = new SplitType('.feedback__text-row', {types: 'chars'});

const feedbackTitle = gsap.timeline({
  scrollTrigger: {
      trigger: '.feedback__title',
      start: 'top 70%',
      end: 'top 30%',
      scrub: 1,
  }
})
feedbackTitle
.fromTo('.feedback__title .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,stagger: .05,})
.fromTo('.feedback__text-circle .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,stagger: .05,})
.fromTo('.feedback__text-row .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,stagger: .05,})





///////////////////////////////반응형
let motion = gsap.matchMedia();
motion.add("(min-width: 768px)", () => {

  //lenis
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

gsap.ticker.lagSmoothing(0);

  //about
  const aboutHeaderTxt = new SplitType('.about__header', { types: 'chars', });
  const aboutcaptionTxt = new SplitType('.about__caption-word', { types: 'chars', });
  const aboutTextTxt = new SplitType('.about__text', { types: 'words, chars', });

  const aboutIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__top-container',
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 0,
    }
})
aboutIntro
.fromTo('.about__header .char',
  {opacity: 0, transform: 'translate(0px, 120%)'},
  {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },1
)
.fromTo('.about__caption-line',
  {opacity: 0, transform: 'translate(0px, 120%)'},
  {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },2
)
.fromTo('.about__caption-word .char',
  {opacity: 0, transform: 'translate(0px, 120%)'},
  {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },3
)

let scrollFlag = false;

const aboutText = gsap.timeline({
  scrollTrigger: {
      trigger: '.about__bottom-container',
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: 0,
      //markers:true,
      onUpdate:function(self){
        dir=self.direction;

        if (!abc.isActive()) {
          abc.restart();
        }
      }
  }
})
aboutText
.fromTo('.about__text .char',
  {opacity: 0, transform: 'translate(0px, 120%)'},
  {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },
)

const abc = gsap.timeline({
  paused:true,
  onComplete:function(){
    console.log(111)
    scrollFlag = true
  }
})
abc
.to('.main .about__decor',{y:20})
.to('.main .about__decor',{y:0})



//start
const start = gsap.timeline({
  scrollTrigger: {
      trigger: '.start',
      start: 'top top',
      end: '70% bottom',
      scrub: 1,
  }
})
start
.fromTo('.start__btn',
  {scale: 5},
  {scale: 1}
)


  //featured
const featured = gsap.timeline({
  scrollTrigger: {
      trigger: '.featured__scroll',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0,
  }
})
featured
.to('.featured__scroll-inner',
  {xPercent:'-100',
    x:function(){
      return window.innerWidth
  },
  ease: 'linear'
  },
)
const featured2 = gsap.timeline({
  scrollTrigger: {
      trigger: '.featured__scroll',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0,
      ease: 'linear'
  }
})
featured2.to('.featured',{backgroundColor: "#0710e8",ease:'linear'})
featured2.to('.featured',{backgroundColor: "#5b9d71",ease:'linear'})
featured2.to('.featured',{backgroundColor: "#de3223",ease:'linear'})
featured2.to('.featured',{backgroundColor: "#050505",ease:'linear'})


const reviewbg = gsap.timeline({
  scrollTrigger: {
      trigger: '.fragment-review',
      start: '90% bottom',
      end: '10% bottom',
      scrub: 1,
  }
})
reviewbg
.to('.fragment-review',{backgroundColor: '#fff'},)

//footer
const footerbg = gsap.timeline({
  scrollTrigger: {
      trigger: '.feedback-footer',
      start: '60% bottom',
      end: '40% bottom',
      scrub: 1,
  }
})
footerbg
.to('.feedback-footer',{backgroundColor: '#050505'},)


const footerEmailCaptionTxt = new SplitType('.footer__email-caption', { types: 'chars', });
const footerEmailTxt = new SplitType('.footer__email-data', {types: 'chars'});
const footerTextTxt2 = new SplitType('.footer__text', {types: 'chars'});
const footerSocialTxt = new SplitType('.footer__social-item-inner', {types: 'chars'});

const footer = gsap.timeline({
  scrollTrigger: {
      trigger: '.footer',
      start: 'top 60%',
      end: '40% 60%',
      scrub: 1,
  }
})
footer
.fromTo('.footer__email-caption .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,stagger: .05,})
.fromTo('.footer__email-data .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,stagger: .05,})
.fromTo('.footer__text .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,stagger: .05,})
.fromTo('.footer__social-item-inner .char',
  {y: '100%', opacity: 0},
  {y: '0%', opacity: 1,stagger: .05,})

});


/////////////////모바일
motion.add("(max-width: 767px)", () => {
  console.log('m')
  const aboutText = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__bottom-container',
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 0,
        onUpdate:function(self){
          dir=self.direction;
  
          if (!abc.isActive()) {
            abc.restart();
          }
        }
    }
  })
  aboutText
  .fromTo('.about__text .char',
    {opacity: 0, transform: 'translate(0px, 120%)'},
    {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },
  )
  
  const abc = gsap.timeline({
    paused:true,
    onComplete:function(){
      console.log(111)
      scrollFlag = true
    }
  })
  abc
  .to('.main .about__decor',{y:20})
  .to('.main .about__decor',{y:0})
  
  //footer
.set('.footer__email-caption .char',
  {y: '100%', opacity: 1},)
.set('.footer__email-data .char',
  {y: '100%', opacity: 1},)
.set('.footer__text .char',
  {y: '100%', opacity: 1},)
.set('.footer__social-item-inner .char',
  {y: '100%', opacity: 1},)

});
;





