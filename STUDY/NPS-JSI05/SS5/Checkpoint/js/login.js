const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const dataLogin = {
        email: loginForm.email.value,
        password: loginForm.password.value
    }

    controller.login(dataLogin)
    console.log(dataLogin)
})