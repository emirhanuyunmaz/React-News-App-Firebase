import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseInitial, saveNews } from "../../firebase"
import { IoSaveSharp } from "react-icons/io5";
import { useEffect, useState } from "react";


export default function Article({news}){

    //************ */
    firebaseInitial()
    //************ */
    const [activeUser , setActiveUser] = useState("")
    console.log("Article::"+news);
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
        saveNews(activeUser,news)

    }

    return(<article className="w-1/4 relative text-white rounded-xl flex flex-col gap-2 justify-between bg-gray-400 px-1 py-1">
        <div>
            <img className="rounded-xl"  src={news.urlToImage === null ? "../../news_image.jpg" : news.urlToImage } alt="" />
            <p>{news.description}</p>
        </div>
        <div>
            <a className="bg-orange-400 hover:bg-orange-500 px-4 py-1 rounded-2xl" href={`${news.url}`} >Read Mode</a>

            {
                activeUser &&
                <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-2xl absolute top-0 right-0 mr-2" onClick={handleClick} ><IoSaveSharp />
            </button>}
        </div>
    </article>)
} 