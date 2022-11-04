"use strict";
const offcanvas = document.querySelector('#staticBackdrop');
const offcanves_close_btn = document === null || document === void 0 ? void 0 : document.querySelector('.offcanvas-header .btn-close');
const offcanvas_toggle_btn = document === null || document === void 0 ? void 0 : document.querySelector(`[data-bs-toggle="offcanvas"]`);
offcanves_close_btn.addEventListener('click', () => {
    offcanvas.style.transform = 'translateX(100%)';
});
offcanvas_toggle_btn.onclick = () => {
    const offcanvas_backdrop_fade_show = document.querySelector('.offcanvas-backdrop');
    offcanvas_backdrop_fade_show.style.zIndex = '0';
    offcanvas_backdrop_fade_show === null || offcanvas_backdrop_fade_show === void 0 ? void 0 : offcanvas_backdrop_fade_show.addEventListener('click', () => {
        offcanves_close_btn.click();
    });
};
