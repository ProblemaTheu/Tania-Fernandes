let hasScrolled = false;

window.addEventListener('scroll', function() {
    const element_wpp = document.querySelector('.wpp_button');
    const element_sb = document.querySelector('.scrollbar');

    if (window.scrollY >= 100) {
        element_sb.classList.add('change_color');
        element_wpp.classList.add('add_grayscale_filter');
    } else {
        element_sb.classList.remove('change_color');
        element_wpp.classList.remove('add_grayscale_filter');
    }
});

window.addEventListener('scroll', function(){
    const element_thumb = this.document.querySelector('.thumb_text');

    if(this.window.scrollY >= 0 && this.window.scrollY < 1000){
        element_thumb.innerHTML = "🌑"
    }

    if(this.window.scrollY >= 1000 && this.window.scrollY < 2000){
        element_thumb.innerHTML = "🌒"
    }

    else if(this.window.scrollY >= 2000 && this.window.scrollY < 3000){
        element_thumb.innerHTML = "🌓"
    }

    else if(this.window.scrollY >= 3000 && this.window.scrollY < 4000){
        element_thumb.innerHTML = "🌔"
    }

    else if(this.window.scrollY >= 4000 && this.window.scrollY < 5000){
        element_thumb.innerHTML = "🌕"
    }


})

