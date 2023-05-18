var month;
var day;
/////////////
var user_id;
var user_pw;
var user_pw_re;
var user_name;
var user_email;
var user_year;
var user_month;
var user_day;
var user_sex;
var user_phone1;
var user_phone2;
var user_phone3;

var str = "";
window.onload = function () {
    var str_m = "";
    var str_d = "";

    month = document.getElementById("birth_m");
    day = document.getElementById("birth_d");

    for (let i = 1; i < 13; i++) {
        str_m += "<option value=" + i + ">" + i + "</option>";
    }

    for (let i = 1; i < 32; i++) {
        str_d += "<option value=" + i + ">" + i + "</option>";
    }
    month.innerHTML = str_m;
    day.innerHTML = str_d;
    ///////////////////////////////////////////////////
    user_id = document.getElementById("user_id");
    user_pw = document.getElementById("user_pw");
    user_pw_re = document.getElementById("user_pw_re");
    user_name = document.getElementById("user_name");
    user_email = document.getElementById("user_email");
    user_sex = document.getElementsByName("sex");
    user_year = document.getElementById("birth_y");
    user_month = document.getElementById("birth_m");
    user_day = document.getElementById("birth_d");
    user_phone1=document.getElementById("phonenum1");
    user_phone2=document.getElementById("phonenum2");
    user_phone3=document.getElementById("phonenum3");
}

function Register() {
    for (var i = 0; i < user_sex.length; i++) {
        if (user_sex[i].checked == true)
            sex = user_sex[i].value;
    }

    str = "ID:" + user_id.value + "\nPW:" + user_pw.value + "\nPW_RE:" + user_pw_re.value + "\nNAME:" + user_name.value + "\nEMAIL:" + user_email.value +
    "\nBIRTH:" + user_year.value + "년 " + user_month.value + "월 " + user_day.value + "일" + "\nSEX:" + sex+"\nTEL:"+user_phone1.value+"-"+user_phone2.value+"-"+user_phone3.value;
if (CheckId() && CheckPw() && CheckPw_Re() && CheckName() && CheckEmail()&&CheckPwComp()) {
    alert(str);
    alert("회원가입 성공");
}
else {
    alert("회원가입 실패");
}
}

function CheckId(){
    if(user_id.value.length>=4&&user_id.value.length<=12)
    {
        console.log("Id success");
        return true;
    }
    else
    {
        console.log("Id failed");
        return false;
    }
}
function CheckPw(){
    if(user_pw.value.length>=4&&user_pw.value.length<=12)
    {
        console.log("Id success");
        return true;
    }
    else
    {
        console.log("Id failed");
        return false;
    }
}
function CheckPw_Re(){
    if(user_pw_re.value.length>=4&&user_pw_re.value.length<=12)
    {
        console.log("Id success");
        return true;
    }
    else
    {
        console.log("Id failed");
        return false;
    }
}

function CheckPw_Re(){
    if(user_pw_re.value.length>=4&&user_pw_re.value.length<=12)
    {
        console.log("Id success");
        return true;
    }
    else
    {
        console.log("Id failed");
        return false;
    }
}

function CheckPwComp(){
    if(user_pw.value==user_pw_re.value)
    {
        console.log("PW & PW_Re compare success");
        return true;
    }
    else
    {
        console.log("PW & PW_Re compare failed");
        return false;
    }
}

function CheckName(){
    if(user_name.value.length>=4&&user_name.value.length<=12)
    {
        console.log("Id success");
        return true;
    }
    else
    {
        console.log("Id failed");
        return false;
    }
}
function CheckEmail(){
    if(user_email.value.length>=4&&user_email.value.length<=12)
    {
        console.log("Id success");
        return true;
    }
    else
    {
        console.log("Id failed");
        return false;
    }
}
