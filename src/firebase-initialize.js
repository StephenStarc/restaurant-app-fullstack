import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBkhahg9gEqrNqfmWRCAIpSVm2gIOanvrU",
    authDomain: "learnspace-edtech.firebaseapp.com",
    projectId: "learnspace-edtech",
    storageBucket: "learnspace-edtech.appspot.com",
    messagingSenderId: "692636271374",
    appId: "1:692636271374:web:eed4bc135c595b12100d5f",
    measurementId: "G-V04TR1G0D0"
  };


  

 export default function Initialize(){
    return (
       initializeApp(firebaseConfig)
    )
    
  }