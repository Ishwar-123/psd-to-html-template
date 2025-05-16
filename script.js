  const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav_2');
        const overlay = document.querySelector('.overlay');
        const navLinks = document.querySelectorAll('.nav_link');
        const backToTop = document.querySelector('.back-to-top');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                overlay.classList.remove('active');

                navLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            });
        });

        let prevScrollPos = window.pageYOffset;
        const navbar = document.querySelector('.nav');

        window.addEventListener('scroll', () => {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';
            } else {
                navbar.style.transform = 'translateY(-100%)';
                navbar.style.opacity = '0';
            }

            // Show/hide back to top button
            if (currentScrollPos > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }

            prevScrollPos = currentScrollPos;
        });

        // Smooth scroll to top
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });