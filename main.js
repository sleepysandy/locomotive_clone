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


// gsap.to(document.querySelector('#key-visual-section .divider'), {
//    scrollTrigger: {
//     trigger: "#key-visual-section .divider",
//     start: "top 85%",
//     end: 'bottom top',
//     toggleActions: 'play none none none',
//     toggleClass: "divider-entry",
//    }
// });


// gsap.to(document.querySelector('#outline-section .summary-text'), {
//   scrollTrigger: {
//    trigger: "#outline-section .summary-text",
//    start: "top 95%",
//    end: 'bottom top',
//    toggleActions: 'play none none none',
//    toggleClass: "summary-text-entry",
//   }
// });

  
window.addEventListener('scroll', () =>{
  const kvDividerEntry =document.querySelector('#key-visual-section .divider');

  if (window.scrollY >= 125) {
    kvDividerEntry.classList.add('divider-entry');
  }
  else {
  }
}, false);


window.addEventListener('scroll', () =>{
  const olsSummaryTextEntry =document.querySelector('#outline-section .summary-text');

  if (window.scrollY >= 80) {
    olsSummaryTextEntry.classList.add('summary-text-entry');
  }
  else {
  }
}, false);


window.addEventListener('scroll', () =>{
  const olsSummaryListItemEntry =document.querySelector('#outline-section .list-item');
  const olsSummaryListItemEntry2 =document.querySelector('#outline-section .list-item:nth-child(2)');
  const olsSummaryListItemEntry3 =document.querySelector('#outline-section .list-item:nth-child(3)');
  const olsSummaryListItemEntry4 =document.querySelector('#outline-section .list-item:nth-child(4)');

  if (window.scrollY >= 80) {
    olsSummaryListItemEntry.classList.add('list-item-entry');
    olsSummaryListItemEntry2.classList.add('list-item-entry');
    olsSummaryListItemEntry3.classList.add('list-item-entry');
    olsSummaryListItemEntry4.classList.add('list-item-entry');
  }
  else {
  }
}, false);


window.addEventListener('scroll', () =>{
  const olsChild1InfoInnerEntry =document.querySelector('#outline-section-child1 .summary-info-inner');
  if (window.scrollY >= 860) {
    olsChild1InfoInnerEntry.classList.add('summary-info-inner-entry');
  }
  else {
  }
}, false);


window.addEventListener('scroll', () =>{
  const olsChild1SummaryImgEntry =document.querySelector('#outline-section-child1 .summary-img');
  if (window.scrollY >= 400) {
    olsChild1SummaryImgEntry.classList.add('summary-img-entry');
  }
  else {
  }
}, false);


window.addEventListener('scroll', () =>{
  const olsChild1SummarySpeedTextEntry =document.querySelector('#outline-section-child1 .summery-speed-text');
  if (window.scrollY >= 1000) {
    olsChild1SummarySpeedTextEntry.classList.add('summary-speed-text-entry');
  }
  else {
  }
}, false);

gsap.to(document.querySelector('#outline-section-child1 .summary-speed-bubble'), {
   scrollTrigger: {
    trigger: "#outline-section-child1 .summary-speed-bubble",
    start: "top 95%",
    toggleActions: 'restart none none none',
    toggleClass: "summary-speed-bubble-entry",
   }
});