import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyAFKeH5commFYA9e21gD9rPm6etXwmBNrQ",
  authDomain: "jobi-cd.firebaseapp.com",
  databaseURL: "https://jobi-cd-default-rtdb.firebaseio.com",
  projectId: "jobi-cd",
  storageBucket: "jobi-cd.appspot.com",
  messagingSenderId: "734434625225",
  appId: "1:734434625225:web:874e37c3feb326151a2f18"
};

// setting a variable that initializes our app
const firebase = initializeApp(config);

export default firebase;