import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAPD3qyN_trd-swpS62hvUA4uNzreo_Rpw",
    authDomain: "social-media-app-b80f7.firebaseapp.com",
    projectId: "social-media-app-b80f7",
    storageBucket: "social-media-app-b80f7.firebasestorage.app",
    messagingSenderId: "269683060291",
    appId: "1:269683060291:web:86eeb0ac8e11ea54f22ef6",
    measurementId: "G-BHL1PZSR9Q",
    databaseURL:"https://social-media-app-b80f7-default-rtdb.firebaseio.com"
  };

export const app = initializeApp(firebaseConfig);
