//Kategori kısmı ve ona göre arama işlemi ardından kelimeyer göre arama işlemi ve üyelik işlemleri

import { Link } from "react-router-dom";

export default function Categories(){
    return(<section className="flex text-white bg-gray-300 px-4 py-4 gap-2 rounded-2xl flex-col">
        <h3 className="text-center">Categories</h3>
        <Link reloadDocument to={"/business"} className="bg-gray-400 hover:bg-gray-500 rounded-2xl px-2 py-1" >Business</Link>
        <Link reloadDocument to={"/entertainment"} className="bg-gray-400 hover:bg-gray-500 rounded-2xl px-2 py-1" >Entertainment</Link>
        <Link reloadDocument to={"/general"} className="bg-gray-400 hover:bg-gray-500 rounded-2xl px-2 py-1" >General</Link>
        <Link reloadDocument to={"/health"} className="bg-gray-400 hover:bg-gray-500 rounded-2xl px-2 py-1" >Health</Link>
        <Link reloadDocument to={"/science"} className="bg-gray-400 hover:bg-gray-500 rounded-2xl px-2 py-1" >Science</Link>
        <Link reloadDocument to={"/sports"} className="bg-gray-400 hover:bg-gray-500 rounded-2xl px-2 py-1" >Sports</Link>
        <Link reloadDocument to={"/technology"} className="bg-gray-400 hover:bg-gray-500 rounded-2xl px-2 py-1" >Technology</Link>
    </section>)
}