const { initializeApp } = require("firebase/app")
const { getAuth } = require("firebase/auth")

const firebaseConfig = {
    apiKey: "AIzaSyB92VAKBNi3o_935r8d6GKa-qINAXQEIQY",
    authDomain: "fir-auth-738dd.firebaseapp.com",
    projectId: "fir-auth-738dd",
    storageBucket: "fir-auth-738dd.appspot.com",
    messagingSenderId: "1043760060724",
    appId: "1:1043760060724:web:ec89e02a0ea4a9155a6d61",
    measurementId: "G-2Z8J1ENBQP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

module.exports = auth