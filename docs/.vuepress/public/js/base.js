if (location.hostname === 'pagetual.hoothin.com') {
    window.addEventListener('pushState', e => {
        setTimeout(() => {
            window.history.replaceState(undefined, document.title, location.href.replace("/PagetualGuide", ""));
        },1);
    });
}