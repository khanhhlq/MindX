const signOut = document.getElementById("sign-out")

signOut.addEventListener("click", () => {
    firebase.auth().signOut()
    
})