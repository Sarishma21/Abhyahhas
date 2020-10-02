// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCapFXrpdgInZvm747IOEs_YMadSbZtfVA",
    authDomain: "project-5e9e4.firebaseapp.com",
    databaseURL: "https://project-5e9e4.firebaseio.com",
    projectId: "project-5e9e4",
    storageBucket: "project-5e9e4.appspot.com",
    messagingSenderId: "88635156864",
    appId: "1:88635156864:web:104f96e4b10c73e6853965"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

   firebase.auth().onAuthStateChanged(function(user){
    if(user){

      //user is signed in
      document.getElementById("logoutContainer").style.display="initial";
      document.getElementById("loginContainer").style.display="none";

          } else {

            //no user is signed in
            document.getElementById("logoutContainer").style.display="none";
            document.getElementById("loginContainer").style.display="initial";

          }

  });

        function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

  //  alert("Signed In " + email.value);

  //take user to a different or home page

  }    
 
   function signOut(){

    auth.signOut();
    alert("You have Signed out");
   
   }

