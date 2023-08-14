"use client"
import { useState , useEffect} from "react";
import { getDoc, doc, collection, query, getDocs, addDoc, onSnapshot, QuerySnapshot, QueryDocumentSnapshot, deleteDoc, where } from 'firebase/firestore';
import { db } from './api/firebase/firebase';
import { log } from 'console';
import inventoryData from "./components/getPosts";
import Login from "./login/page";
import { randomInt, randomUUID } from "crypto";







export default  function Home() {


  const [itemName, setitemName] = useState('');
  const [itemPrice, setitemPrice] = useState(0)
  const [dataToShow, setdataToShow] = useState([])

function DisplayData(){
  const result: QueryDocumentSnapshot[] = [];
  getDocs(collection(db, 'posts')).then((doc) =>{
    if(doc.size > 0){
      doc.forEach(e =>{
        result.push(e)
      
      })
      setdataToShow(result);
    

    }
  })
}
useEffect(() => {
 DisplayData()
}, [dataToShow])







//Adds the item to firestore
  async function addItem(){

    await addDoc(collection(db, 'posts'),{

      'id': Math.random(),
      'itemName':itemName,
      'itemPrice': itemPrice

    })

   
  }
  async function deleteItem(id:number){

    let q = query(collection(db, 'posts'), where('id','==', id));

    const snapshot = getDocs(q);
    for(const items of (await snapshot).docs){
      await deleteDoc(items.ref);
    }

    
   
  }




  
  
  return (

<>
<div className='text-center uppercase text-5xl pt-4'>
    Expense Tracker 
</div>

<div className='flex w-screen  justify-center mt-20'>
<div className='h-fit bg-slate-800'>
  <input
  type="text"
  value={itemName}
  onChange={e => setitemName(e.target.value)}
   placeholder='Item Name'
    className=' p-4 bg-slate-800 border border-white rounded-lg'></input>
  <input
  type="number"
  onChange={e => setitemPrice(e.target.valueAsNumber)}
 
  value={itemPrice}
   placeholder='Price'
   className='pl-2
    p-4
     ml-2
      bg-slate-800
      rounded-lg
       border
        border-white'></input>   
  <button onClick={addItem} className='
  ml-5
   border
    rounded-lg
     bg-slate-500
      p-4
       pl-7
        pr-7
        border-white
        '>Add</button>
</div>
</div>
<DisplayData/>
{dataToShow.map((e)=>{


return(
  <div key={e.data().id} className='flex w-screen  justify-center'>
<div className='h-fit bg-slate-800'>
  <input
  type="text"
  disabled
  value={e.data().itemName}
  onChange={e => setitemName(e)}
   placeholder='Item Name'
    className=' p-4 bg-slate-800 border border-white rounded-lg'></input>
  <input
  type="number"
  onChange={e => setitemPrice(e.target.valueAsNumber)}
 disabled
  value={e.data().itemPrice}
   placeholder='Price'
   className='pl-2
    p-4
     ml-2
      bg-slate-800
      rounded-lg
       border
        border-white'></input>   
  <button onClick={() => deleteItem(e.data().id)} className='
  ml-5
   border
    rounded-lg
     bg-slate-500
      p-4
       pl-7
        pr-7
        border-white
        '>Not</button>
</div>
</div>

















  
)
})}


</>

    

  )}