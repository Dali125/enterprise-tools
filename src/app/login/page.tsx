"use client"
import { useState , useEffect} from "react";
import Input from "postcss/lib/input";
import { Image } from "react-bootstrap";
import { app, db } from "../api/firebase/firebase";
import { setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { randomUUID } from "crypto";


export default function Login(){

    


    const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
    useEffect(() => {
      console.log(email)
    }, [email, password])
    


    async function handleSubmit(){


        let fullname = email;
        console.log(fullname)

        await firebase.firestore().collection('users').add({
           'username':email,
           'password':password ,
           'id':randomUUID,
        })
        
        alert(fullname)

    }

  

return(

    <>

    

<div className="justify-center
 items-center
 flex
 flex-col
  h-screen">



   
    <div>
      
    <h1 className="mb-20 text-4xl">Login to Continue</h1>
    </div>
    

<form onSubmit={handleSubmit}>
    <p className="text-2xl" >Email</p>
    <input className="py-2
     mb-7
      text-black
       rounded px-4" placeholder="Email"
        value={email}
        onChange={e => setemail(e.target.value)}
        ></input>

    <p className="text-2xl">Password</p>
    <input className="py-2
     mb-20
      text-black
       rounded
        px-4" type="password" value={password}
        onChange={(e) => setpassword(e.target.value)}
        ></input>
    <div>
    <button className="hover:animate-pulse
     hover:bg-slate-500 shadow-md shadow-white border border-white px-10 py-3 rounded-lg " type="submit"> Login</button>
    </div>

    <div>{email}</div>

</form>


    </div>
    </>
)


}