const registerForm = document.getElementById("register-form");


registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // ngan su kien reload mac dinh cua trinh duyet
  const dataRegister = {
    firstName: registerForm.firstName.value,
    lastName: registerForm.lastName.value,
    email: registerForm.email.value,
    password: registerForm.password.value,
    confirmPassword: registerForm.confirmPassword.value
  }

  // Hàm check lỗi người dùng nhập dữ liệu (tạm bỏ)

  // Hàm đăng ký => Gửi email xác thực dữ liệu về gmail của mình
  const register = async (data) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      firebase.auth().currentUser.sendEmailVerification();
      alert("The email has been registered, please check your email");
    }
    catch (err) {
      console.log(err);
      alert(err.message);
    }
  }


  // Gọi hàm
  register(dataRegister);




})




