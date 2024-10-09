var togglebtn=document.querySelector(".togglebtn");
        var nav=document.querySelector(".navlinks");
        var links=document.querySelector(".navlinks li");

        togglebtn.addEventListener("click", function(){
            this.classList.toggle("click");
            nav.classList.toggle("open");
        })

        

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

document.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav-blur');
    } else {
        nav.classList.remove('nav-blur');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector('#skills');
    const progressBars = {
        "html-progress": "90%",
        "css-progress": "90%",
        "js-progress": "90%",
        "bootstrap-progress": "70%",
        "node-progress": "20%",
        "react-progress": "10%",
        "php-progress": "70%"
    };

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateProgressBars() {
        if (isElementInViewport(skillsSection)) {
            for (const [id, width] of Object.entries(progressBars)) {
                const progressBar = document.getElementById(id);
                progressBar.style.width = width;
            }
            window.removeEventListener('scroll', animateProgressBars);
        }
    }

    window.addEventListener('scroll', animateProgressBars);
});



