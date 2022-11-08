// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVYMAhcm5CiIFodKnJX5FFYk4satcGhlQ",
  authDomain: "car-website-e6b68.firebaseapp.com",
  projectId: "car-website-e6b68",
  storageBucket: "car-website-e6b68.appspot.com",
  messagingSenderId: "754286092247",
  appId: "1:754286092247:web:65fac994f9471046b2b592",
  measurementId: "G-D3FBF2VP77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;