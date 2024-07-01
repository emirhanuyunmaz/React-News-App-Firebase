import { useDispatch, useSelector } from "react-redux"
import { changeEmail, changeName, changePassword, changePasswordAgain } from "../store/slices/signUpSlice";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseInitial } from "../../firebase";
import { useNavigate } from "react-router-dom";


export default function SignUp(){

    const dispatch = useDispatch()
    const signUp = useSelector((state) => state.signUp) 
    const navigation = useNavigate()

    function handleClick(event){
        event.preventDefault()
        console.log()
        if(signUp.password == signUp.passwordAgain && signUp.name !=="" && signUp.email !== ""){
            console.log("hepsi doğrudur")
            //********* */
            firebaseInitial()
            //********* */
            const auth = getAuth()
            createUserWithEmailAndPassword(auth,signUp.email,signUp.password)
            navigation("/signIn")

        }else{  
            console.log("yanışın var")

        }



    }


    return(<div className="flex gap-6 flex-col justify-center items-center h-80vh ">
        
        <h2 className="text-4xl" >Sign Up</h2>
        <form action="" className="flex flex-col  gap-4 w-1/4 ">
            <input value={signUp.name} onChange={(event) => dispatch(changeName(event.target.value))} className="outline-none border-2 rounded-2xl px-2 py-1" type="text" placeholder="Name" />
            
            <input value={signUp.email} onChange={(event) => dispatch(changeEmail(event.target.value))} className="outline-none border-2 rounded-2xl px-2 py-1" type="text" placeholder="Email" />
            
            <input value={signUp.password} onChange={(event) => dispatch(changePassword(event.target.value))} className="outline-none border-2 rounded-2xl px-2 py-1" type="password" placeholder="Password" />
            
            <input value={signUp.passwordAgain} onChange={(event) => dispatch(changePasswordAgain(event.target.value))} className="outline-none border-2 rounded-2xl px-2 py-1" type="password" placeholder="Password Again" />
            
            <div className="flex justify-center">
            <button onClick={(event) => handleClick(event)} className="bg-orange-400  text-white hover:bg-orange-600 duration-500 px-4 py-2 w-1/2 rounded-3xl ">Sign Up</button>
            </div>
        </form>


    </div>)
}