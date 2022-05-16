import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,

  apiKey: "AIzaSyBYQ6lRUCASjuJGN_1McVnmVTRzcY2b9Do",
  authDomain: "ginius-car-machanics-e07cc.firebaseapp.com",
  projectId: "ginius-car-machanics-e07cc",
  storageBucket: "ginius-car-machanics-e07cc.appspot.com",
  messagingSenderId: "700165637522",
  appId: "1:700165637522:web:e7960d1f006da8ac576d4b"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth