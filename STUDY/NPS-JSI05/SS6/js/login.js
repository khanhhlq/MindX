const loginForm = document.getElementById("login-form");
const redirectToRegister = document.getElementById("redirect-to-register")

redirectToRegister.addEventListener("click", () => {
    window.location.href = "register.html"
})

loginForm.addEventListener("click", (event) => {
    event.preventDefault();
    
    const dataLogin = {
        email: loginForm.email.value,
        password: loginForm.password.value
    }
    console.log(dataLogin)

    const login = async (data) => {
        try{
            const respone = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            console.log(respone)
            window.location.href = "index.html"
        } catch(err){
            console.log(err)
        }
    }

    login(dataLogin)
})
