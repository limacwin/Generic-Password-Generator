function getPassword() {
    var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var password_length = document.getElementById("password_length").value;
    if (password_length == "")
        password_length = 16;
    var password = "";

    for (var i = 0; i < password_length; i++) {
        var random_number = Math.floor(Math.random() * charset.length);
        password += charset.substring(random_number, random_number + 1);
    }

    document.getElementById("password").value = password;
}

function copyText() {
    let copyText = document.querySelector(".password");
    copyText.querySelector("button").addEventListener("click", function() {
        let input = copyText.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyText.classList.remove("active");
        }, 2500);
    });
}