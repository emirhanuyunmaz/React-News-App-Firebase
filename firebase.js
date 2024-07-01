import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export function firebaseInitial(){
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID
    };
    
    // Initialize Firebase
     const app = initializeApp(firebaseConfig);
    //********* */
}


export async function saveNews(userEmail,news){
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID
    };
    
    // Initialize Firebase
     const app = initializeApp(firebaseConfig);

     const db = getFirestore(app)

     try{
        const docRef = await addDoc(collection(db,userEmail),{
            
            news
        })
     }catch(err){
        console.error(err)
     }
}

export async function getSavedData(userEmail){

    const data = []

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID
    };
    
    // Initialize Firebase
     const app = initializeApp(firebaseConfig);

     const db = getFirestore(app)

    const querySnapshot = await getDocs(collection(db,userEmail));
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
            
        });
        return data
}