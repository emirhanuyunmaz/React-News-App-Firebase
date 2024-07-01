import { useGetCategoryNewsQuery, useGetTopNewsQuery } from "../store/api/newsApi"
import Article from "../components/Article";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home(){

    let { category } = useParams();


    let {data ,isLoading ,isError} = category !== undefined ? useGetCategoryNewsQuery(category) : useGetTopNewsQuery()


    return(<div className="flex mt-5 ">

        <div className=" w-3/4 flex flex-wrap gap-4 justify-center ">
                
                {
                    isError ? <div>Error</div> : <>
                    {
                        isLoading ? <div>Loading ...</div> : <>
                            {
                             category !== undefined ? data.sources.map((item,index) => <Article news={item} key={index} />) : data.articles.map((news , index ) => <Article key={index} news={news} />  )
                            }
                        </>
                    }
                    </>
                } 
        </div>

        <div>
            <Categories/>
        </div>

    </div>)
}