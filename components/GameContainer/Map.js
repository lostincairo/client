
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged, ref } from "firebase/auth";
import { data } from "autoprefixer";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export default function LoadMap() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD_WALbcOZle0Oht4LzPmnaWvoS2uk47hM",
        authDomain: "lost-in-cairo-ea9e7.firebaseapp.com",
        projectId: "lost-in-cairo-ea9e7",
        storageBucket: "lost-in-cairo-ea9e7.appspot.com",
        messagingSenderId: "882953985192",
        appId: "1:882953985192:web:67d9088a806844807d769d",
        measurementId: "G-EPFW6SRZWH"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    const db = getDatabase(app);


    // Initialize Auth
    const auth = getAuth();

    let playerId;
    let playerRef;



    onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
            console.log("You're logged in!");
            playerId = user.uid;
            set(ref(db, 'players/${playerId}'), {
               id: playerId 
            });
        } else {
            console.log("You're logged out.");
        }
    });



    signInAnonymously(auth).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode + " " + errorMessage);
    });

    return (
        <div className="bg-white">
            <h1 className="text-black">This is Auth</h1>
        </div>
    )
}

