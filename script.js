window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 1500);
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Parallax Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const parallaxElements = document.querySelectorAll('.hero::before');
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${scrolled * 0.3}px)`;
            });
        });

        // Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Progress Bars Animation
        const progressBars = document.querySelectorAll('.progress-fill');
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 500);
                }
            });
        });

        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });

             // Ripple Effect
        document.querySelectorAll('.ripple').forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                    animation: ripple-animation 0.6s ease-out;
                    z-index: 10;
                `;

                this.appendChild(ripple);

                ripple.addEventListener('animationend', () => {
                    ripple.remove();
                });
            });
        });

        // Carousel Navigation
        const track = document.getElementById('carouselTrack');
        const dots = document.querySelectorAll('.carousel-dot');

        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                dots.forEach(d => d.classList.remove('active'));
                this.classList.add('active');

                const slideIndex = parseInt(this.dataset.slide);
                const offset = slideIndex * -100;
                track.style.transform = `translateX(${offset}%)`;
            });
        });

        // Light/Dark Mode Toggle

const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});



window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrolled / height) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
});


const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const ctx = document.getElementById('carbonChart').getContext('2d');
const carbonChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Refurbishment', 'New Build', 'Complete', 'Estimate'],
        datasets: [{
            label: 'Embodied Carbon Emissions (tCO₂e)',
            data: [320000, 450000, 800000, 450000],
            backgroundColor: ['#74b9ff', '#a29bfe', '#81ecec', '#fab1a0']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: value => value.toLocaleString()
                }
            }
        }
    }
});



  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      let originalText = btn.innerText;
      btn.innerText = '✔ Added!';
      setTimeout(() => btn.innerText = originalText, 1500);
    });
  });


  const exploreBtn = document.getElementById('exploreBtn');

  exploreBtn.addEventListener('click', function (e) {
    // Ripple Effect
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      animation: rippleEffect 0.6s linear;
    `;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // Change Text to "Added"
    this.textContent = "Added";
  });


