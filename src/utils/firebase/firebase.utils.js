import { initializeApp} from 'firebase/app';

import 
{   getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import { getFirestore,
doc,
getDoc,
setDoc
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDOfDTqUIQuel549_tMUsCIgQgdkXJh23A",
    authDomain: "crwn-clothing-db-1c827.firebaseapp.com",
    projectId: "crwn-clothing-db-1c827",
    storageBucket: "crwn-clothing-db-1c827.appspot.com",
    messagingSenderId: "319973157118",
    appId: "1:319973157118:web:26107a26df4fb525579daf"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt:'select_account'
  })

  export const auth = getAuth();
  export const signInWithGooglePopup=()=> signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) =>{
      const userDocRef = doc(db, 'users', userAuth.uid)


      const userSnapshot = await getDoc(userDocRef)
     
     
      if(!userSnapshot.exists()){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try {
   await setDoc(userDocRef, {
     displayName,
     email,
     createdAt
    });           
          } catch (error) {
              console.log('error creating the user', error.message);
          }
      }

      return userDocRef;
  }