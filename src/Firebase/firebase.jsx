import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyD0Gy5BNdlCcaui_PPc4i900F50q5Hxtjg",
    authDomain: "rasu-indumentaria.firebaseapp.com",
    projectId: "rasu-indumentaria",
    storageBucket: "rasu-indumentaria.appspot.com",
    messagingSenderId: "267603357440",
    appId: "1:267603357440:web:9e79537438ff44922e4de5"
};

const app = initializeApp(firebaseConfig);


export default getFirestore();
