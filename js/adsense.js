if (!window.adsenseInited) {
    window.adsenseInited = true;
    let script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("data-ad-client", "ca-pub-3321669220169470");
    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    if (document.readyState != "complete") {
        window.onload = function() {
            document.head.appendChild(script);
        }
    } else document.head.appendChild(script);
}