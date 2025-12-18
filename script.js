(() => {
    const LOGIN_HASH = "21232f297a57a5a743894a0e4a801fc3"; 
    const PASS_HASH  = "25d55ad283aa400af464c76d713c07ad"; 

    function md5(str) {
        return CryptoJS.MD5(str).toString();
    }

    const form  = document.getElementById("loginForm");
    const flag  = document.getElementById("flag");
    const error = document.getElementById("error");

    function hideAll() {
        flag.classList.add("hidden");
        error.classList.add("hidden");
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        hideAll();

        const login = document.getElementById("login").value.trim();
        const pass  = document.getElementById("password").value;

        if (md5(login) === LOGIN_HASH && md5(pass) === PASS_HASH) {
            flag.classList.remove("hidden");
        } else {
            error.classList.remove("hidden");
        }
    });
})();
(() => {
    const LOGIN_HASH = "21232f297a57a5a743894a0e4a801fc3"; // admin
    const PASS_HASH  = "25d55ad283aa400af464c76d713c07ad"; // 12345678

    function md5(str) {
        return CryptoJS.MD5(str).toString();
    }

    const form  = document.getElementById("loginForm");
    const flag  = document.getElementById("flag");
    const error = document.getElementById("error");

    function hideAll() {
        flag.classList.add("hidden");
        error.classList.add("hidden");
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        hideAll();

        const login = document.getElementById("login").value.trim();
        const pass  = document.getElementById("password").value;

        if (md5(login) === LOGIN_HASH && md5(pass) === PASS_HASH) {
            flag.classList.remove("hidden");
        } else {
            error.classList.remove("hidden");
        }
    });
})();
