(() => {
    const LOGIN_HASH = "e99a18c428cb38d5f260853678922e03"; // admin
    const PASS_HASH  = "25d55ad283aa400af464c76d713c07ad"; // 12345678

    function md5(str) {
        return CryptoJS.MD5(str).toString();
    }

    const form  = document.getElementById("loginForm");
    const flag  = document.getElementById("flag");
    const error = document.getElementById("error");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const login = document.getElementById("login").value.trim();
        const pass  = document.getElementById("password").value;

        error.style.display = "none";

        if (md5(login) === LOGIN_HASH && md5(pass) === PASS_HASH) {
            flag.style.display = "block";
        } else {
            error.style.display = "block";
        }
    });
})();
