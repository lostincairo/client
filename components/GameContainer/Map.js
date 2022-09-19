import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onDisconnect } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { data } from "autoprefixer";
import { PlayerRef, db } from "../Auth/Auth"


export default function InitMap() {

    console.log(db);
    //const allPlayerRef = ref(db, PlayerRef)

    return (
        <div>{db}</div>
    )

}