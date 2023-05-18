var id;
var pw;
var login;
var t;

window.onload = function () {
    t=document.getElementById("time");
    id = document.getElementById("user-id");
    pw = document.getElementById("user-pw");
    login = document.getElementById("login");
}

function Login() {
    if (id.value == "cat" && pw.value == "1234") {
        alert("로그인 성공");
        login.innerHTML = id.value + " 회원님 반갑습니다.";
    }
    else
        alert("로그인 실패");
}

setInterval(time, 1000);

function time() {
    var now = new Date();
    t.innerHTML=(now.getFullYear() + "년" + (now.getMonth() + 1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초");
}