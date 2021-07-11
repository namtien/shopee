import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB0SQ4VbkFxjWut7wPO1oOpJhzSwNLfPag",
   authDomain: "shopee-a1f1a.firebaseapp.com",
   databaseURL: "https://shopee-a1f1a-default-rtdb.firebaseio.com",
   projectId: "shopee-a1f1a",
   storageBucket: "shopee-a1f1a.appspot.com",
   messagingSenderId: "848979067882",
   appId: "1:848979067882:web:9e8825897fc4e4715ee893"
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB