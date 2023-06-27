<template>
  <div>
    <h2>Phone Authentication</h2>
    <div class="form-group">
      <label for="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" v-model="phoneNumber" placeholder="Enter phone number">
    </div>
    <div id="recaptcha-container"></div>
    <button class="btn" @click="signInWithPhoneNumber">Send Verification Code</button>
    <div class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>

import auth from './firebase'; // Import your Firebase configuration from a separate file
// import firebase from 'firebase/compat/app';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default {
  data() {
    return {
      phoneNumber: '',
      errorMessage: '',
      recaptchaVerifier: null,

    };
  },
  mounted() {
    // const auth = getAuth(app);
    // const firebaseApp = firebase.initializeApp(this.firebaseConfig);
    this.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: () => {
        // Recaptcha verification completed
      }
    }, auth);
  },
  methods: {
    signInWithPhoneNumber() {
      // const auth = getAuth(app);
      signInWithPhoneNumber(auth, this.phoneNumber, this.recaptchaVerifier)
        .then(confirmationResult => {
          const verificationCode = prompt('Please enter the verification code', '');
          return confirmationResult.confirm(verificationCode);
        })
        .then(result => {
          // User successfully signed in
          const user = result.user;
          console.log('User signed in:', user);
        })
        .catch(error => {
          // Error occurred during authentication
          this.errorMessage = error.message;
          console.error('Phone authentication error:', error);
        });
    }
  }
};
</script>