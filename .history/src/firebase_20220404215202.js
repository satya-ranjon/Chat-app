import { initializeApp } from "firebase/app";

// apiKey: process.env.REACT_APP_API_KEY,
// console.log(process.env.REACT_APP_API_KEY);

const App = initializeApp({
  apiKey: "AIzaSyCuqcFeU-EOPYlzzV3cv5CK796kH34mzQA",
  authDomain: "chat-app-dev-d48bb.firebaseapp.com",
  projectId: "chat-app-dev-d48bb",
  storageBucket: "chat-app-dev-d48bb.appspot.com",
  messagingSenderId: "914428708587",
  appId: "1:914428708587:web:44d406ebd59b0fa135a0ae",
});

export default App;
