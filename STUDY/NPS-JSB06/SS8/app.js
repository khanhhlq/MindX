const reg = document.getElementById('register-form');

// Lắng nghe sự kiện submit trên form
reg.addEventListener("submit", function(){
    event.preventDefault(); // Ngăn chặn sự kiện f5 mặc định

    // Tạo ra một đối tượng có tên là account

    // Hàm trim(): dùng để xoá dấu khoảng cách thừa ở 2 bên phải và trái của chuỗi (stirng)

    let account = {
        firstName: reg.firstName.value.trim(),
        lastName: reg.lastName.value.trim(),
        email: reg.email.value.trim(),
        password: reg.password.value.trim(),
        confirmPassword: reg.confirmPassword.value.trim()
    }

    if (account.firstName == ""){
        alert("Vui lòng nhập tên của bạn");
    } else if (account.lastName == ""){
        alert("Vui lòng nhập họ của bạn");
    } else if (account.email == ""){
        alert("Vui lòng nhập email của bạn");
    } else if (account.password == ""){
        alert("Vui lòng nhập mật khẩu của bạn");
    } else if (account.confirmPassword == ""){
        alert("Vui lòng nhập lại mật khẩu của bạn");
    } else{
        alert("Đăng ký thông tin thành công!");
    }

    console.log("Đã submit thành công form và gửi đi dữ liệu");
    console.log(account);

    reg.firstName.value = "";
    reg.lastName.value = "";
    reg.email.value = "";
    reg.password.value = "";
    reg.confirmPassword.value = "";

});

function toRegister(){
    // const toRegister = document.getElementById("toRegister");
    document.querySelector(".form-login").classList.add("displayNone");
    document.querySelector(".form-register").classList.remove("displayNone");
}

function toLogin(){
    // const toLogin = document.getElementById("toLogin");
    document.querySelector(".form-register").classList.add("displayNone");
    document.querySelector(".form-login").classList.remove("displayNone");
}


// Login


const login = document.getElementById('login-form');

// Lắng nghe sự kiện submit trên form
login.addEventListener("submit", function(){
    event.preventDefault(); // Ngăn chặn sự kiện f5 mặc định

    // Tạo ra một đối tượng có tên là account

    // Hàm trim(): dùng để xoá dấu khoảng cách thừa ở 2 bên phải và trái của chuỗi (stirng)

    let account = {
        email: login.email.value.trim(),
        password: login.password.value.trim(),
    }

    if (account.firstName == ""){
        alert("Vui lòng nhập tên của bạn");
    } else if (account.lastName == ""){
        alert("Vui lòng nhập họ của bạn");
    } else if (account.email == ""){
        alert("Vui lòng nhập email của bạn");
    } else if (account.password == ""){
        alert("Vui lòng nhập mật khẩu của bạn");
    } else if (account.confirmPassword == ""){
        alert("Vui lòng nhập lại mật khẩu của bạn");
    } else{
        alert("Đăng ký thông tin thành công!");
    }

    console.log("Đã submit thành công form và gửi đi dữ liệu");
    console.log(account);

    login.email.value = "";
    login.password.value = "";

});



for (let i; i <=10; i++){
    
}
