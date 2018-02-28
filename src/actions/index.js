import firebase from 'firebase';
// Firebase Config
import firebaseConfig from '../firebaseConfig.js';
import axios from 'axios';

export const FETCH_ALL_MONTHS = 'FETCH_ALL_MONTHS';

export function fetchAllMonths() {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  const data = axios.get('https://my-finances-app-ef6dc.firebaseio.com/users/grhu.json');

  /*onst data = fetch('https://my-finances-app-ef6dc.firebaseio.com/users/grhu.json')
    .then(response => response.json())
    .then(data => {
        return data;
      }
    )
    .catch(err => console.log(err));*/
  
  return {
    type: FETCH_ALL_MONTHS,
    payload: data
  };
};