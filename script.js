(() => {
    const LOGIN_HASH = "e99a18c428cb38d5f260853678922e03"; // md5("admin")
    const PASS_HASH  = "25d55ad283aa400af464c76d713c07ad"; // md5("12345678")

    function md5(str) {
        return CryptoJS.MD5(str).toString();
    }

    document.getElementById("loginForm").addEventListener("submit", e => {
        e.preventDefault();

        const login = document.getElementById("login").value;
        const pass  = document.getElementById("password").value;

        if (md5(login) === LOGIN_HASH && md5(pass) === PASS_HASH) {
            document.getElementById("flag").classList.remove("hidden");
        }
    });
})();
