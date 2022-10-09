if (location.href.indexOf('/PagetualGuide') === -1) {
    document.addEventListener('mousedown', e => {
        if (e.target.tagName === 'A') {
            e.target.href = e.target.href.replace('/PagetualGuide/', '');
        }
    });
}