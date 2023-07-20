// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJIir14YIGpoahAlv2L-uPmBGGS3IlsTA",
  authDomain: "education-lona-portal.firebaseapp.com",
  projectId: "education-lona-portal",
  storageBucket: "education-lona-portal.appspot.com",
  messagingSenderId: "703578066235",
  appId: "1:703578066235:web:068ba5425445784ac7fb1e",
  measurementId: "G-4J9632MT0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

