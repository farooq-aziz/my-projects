// Register Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

// Header Hamburger
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".__hamburger");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 1200) {
        const __hamburger = document.querySelector(".__hamburger");
        const __hamburgerMenu = document.querySelector('.mainHeader nav');
        const __hamburgerMenuLinks = document.querySelectorAll('.mainHeader nav ul li');

        let tlForHeader = gsap.timeline({ paused: true });

        tlForHeader.to(__hamburgerMenu, {
            duration: 1,
            opacity: 1,
            height: 'auto', // change this to 100vh for full-height menu
            ease: 'expo.inOut',
        })
        tlForHeader.from(__hamburgerMenuLinks, {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: 'expo.inOut',
        }, "-=0.5");

        tlForHeader.reverse();

        __hamburger.addEventListener('click', () => {
            tlForHeader.reversed(!tlForHeader.reversed());
            console.log(__hamburger, __hamburgerMenu, __hamburgerMenuLinks);
        });
    }
});

// Awards Slider
const emblaNodeForAwards = document.querySelector('.awardsSliderFold .embla')
const optionsForAwards = { loop: true }
const pluginsForAwards = [EmblaCarouselAutoScroll({ playOnInit: true, speed: 0.5 })]
const emblaApiForAwards = EmblaCarousel(emblaNodeForAwards, optionsForAwards, pluginsForAwards)

// Reviews Slider
const emblaNodeForReviews = document.querySelector('.reviewsFold .embla')
const optionsForReviews = { loop: true,}
const pluginsForReviews = [EmblaCarouselClassNames(), EmblaCarouselAutoplay({ delay: 4000 })]
const prevBtnNodeForReviews = emblaNodeForReviews.querySelector('.embla__button--prev')
const nextBtnNodeForReviews = emblaNodeForReviews.querySelector('.embla__button--next')
const dotsNodeForReviews = emblaNodeForReviews.querySelector('.emblaDots')
const emblaApiForReviews = EmblaCarousel(emblaNodeForReviews, optionsForReviews, pluginsForReviews)

const addTogglePrevNextBtnsActiveForReviews = (emblaApiForReviews, prevBtnNodeForReviews, nextBtnNodeForReviews) => {
    const togglePrevNextBtnsState = () => {
        if (emblaApiForReviews.canScrollPrev()) prevBtnNodeForReviews.removeAttribute('disabled')
        else prevBtnNodeForReviews.setAttribute('disabled', 'disabled')

        if (emblaApiForReviews.canScrollNext()) nextBtnNodeForReviews.removeAttribute('disabled')
        else nextBtnNodeForReviews.setAttribute('disabled', 'disabled')
    }

    emblaApiForReviews
        .on('select', togglePrevNextBtnsState)
        .on('init', togglePrevNextBtnsState)
        .on('reInit', togglePrevNextBtnsState)

    return () => {
        prevBtnNodeForReviews.removeAttribute('disabled')
        nextBtnNodeForReviews.removeAttribute('disabled')
    }
}

const addPrevNextBtnsClickHandlersForReviews = (emblaApiForReviews, prevBtnNodeForReviews, nextBtnNodeForReviews) => {
    const scrollPrev = () => {
        emblaApiForReviews.scrollPrev()
    }
    const scrollNext = () => {
        emblaApiForReviews.scrollNext()
    }
    prevBtnNodeForReviews.addEventListener('click', scrollPrev, false)
    nextBtnNodeForReviews.addEventListener('click', scrollNext, false)

    const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActiveForReviews(
        emblaApiForReviews,
        prevBtnNodeForReviews,
        nextBtnNodeForReviews
    )

    return () => {
        removeTogglePrevNextBtnsActive()
        prevBtnNodeForReviews.removeEventListener('click', scrollPrev, false)
        nextBtnNodeForReviews.removeEventListener('click', scrollNext, false)
    }
}
const addDotBtnsAndClickHandlersForReviews = (emblaApiForReviews, dotsNodeForReviews) => {
    let dotNodes = []

    const addDotBtnsWithClickHandlers = () => {
        dotsNodeForReviews.innerHTML = emblaApiForReviews
            .scrollSnapList()
            .map(() => '<button class="embla__dot" type="button"></button>')
            .join('')

        const scrollTo = (index) => {
            emblaApiForReviews.scrollTo(index)
        }

        dotNodes = Array.from(dotsNodeForReviews.querySelectorAll('.embla__dot'))
        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => scrollTo(index), false)
        })
    }

    const toggleDotBtnsActive = () => {
        const previous = emblaApiForReviews.previousScrollSnap()
        const selected = emblaApiForReviews.selectedScrollSnap()
        dotNodes[previous].classList.remove('embla__dot--selected')
        dotNodes[selected].classList.add('embla__dot--selected')
    }

    emblaApiForReviews
        .on('init', addDotBtnsWithClickHandlers)
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('init', toggleDotBtnsActive)
        .on('reInit', toggleDotBtnsActive)
        .on('select', toggleDotBtnsActive)

    return () => {
        dotsNodeForReviews.innerHTML = ''
    }
}

