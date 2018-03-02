import firebase from 'firebase';
// Firebase Config
import axios from 'axios';

export const FETCH_ALL_MONTHS = 'FETCH_ALL_MONTHS';

export function fetchAllMonths() {
  /*const database = firebase.database();
  const data = database.ref('/users/grhu').on('value', function(snapshot) {
    return snapshot.val();
  });

  console.log(data)*/
  
  return fetch('https://my-finances-app-ef6dc.firebaseio.com/users/grhu.json')
    .then(response => response.json())
    .then(data => {
      return {
        type: FETCH_ALL_MONTHS,
        data
      };
    });
};
