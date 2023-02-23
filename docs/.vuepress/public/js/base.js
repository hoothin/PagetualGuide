if (location.hostname === 'pagetual.hoothin.com') {
    window.addEventListener('pushState', e => {
        setTimeout(() => {
            window.history.replaceState(undefined, document.title, location.href.replace("/PagetualGuide/", "/"));
        },1);
        setTimeout(() => {
            window.history.replaceState(undefined, document.title, location.href.replace("/PagetualGuide/", "/"));
        },500);
    });
}
window.addEventListener("load", e => {
    let action = document.querySelector('.action>a');
    if (action) action.target = '_self';
});