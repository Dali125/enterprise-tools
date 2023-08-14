import { collection, getDocs } from "firebase/firestore"
import { db } from '../api/firebase/firebase'
export default async function inventoryData(){

    const snapshot = await getDocs(collection(db, 'posts'))
    snapshot.forEach((document) =>{
  
      return <>
      
      <h1>Yep, we found em</h1>
      </>
    })
  }
  