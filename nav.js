
      document.addEventListener('DOMContentLoaded', function () {
    const marker = document.querySelector('.marker');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__menu > li > a');

    function setMarker(e) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
    }

    function updateActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('nav__menu--focused');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('nav__menu—focused');
                setMarker(link);
            }
        });
    }

    // 초기 마커 위치 설정
    updateActiveLink();

    // 스크롤 이벤트에 반응
    window.addEventListener('scroll', updateActiveLink);
    });
