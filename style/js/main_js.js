//date picker
{
  let startDate = document.getElementById("bornDate");
  startDate.addEventListener("change", (e) => {
    let startDateVal = e.target.value;
    document.getElementById("startDateSelected").innerText = startDateVal;
  });
}

//animate
function hiddent() {
  if (user_using == undefined) {
    $(".hid_background").removeClass("show-background");
    $(".success_login").removeClass("show-background");
  } else {
    window.location = "index.html";
  }
}
function appearRegis() {
  $(".main-login").hide(300);
  $(".main-regis").show(1000);
}
function appearLogin() {
  if (res_valid == false) {
    $(".main-login").addClass("show");
    $(".main-regis").addClass("hidden");
    $(".main-login").removeClass("hidden");
    $(".main-regis").removeClass("show");
    window.open("index.html", "_self");
  }
}
function resgis() {
  $.Callbacks().add(validateName());
  if (res_valid == false) {
    $(".nofi-regis-text").text(`Chào mừng
           ${$("#res_email").val()}
       đã đăng kí thành công !
        Chúc bạn xem phim vui vẻ ! `);
    $(".backToLogin-btn").removeClass("btn-danger");
    $(".backToLogin-btn").addClass("btn-success");
    $(".backToLogin-btn").text("Tới trang chủ");
    user_using = `${$("#res_email").val()}`;
    console.log(res_valid);
    CreatNewUserData();
    appear_hidden_resgis();
  }
}
function goIndex() {
  window.open("index.html", "_self");
}
function appear_hidden_resgis() {
  $(".hid_background-resgis").addClass("show-background");
  $(".success_resgis").addClass("show-background");
}
function hidder() {
  $(".hid_background-resgis").removeClass("show-background");
  $(".success_resgis").removeClass("show-background");
}

//check valid data
var res_valid = false;
function validateEmail() {
  let re = /^\S+@\S+\.\S+$/;
  var v = $("#email").val();
  if (re.test(v) == false) {
    $(".invalid-feedback-email").addClass("show");
    return false;
  } else $(".invalid-feedback-email").removeClass("show");
}
function validatePassword() {
  if ($("#pwd").val().length == 0) {
    $(".invalid-feedback-password").addClass("show");
    return false;
  } else $(".invalid-feedback-password").removeClass("show");
}
function validateResEmail() {
  var re = /^\S+@\S+\.\S+$/;
  var v = $("#res_email").val();
  console.log(res_valid);
  if (re.test(v) == false) {
    $(".invalid-feedback-res-email").addClass("show");
    res_valid = true;
    //return false;
  } else {
    $(".invalid-feedback-res-email").removeClass("show");
    res_valid = false;
  }
  $.Callbacks().add(validateResPassword());
}
function validateName() {
  console.log(res_valid);
  if ($("#name").val().length == 0) {
    $(".invalid-feedback-regis-name").addClass("show");
    res_valid = true;
    // return false;
  } else {
    $(".invalid-feedback-regis-name").removeClass("show");
    res_valid = false;
  }
  $.Callbacks().add(validateResEmail());
}
function validateRePassword() {
  console.log(res_valid);

  if (
    $("#res_pwd").val() == $("#re_pwd").val() &&
    `${$("#re_pwd").val()}` !== ""
  ) {
    $(".invalid-feedback-regis-re_password").removeClass("show");
    res_valid = false;
  } else {
    $(".invalid-feedback-regis-re_password").addClass("show");
    res_valid = true;
  }
}
function validateResPassword() {
  console.log(res_valid);
  if ($("#res_pwd").val().length == 0) {
    $(".invalid-feedback-res_password").addClass("show");
    res_valid = true;
    // return false;
  } else {
    $(".invalid-feedback-res_password").removeClass("show");
    res_valid = false;
  }
  $.Callbacks().add(validateRePassword());
}

//checking login data
var user_using;

function Login() {
  var userArray = JSON.parse(localStorage.getItem("user_info")) || [];
  $.getJSON("/data/user.json", function (data) {
    $(".hid_background").addClass("show-background");
    $(".success_login").addClass("show-background");
    var k = false;
    $.each(data.user_info, function (i, f) {
      if (
        `${f.user}` == $("#email").val() &&
        `${f.password}` == $("#pwd").val()
      ) {
        k = true;
        user_using = `${f.user}`; //User dang su dung
      }
    });

    userArray.forEach((element) => {
      if (
        element.user == $("#email").val() &&
        element.password == $("#pwd").val()
      ) {
        k = true;
        user_using = `${$("#email").val()}`;
        console.log("run");
        return true; //User dang su dung
      }
    });
    if (k == true) {
      $(".welcome-text").text(`Chào mừng
              ${user_using}
              đã quay trở lại !`);
      $(".back-btn").removeClass("btn-danger");
      $(".back-btn").addClass("btn-success");
      $(".back-btn").text("Tới trang chủ");
    } else {
      $(".welcome-text").text(`Sai tài khoản hoặc mật khẩu`);
      $(".back-btn").text("Quay lai");
      $("back-btn").attr("href", "In-developing.html");
      $(".back-btn").addClass("btn-danger");
    }
  });
}
function RememberMe() {
  var rm = $("#rememberMe");
  if (rm.prop("checked")) {
    var user = $("#email").val();
    var pwd = $("#pwd").val();
    Cookies.set("user", user);
    Cookies.set("password", pwd);
  }
}

//Creat New User Data
function CreatNewUserData() {
  let new_user = {
    user: $("#res_email").val(),
    password: $("#re_pwd").val(),
  };
  var userArr = JSON.parse(localStorage.getItem("user_info")) || [];
  userArr.push(new_user);
  localStorage.setItem("user_info", JSON.stringify(userArr));
}

//boder in small devices
function xs_br() {
  let mQuery = window.matchMedia("(max-width: 415px)");
  if (mQuery == true) {
    appearRegis();
  }
}
//show/hiden password
function showpass(id, cls) {
  if ($(id).attr("type") == "text") {
    $(id).attr("type", "password");
    $(cls).addClass("show");
    $(cls).removeClass("hidden");
  } else {
    $(id).attr("type", "text");
    $(cls).addClass("hidden");
    $(cls).removeClass("show");
  }
}
