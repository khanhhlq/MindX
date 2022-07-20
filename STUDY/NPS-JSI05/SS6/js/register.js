const registerForm = document.getElementById("register-form");
const redirectToLogin = document.getElementById("redirect-to-login")

redirectToLogin.addEventListener("click", () => {
  window.location.href = "./login.html"
})

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataRegister = {
    firstName: registerForm.firstName.value,
    lastName: registerForm.lastName.value,
    email: registerForm.email.value,
    password: registerForm.password.value,
    confirmPassword: registerForm.confirmPassword.value
  }

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

  register(dataRegister);
})




