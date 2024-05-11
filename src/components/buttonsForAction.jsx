import React from 'react'
import { GiWhistle } from "react-icons/gi";

const ButtonsForAction = ({handleDelete,handleMatch,setShowGame,t}) => {
  return (
    <div className="flex flex-col mt-4 mx-auto">
    <div className="flex gap-4">
    <button className="bg-red-400 px-3 py-1 rounded-md text-white hover:bg-red-500 transform duration-150 min-w-20" onClick={handleDelete}>{t.buttons.delete}</button>
    <button className="bg-zinc-700 px-3 py-1 rounded-md text-white hover:bg-zinc-800 transform duration-150 min-w-20" onClick={handleMatch}>{t.buttons.enter}</button>
    </div>
    <div className="mt-2 mx-auto  ">
        <button className="flex items-center justify-center gap-1 text-sm  font-semibold opacity-60 hover:text-zinc-900 hover:opacity-100 transform duration-200" onClick={()=>setShowGame(false)}>{t.buttons.startGame} <GiWhistle size={25}/></button>
    </div>
  </div>
  )
}

export default ButtonsForAction