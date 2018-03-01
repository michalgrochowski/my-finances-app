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
  
  const data = fetch('https://my-finances-app-ef6dc.firebaseio.com/users/grhu.json')
    .then(async (response) => response.json())
    .then(data => {
        console.log(data);
        return data;
      }
    )

  console.log(data);
  
  return {
    type: FETCH_ALL_MONTHS,
    payload: data
  };
};