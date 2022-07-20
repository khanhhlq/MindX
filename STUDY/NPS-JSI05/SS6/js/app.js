
const init = () => {

  console.log("Windows loaded");

  // Khai báo firebase
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB2okjiEsMow1wCH-cYMNh1PiyVwcSr8_M",
    authDomain: "mindx-3d127.firebaseapp.com",
    projectId: "mindx-3d127",
    storageBucket: "mindx-3d127.appspot.com",
    messagingSenderId: "704518667834",
    appId: "1:704518667834:web:bfab1e3e6520c9b6de3f03"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // const app = initializeApp(firebaseConfig);
  console.log(firebase.app().name); //DEFAULT

}


window.onload = init;

