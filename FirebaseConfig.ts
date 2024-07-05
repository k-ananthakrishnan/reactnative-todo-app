import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyD2pVhalp1ARDRwwrjExNk_il_Y6xyHKx8",
    authDomain: "reactnativetodoapplications3.firebaseapp.com",
    projectId: "reactnativetodoapplications3",
    storageBucket: "reactnativetodoapplications3.appspot.com",
    messagingSenderId: "1097679017829",
    appId: "1:1097679017829:web:50812acf2f2b8c41ee338c"
};

const FIREBASE_APP = initializeApp(firebaseConfig);

const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage)
});

const FIREBASE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };
