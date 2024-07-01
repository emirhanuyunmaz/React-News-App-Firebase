import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword } from "../store/slices/signInSlice";
import { changeUser } from "../store/slices/activeUserSlice";
import { firebaseInitial } from "../../firebase";
import { useNavigate } from "react-router-dom";


export default function SignIn(){
    //Giriş yap

    const dispatch = useDispatch()
    const signIn = useSelector((state) => state.signIn)
    const navigation = useNavigate()

    //********* */
    firebaseInitial()
    //********* */

    function handleClick(event) {
        event.preventDefault()
        const auth = getAuth()
        console.log(signIn.email)
        console.log(signIn.password)
        signInWithEmailAndPassword(auth,signIn.email,signIn.password)
        .then((userCredential) => {
            console.log(userCredential.user);
            changeUser(userCredential.user)
            navigation("/")
        })
        

    }

    return(<div className="flex gap-6 flex-col justify-center items-center h-80vh ">
        
        <h2 className="text-4xl" >Sign In</h2>
        <form  className="flex flex-col  gap-4 w-1/4 ">
            <input value={signIn.email} onChange={(event) => dispatch(changeEmail(event.target.value))}  className="outline-none border-2 rounded-2xl px-2 py-1" type="text" placeholder="Email" />
            <input value={signIn.password} onChange={(event) => dispatch(changePassword(event.target.value))} className="outline-none border-2 rounded-2xl px-2 py-1" type="password" placeholder="Password" />
            <div className="flex justify-center">
            <button onClick={(event) => handleClick(event)} className="bg-orange-400  text-white hover:bg-orange-600 duration-500 px-4 py-2 w-1/2 rounded-3xl ">Sign In</button>
            </div>
        </form>


    </div>)
}