const removeDotBtnsAndClickHandlersForReviews = addDotBtnsAndClickHandlersForReviews(
    emblaApiForReviews,
    dotsNodeForReviews
)

const removePrevNextBtnsClickHandlersForReviews = addPrevNextBtnsClickHandlersForReviews(
    emblaApiForReviews,
    prevBtnNodeForReviews,
    nextBtnNodeForReviews
)
emblaApiForReviews.on('destroy', removePrevNextBtnsClickHandlersForReviews)
emblaApiForReviews.on('destroy', removeDotBtnsAndClickHandlersForReviews)


// Solutotions Slider
const emblaNodeForSolutions = document.querySelector('.solutionsFold .embla')
const dotsNodeForSolutions = emblaNodeForSolutions.querySelector('.emblaDots')
const prevBtnNodeForSolutions = emblaNodeForSolutions.querySelector('.embla__button--prev')
const nextBtnNodeForSolutions = emblaNodeForSolutions.querySelector('.embla__button--next')
const totalSlidesNodeForSolutions = emblaNodeForSolutions.querySelector('.totalSlides') // Selecting the totalSlides element
const optionsForSolutions = { loop: true }
const emblaApiForSolutions = EmblaCarousel(emblaNodeForSolutions, optionsForSolutions)

const addTogglePrevNextBtnsActiveForSolutions = (emblaApiForSolutions, prevBtnNodeForSolutions, nextBtnNodeForSolutions) => {
    const togglePrevNextBtnsState = () => {
        if (emblaApiForSolutions.canScrollPrev()) prevBtnNodeForSolutions.removeAttribute('disabled')
        else prevBtnNodeForSolutions.setAttribute('disabled', 'disabled')

        if (emblaApiForSolutions.canScrollNext()) nextBtnNodeForSolutions.removeAttribute('disabled')
        else nextBtnNodeForSolutions.setAttribute('disabled', 'disabled')
    }

    emblaApiForSolutions
        .on('select', togglePrevNextBtnsState)
        .on('init', togglePrevNextBtnsState)
        .on('reInit', togglePrevNextBtnsState)

    return () => {
        prevBtnNodeForSolutions.removeAttribute('disabled')
        nextBtnNodeForSolutions.removeAttribute('disabled')
    }
}

const addPrevNextBtnsClickHandlersForSolutions = (emblaApiForSolutions, prevBtnNodeForSolutions, nextBtnNodeForSolutions) => {
    const scrollPrev = () => {
        emblaApiForSolutions.scrollPrev()
    }
    const scrollNext = () => {
        emblaApiForSolutions.scrollNext()
    }
    prevBtnNodeForSolutions.addEventListener('click', scrollPrev, false)
    nextBtnNodeForSolutions.addEventListener('click', scrollNext, false)

    const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActiveForSolutions(
        emblaApiForSolutions,
        prevBtnNodeForSolutions,
        nextBtnNodeForSolutions
    )

    return () => {
        removeTogglePrevNextBtnsActive()
        prevBtnNodeForSolutions.removeEventListener('click', scrollPrev, false)
        nextBtnNodeForSolutions.removeEventListener('click', scrollNext, false)
    }
}

