import firebase from "./firebase";
const auth = firebase.auth();

// import { authState, newSignUp, signIn } from '../utilities/firebaseLogin';

export async function newSignUp(email, password) {
    try {
        let response = await auth.createUserWithEmailAndPassword(email, password);
        console.log(response);
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }
      
}


export async function signIn(email, password) {
    try {
        let response = await auth.signInWithEmailAndPassword(email, password);
        console.log(response);

    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }
      
}



export async function signOut() {
    try {
        await auth.signOut()
        // .then (function() {
        // console.log(response);
        // })
        console.log("signed out");
        
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }  
}

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//     }
//   });
