importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDH368OCf9UFlh_n0nzL7gWfuW71aG1RYc",
  authDomain: "pwa-quiz-app.firebaseapp.com",
  databaseURL: "https://pwa-quiz-app.firebaseio.com",
  projectId: "pwa-quiz-app",
  storageBucket: "pwa-quiz-app.appspot.com",
  messagingSenderId: "489006275593",
  appId: "1:489006275593:web:a38cf81f7afb3e61e2acd8",
});
firebase.messaging();
