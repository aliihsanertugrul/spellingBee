import React from "react";
import { GiBee } from "react-icons/gi";

const Rules = ({ t,setShowGame }) => {
  return (
    <div className=" w-3/4 bg-outerHoney rounded-xl p-8 text-sm md:text-lg">
      <h1 className="text-lg border-b-2 mb-2 flex items-center font-bold"><GiBee style={{background:"gray",borderRadius:"10px",width:"50px",height:"30px",padding:"2px",marginRight:"5px"}} color="rgb(248,205,5)" size={25}/>  {t.rules.ruleHeader} </h1>
      <p>{t.rules.createWords}</p>
      <ul className="list-disc list-inside mb-5">
        <li>{t.rules.atleastFourLetters}</li>
        <li>{t.rules.centerLetter} </li>
        <li>{t.rules.moreThanOne} </li>
        <li>
        {t.rules.notIntheList}
        </li>
      </ul>
      <p> {t.rules.earnPoints}</p>
      <ul className="list-disc list-inside">
        <li> {t.rules.fourLetters}</li>
        <li>{t.rules.fiveLetters}</li>
        <li>
        {t.rules.pangrams}
        </li>
      </ul>

      <div className="w-full flex items-center justify-center">
      <button className="bg-zinc-700 hover:bg-zinc-800 transform duration-200 px-10 py-1 text-white rounded-md mt-5 animate-bounce" onClick={()=>{setShowGame(true)}}>
        {t.rules.play}
      </button>
      </div>
    </div>
  );
};

export default Rules;
