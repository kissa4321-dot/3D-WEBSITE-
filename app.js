document.addEventListener("mousemove", (event) =>{
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) =>{
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    });
});

// SIGNIN PAGE OPEN AND CLOSE ANIMATION
const signinButton = document.getElementById("signinButton");
const signinPage = document.getElementById("signinPage");
const closeIcon = document.getElementById("closeIcon");

signinButton.addEventListener("click", function() {
    signinPage.classList.remove("closeSignin");
    signinPage.classList.add("openSignin");
});

closeIcon.addEventListener("click", function() {
    signinPage.classList.add("closeSignin");
    signinPage.classList.remove("openSignin");
});

// 1. Swiper Carousel Initialization
const swiper = new Swiper('.portfolio-swiper', {
    effect: 'coverflow', // 3D effect
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
});

// 2. Animated Counter Logic
const counters = document.querySelectorAll('.counter');
const section = document.querySelector('#counter-section');

const startCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Start animation when section is visible on scroll
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounter();
        observer.unobserve(section);
    }
}, { threshold: 0.5 });

observer.observe(section);

const counterItems = document.querySelectorAll('.count-val');

counterItems.forEach(item => {
    const target = +item.getAttribute('data-target');
    let count = 0;
    const increment = target / 50;

    const update = () => {
        if (count < target) {
            count += increment;
            item.innerText = Math.ceil(count) + "+";
            setTimeout(update, 20);
        } else {
            item.innerText = target + "+";
        }
    };
    update();
});