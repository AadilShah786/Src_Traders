import React, { useState ,useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut, signInWithRedirect } from "firebase/auth";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// const provider = new GoogleAuthProvider();
// const auth = getAuth();

const firebaseConfig = {
    apiKey: "AIzaSyBJ4ZLX-J4cBXO6TeHQ_ev3piADDDdPyqg",
    authDomain: "src-traders.firebaseapp.com",
    databaseURL: "https://src-traders-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "src-traders",
    storageBucket: "src-traders.appspot.com",
    messagingSenderId: "1000358920773",
    appId: "1:1000358920773:web:d409335e8fdd3ed931d92c",
    measurementId: "G-DQ76C83ZSC"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  
  const auth = getAuth();
  function signin(){
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  function SignInButton() {
    const [userProfile, setUserProfile] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
  
    useEffect(() => {
      // Firebase listener for authentication state changes
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in
          setUserProfile({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          });
          setLoggedIn(true);
        } else {
          // No user is signed in
          setUserProfile(null);
          setLoggedIn(false);
        }
      });
  
      return () => {
        // Unsubscribe the listener on component unmount
        unsubscribe();
      };
    }, []);
  
    const signInWithGoogle = async () => {
      try {
       // await auth.signInWithRedirect(provider);
        const result = await signInWithRedirect(auth, provider);
        const user = result.user;
  
        setUserProfile({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        setLoggedIn(true);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleSignOut = async () => {
      try {
        await signOut(auth);
        setUserProfile(null);
        setLoggedIn(false);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="nav-right">
        {!loggedIn ? (
          <button className="sign" onClick={signInWithGoogle}>Login</button>
        ) : (
          <div className="nav-right-right">
            {/* <p>Welcome, {userProfile?.displayName}</p> */}
            <img className="profile" src={userProfile?.photoURL} alt="Profile" />
            {/* <p>Email: {userProfile?.email}</p> */}
            {/* <button className="sign" onClick={handleSignOut}>Logout</button> */}
          </div>
        )}
      </div>
    );
  }
  
  export default SignInButton;