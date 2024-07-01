import { Link, useNavigate } from "react-router-dom";
import { firebaseInitial } from "../../firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Navbar(){
    const navigation = useNavigate()

          //********* */
          firebaseInitial()
          //********* */
        const [activeUser , setActiveUser] = useState("")
      
        const auth = getAuth()
      
        useEffect(() => {
          onAuthStateChanged(auth , (user) => {
            console.log(user)
            if(user) {
              setActiveUser(user.email)
            }
            else{
              setActiveUser("")
            }
          })
        },[activeUser])

        function handleClick(){
            //Logout
            auth.signOut()
            setActiveUser("")
            navigation("/signIn")
            //navigation işlemleri ve haber kaydetme işlemi gerçekleştirilecek kişiye özel
        }        

    return (<nav className="flex items-center justify-between bg-orange-500 px-4 py-2 text-white">
        <div>
           <h1 className="text-4xl"><a href="/">NEWS</a></h1>
        </div>
        <div className="flex gap-4">
            { activeUser === "" && <Link  className="border-b-2 border-orange-500  hover:border-b-white" to={"/signIn"} >Sign In</Link>}
            { activeUser === "" && <Link  className="border-b-2 border-orange-500  hover:border-b-white" to={"/signUp"}>Sign Up</Link>}
            { activeUser !== "" && <Link  className="border-b-2 border-orange-500  hover:border-b-white" to={"/saved"}>Saved News</Link>}
            { activeUser !== "" && <button onClick={handleClick} className="border-b-2 border-orange-500  hover:border-b-white" >Logout</button>}
        </div>

    </nav>)
}