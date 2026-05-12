import { useState } from "react"

export default function TestPage(){

    const [score , setScore] =  useState(50)
    const [mood , setMood] = useState("😐")
    const [isFollowed , setIsFollowed] = useState(false)

    //let score = 50

    

    return(
        <div className="w-full h-full bg-green-400 flex justify-center items-center">
            <div className="w-[450px] h-[450px]  bg-white flex justify-center items-center flex-col">
                <h1 className="font-bold text-7xl">{score}</h1>
                <div className="w-full h-[100px] flex justify-center items-center">
                    <button className="w-[100px] bg-red-600 h-[40px] mx-5"
                        onClick={
                            ()=>{
                                // score = 49
                                setScore(score - 1)
                            }
                        }>
                        Decrease
                    </button>
                    <button 
                        className="w-[100px] bg-green-600 h-[40px] mx-5"
                        onClick={
                            ()=>{

                                setScore(score + 1)

                            }
                        }>
                        Increase
                    </button> 
                </div>               
            </div>
        </div>
    )
}