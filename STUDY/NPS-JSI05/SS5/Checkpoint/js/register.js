const registerForm = document.getElementById("register-form")

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const dataRegister = {
        firstName: registerForm.firstName.value,
        lastName: registerForm.lastName.value,
        email: registerForm.email.value,
        password: registerForm.password.value,
        confirmPassword: registerForm.confirmPassword.value
    }

    controller.register(dataRegister)
    console.log(dataRegister)
})