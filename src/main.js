import firebase from 'firebase'
import Vue from 'vue'
// import Vue from "vue/dist/vue/vue.esm.js";
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC6NNnTG4TuZ9ssBog1C3tM_1CKsD9JhT4",
  authDomain: "chat-app-1223.firebaseapp.com",
  databaseURL: "https://chat-app-1223-default-rtdb.firebaseio.com",
  projectId: "chat-app-1223",
  storageBucket: "chat-app-1223.appspot.com",
  messagingSenderId: "934335794701",
  appId: "1:934335794701:web:01ba8b5789c858f48f8f44"
};
firebase.initializeApp(config)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })


new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
