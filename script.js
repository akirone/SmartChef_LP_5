
// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
function toggleMobileNav() {
    const el = document.getElementById('mobileNav');
    el.classList.toggle('open');
    const hidden = el.getAttribute('aria-hidden') === 'true';
    el.setAttribute('aria-hidden', String(!hidden));
}

// simple testimonial rotator
(function () {
    const quotes = [{
        text: '"Makanannya luar biasa, pelayanan cepat, dan suasananya hangat."',
        who: '— John Doe, CEO'
    },
    {
        text: '"Tempat yang cocok untuk keluarga, menu variatif dan rasanya mantap."',
        who: '— Siti A.'
    },
    {
        text: '"Delivery cepat dan kemasan rapi. Bakal pesan lagi!"',
        who: '— Ahmad R.'
    }
    ];
    let idx = 0;
    const qText = document.getElementById('quoteText');
    const qWho = document.getElementById('quoteWho');
    setInterval(() => {
        idx = (idx + 1) % quotes.length;
        qText.style.opacity = 0;
        qWho.style.opacity = 0;
        setTimeout(() => {
            qText.textContent = quotes[idx].text;
            qWho.textContent = quotes[idx].who;
            qText.style.opacity = 1;
            qWho.style.opacity = 1;
        }, 350);
    }, 4200);
})();

// accessibility: close mobile nav on outside click (for small screens)
document.addEventListener('click', function (e) {
    const nav = document.getElementById('mobileNav');
    const toggle = document.querySelector('.menu-toggle');
    if (!nav || !toggle) return;
    if (window.innerWidth > 720) return;
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden', 'true');
});