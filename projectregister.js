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
      document.getElementById("registerContainer").style.display="none";

          } else {

            //no user is signed in
            document.getElementById("logoutContainer").style.display="none";
            document.getElementById("registerContainer").style.display="initial";

        }
  });
       function signUp() {
       var email = document.getElementById("email");
       var password = document.getElementById("password");
    
       const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
       promise.catch(e => alert(e.message));

       alert("Signed Up");   
   }
     //  function signUp(){

     // var email = document.getElementById("email");
     // var password = document.getElementById("password");
    //var User Name = document.getElementById("User Name");
    // var age = document.getElementById("age");
    // var Fathers Name = document.getElementById("Fathers Name");
    

     // const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
     // promise.catch(e => alert(e.message));

     // alert("You have signed up");

    //  var id=firebase.auth().currentUser.uid;
     //firebase.database().ref("Users/"+id).set({
      // Fathers Name:Fathers Name,
       //age:age,
       //User Name:User Name,
   // });

   // }
    function signOut(){

    auth.signOut();
    alert("You have Signed out");
   
   }

