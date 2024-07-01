import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./layout/Home"
import SignIn from "./layout/SignIn"
import SignUp from "./layout/SignUp"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { firebaseInitial } from "../firebase"
import { useState } from "react"
import { getFirestore } from "firebase/firestore"
import Saved from "./layout/Saved"


function App() {
      
      //********* */
    firebaseInitial()
    //********* */
  const [activeUser , setActiveUser] = useState("")

  const auth = getAuth()

  getFirestore()

  onAuthStateChanged(auth , (user) => {
    //console.log(user.email)
    if(user) {
      setActiveUser(user.email)
    }
    else{
      setActiveUser("")
    }
  })

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path=":category" />
        </Route>
        { activeUser === "" && <Route path="/signIn" element={<SignIn/>} />}
        { activeUser === "" &&<Route path="/signUp" element={<SignUp/>} />}
        { activeUser !== "" &&<Route path="/saved" element={<Saved/>} />}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