const addDotBtnsAndClickHandlersForSolutions = (emblaApiForSolutions, dotsNodeForSolutions, totalSlidesNodeForSolutions) => {
    let dotNodes = []

    const addDotBtnsWithClickHandlers = () => {
        const totalSlides = emblaApiForSolutions.slideNodes().length; // Get total number of slides
        totalSlidesNodeForSolutions.textContent = `0${totalSlides}`; // Update totalSlidesNodeForSolutions content
        dotsNodeForSolutions.innerHTML = emblaApiForSolutions
            .scrollSnapList()
            .map((e, i) => `<button class="embla__dot" type="button">0${i + 1}</button>`)
            .join('')

        const scrollTo = (index) => {
            emblaApiForSolutions.scrollTo(index)
        }

        dotNodes = Array.from(dotsNodeForSolutions.querySelectorAll('.embla__dot'))
        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => scrollTo(index), false)
        })
    }

    const toggleDotBtnsActive = () => {
        const previous = emblaApiForSolutions.previousScrollSnap()
        const selected = emblaApiForSolutions.selectedScrollSnap()
        dotNodes[previous].classList.remove('embla__dot--selected')
        dotNodes[selected].classList.add('embla__dot--selected')
    }

    emblaApiForSolutions
        .on('init', addDotBtnsWithClickHandlers)
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('init', toggleDotBtnsActive)
        .on('reInit', toggleDotBtnsActive)
        .on('select', toggleDotBtnsActive)

    return () => {
        dotsNodeForSolutions.innerHTML = ''
    }
}

const removeDotBtnsAndClickHandlersForSolutions = addDotBtnsAndClickHandlersForSolutions(
    emblaApiForSolutions,
    dotsNodeForSolutions,
    totalSlidesNodeForSolutions
)
const removePrevNextBtnsClickHandlersForSolutions = addPrevNextBtnsClickHandlersForSolutions(
    emblaApiForSolutions,
    prevBtnNodeForSolutions,
    nextBtnNodeForSolutions
)
emblaApiForSolutions.on('destroy', removePrevNextBtnsClickHandlersForSolutions)
emblaApiForSolutions.on('destroy', removeDotBtnsAndClickHandlersForSolutions)

// Hero Fold
document.addEventListener("DOMContentLoaded", function () {
    function rotateAndPositionImagesForHero() {
        gsap.to('.transformSlides img:nth-child(1)', {
            rotation: -20,
            x: "-60px",
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(2)', {
            rotation: 5,
            x: "-110px",
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(3)', {
            rotation: 25,
            x: 250,
            y: 50,
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(4)', {
            rotation: -5,
            x: 130,
            duration: 1,
            ease: "none"
        });

        gsap.to('.transformSlides img:nth-child(5)', {
            rotation: 25,
            x: 70,
            duration: 1,
            ease: "none"
        });
    }

    function resetRotationAndPositionForHero() {
        gsap.to('.transformSlides img', {
            rotation: 0,
            x: 0,
            duration: 1,
            ease: "none"
        });
    }

    gsap.to("#heroFold", {
        scrollTrigger: {
            trigger: "#heroFold",
            start: "center 30%",
            end: "center center",
            toggleActions: "play none none reverse",
            onEnter: resetRotationAndPositionForHero,
            onLeaveBack: rotateAndPositionImagesForHero,
            markers: false
        }
    });
})

// Reviews Industries
// const emblaNodeForIndustries = document.querySelector('.industriesFold .embla')
// const optionsForIndustries = { loop: true,}
// const pluginsForIndustries = [EmblaCarouselAutoplay({ delay: 4000 })]
// const emblaApiForIndustries = EmblaCarousel(emblaNodeForIndustries, optionsForIndustries, pluginsForIndustries)
$('.industriesFold .slickContainer').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    loop: true,
    infinite: true,
    adaptiveHeight: true,
    draggable: false
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    });
});
