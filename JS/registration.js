$(document).ready(function () {

    //check pass
    function checkPassword() {
        let password = $('#txtPassword').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test(password)) {
            return true
        }
        return false
    }
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if (checkPassword()) {
            $("#statusOfPassword").text('')
        } else {
            $("#statusOfPassword").text('Password incorrect')
            $("#statusOfPassword").css('color', 'red')
        }
    })
    //check comfirm pass
    function checkComfirmPassword() {
        let password = $('#txtPassword').val();
        let comfirmpass = $('#txtComfirmPassword').val();
        if (comfirmpass == password && comfirmpass != "") {
            return true
        }
        return false
    }
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if (checkComfirmPassword()) {
            $("#statusOfComfirmPassword").text('')
        } else {
            $("#statusOfComfirmPassword").text('Password incorrect')
            $("#statusOfComfirmPassword").css('color', 'red')
        }
    })
    //check username
    function checkUserName() {
        let userName = $('#txtUserName').val();
        let userNameRegex = /^[a-zA-Z ]+$/;
        if (userNameRegex.test(userName)) {
            return true
        }
        return false
    }
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if (checkUserName()) {
            $("#statusOfUserName").text('')
        } else {
            $("#statusOfUserName").text('Name incorrect')
            $("#statusOfUserName").css('color', 'red')
        }
    })

    //check email
    function checkEmail() {
        let email = $('#txtEmail').val();
        let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (emailRegex.test(email)) {
            return true
        }
        return false
    }
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if (checkEmail()) {
            $("#statusOfEmail").text('')
        } else {
            $("#statusOfEmail").text('Email incorrect')
            $("#statusOfEmail").css('color', 'red')
        }
    })


    //localStorage
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        var emailRegis = document.getElementById("txtEmail").value;
        var passwordRegis = document.getElementById("txtPassword").value;
        if (checkComfirmPassword()) {
            localStorage.setItem('username',emailRegis),
            localStorage.setItem('password',passwordRegis)
        } else {
            $("#statusOfComfirmPassword").text('Password incorrect')
            $("#statusOfComfirmPassword").css('color', 'red')
        }
    })
})

