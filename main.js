gsap.registerPlugin(ScrollTrigger);



 gsap.fromTo(document.querySelector('#key-visual-section header'), {
    y: 0,
  }, {
    y: '-=200px',
    scrollTrigger: {
      start: "top top",
      end: "30%",
      scrub: true,
    },
  });

  gsap.fromTo(document.querySelector('#key-visual-section .left-title'), {
    x: 0,
    y: 0,
  }, {
    x: '+=200px',
    scrollTrigger: {
      start: "top top",
      end: "60%",
      scrub: true,
    },
  });
  
  gsap.fromTo(document.querySelector('#key-visual-section .right-title'), {
    x: 0,
    y: 0,
  }, {
    x: '-=200px',
    scrollTrigger: {
      start: "top top",
      end: "60%",
      scrub: true,
    },
  });
  
  gsap.fromTo(document.querySelector('#key-visual-section .first-line'), {
    transform: 'translateY(0)',
  }, {
    transform: 'translateY(-20vh)',
    scrollTrigger: {
      start: 'top top',
      end: '50%',
      scrub: true,
    },
  });
 
  gsap.fromTo(document.querySelector('#key-visual-section .second-line'), {
    transform: 'translateY(0)',
  }, {
    transform: 'translateY(-15vh)',
    scrollTrigger: {
      start: 'top top',
      end: '50%',
      scrub: true,
    },
  });

const splitTextElements = document.querySelectorAll('#key-visual-section .split-version > span');

gsap.to(Array.from(splitTextElements), {
    y: (index) => {
        switch (index) {
            case 0:
                return '-=36vh';
            case 1:
                return '-=50vh';
            case 2:
                return '-=15vh';
            case 3:
                return '-=42vh';
        }
    },
    scrollTrigger:{
        start: 'top top',
        end: '50%',
        scrub: true,
    },
});


gsap.fromTo(document.querySelector('#key-visual-section .logo'), {
    transform: 'translateY(0)',
  }, {
    transform: 'translateY(-10vh)',
    scrollTrigger: {
      start: 'top top',
      end: '50%',
      scrub: true,
    },
  });

