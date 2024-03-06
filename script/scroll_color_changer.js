let hasScrolled = false;

window.addEventListener('scroll', function() {
    const element_sb = document.querySelector('.scrollbar');
    const element_wpp = document.querySelector('.wpp_button');

    if (window.scrollY >= 100) {
        element_sb.classList.add('change_color');
        element_wpp.classList.add('add_grayscale_filter');
    } else {
        element_sb.classList.remove('change_color');
        element_wpp.classList.remove('add_grayscale_filter');
    }
});

