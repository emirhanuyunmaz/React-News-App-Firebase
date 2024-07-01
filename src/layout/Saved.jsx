import { useEffect, useState } from "react";
import { firebaseInitial, getSavedData } from "../../firebase";
import Article from "../components/Article";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Saved(){

    //************ */
    firebaseInitial()//gitignore dosyası için text hazırlanacak
    //************ */

    const [activeUser , setActiveUser] = useState("")
    const [data,setData] = useState([])
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth , (user) => {
          console.log(user)
          if(user) {

            setActiveUser(user.email)
            const res = getSavedData(user.email) 
            res.then((news) => setData(news))
            
          }
          else{
            setActiveUser("")
          }
        })
      },[activeUser])

      console.log(data);
    return(<div className="flex gap-2 justify-center mt-6 flex-wrap">
        {
            activeUser && data.map((news,index) => <Article key={index} news={news.news} />)
        }
    </div>)
}