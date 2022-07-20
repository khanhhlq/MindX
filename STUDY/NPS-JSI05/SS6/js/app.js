
const init = () => {
  console.log("Windows loaded");

  const firebaseConfig = {
    apiKey: "AIzaSyB2okjiEsMow1wCH-cYMNh1PiyVwcSr8_M",
    authDomain: "mindx-3d127.firebaseapp.com",
    projectId: "mindx-3d127",
    storageBucket: "mindx-3d127.appspot.com",
    messagingSenderId: "704518667834",
    appId: "1:704518667834:web:bfab1e3e6520c9b6de3f03"
  };

  // firebase.initializeApp(firebaseConfig)

  // console.log(firebase.app().name)

  // firebase.auth().onAuthStateChanged(function(user) {
  //   // if (user && user.verified ) {
  //   //   window.location.href = "index.html"
  //   // } else{
  //   //   window.location.href = "login.html"
  //   // }
  // })

}


window.onload = init;

