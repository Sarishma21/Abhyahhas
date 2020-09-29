
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJtrPfWcDkCre2dvQIWTNHusiAwv7I88s",
    authDomain: "index-99763.firebaseapp.com",
    databaseURL: "https://index-99763.firebaseio.com",
    projectId: "index-99763",
    storageBucket: "index-99763.appspot.com",
    messagingSenderId: "79105899205",
    appId: "1:79105899205:web:84a802a194ff038ee80eac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

   firebase.auth().onAuthStateChanged(function(user){
    if(user){

      //user is signed in
      document.getElementById("logoutContainer").style.display="initial";
      document.getElementById("registerContainer").style.display="none";

          } else {

            //no user is signed in
            document.getElementById("logoutContainer").style.display="none";
            document.getElementById("registerContainer").style.display="initial";

        }
  });

    function signUp(){

     var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

    alert("You have signed up");
    }

     function signOut(){

    auth.signOut();
    alert("You have Signed out");
   
   }


