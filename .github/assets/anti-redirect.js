// Prevent "/home" redirects + fix runtime /assets loads to docs.gofiber.io
(function () {
    var DOCS = 'https://docs.gofiber.io';
    function toDocs(u) {
        if (typeof u !== 'string') return u;
        if (u === '/' || u === '') return DOCS + '/';
        if (u.charAt(0) === '/') return DOCS + u;
        return u;
    }
    function isHome(u) {
        return typeof u === 'string' &&
            (/^\/home\/?(?:[?#]|$)/.test(u) || /^https?:\/\/docs\.gofiber\.io\/home\/?(?:[?#]|$)/.test(u));
    }
    try {
        var wrap = fn => function (state, title, url) {
            if (isHome(url)) url = '/';
            return fn.call(this, state, title, url);
        };
        history.pushState = wrap(history.pushState);
        history.replaceState = wrap(history.replaceState);
        var a = location.assign.bind(location);
        var r = location.replace.bind(location);
        location.assign = u => a(isHome(u) ? '/' : toDocs(u));
        location.replace = u => r(isHome(u) ? '/' : toDocs(u));
    } catch (e) {}
    // Patch dynamic script/link loads
    var origSetAttr = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function (name, value) {
        if (this.tagName === 'SCRIPT' && name === 'src') value = toDocs(value);
        if (this.tagName === 'LINK' && name === 'href') value = toDocs(value);
        if (name === 'href' && (value === '/' || value === '')) value = DOCS + '/';
        return origSetAttr.call(this, name, value);
    };
    var desc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
    if (desc && desc.set) {
        Object.defineProperty(HTMLScriptElement.prototype, 'src', {
            set(v){ desc.set.call(this, toDocs(v)); },
            get(){ return desc.get.call(this); }
        });
    }
})();
