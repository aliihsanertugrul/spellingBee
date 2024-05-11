"use client";
import React, { useState } from "react";
import CorrectWord from "./answers.json";
import { swalToast } from "@/helpers/swal";

const Hive = () => {
  const [clickedLetter, setClickedLetter] = useState([]);
  const [trueWords, setTrueWords] = useState([]);
  const [points, setPoints] = useState(0)
  console.log("points",points)
  localStorage.setItem("trueWords",trueWords)

  console.log("trueWords", trueWords);

  const handleClick = (letter) => {
    setClickedLetter([...clickedLetter, letter]);
  };
  const [answer, setAnswer] = useState(CorrectWord);

  const handleMatch = () => {
    let result = answer.find(
      (item) => item.letters.join() == clickedLetter.join()
    );
    if (!clickedLetter.includes("R")) {
      swalToast("Missing center letter");
      setClickedLetter([]);
    } else if (clickedLetter.length < 4) {
      swalToast("Too short");
      setClickedLetter([]);
    } else if (clickedLetter.length > 7) {
      swalToast("Too long");
      setClickedLetter([]);
    } else if (result == undefined) {
      swalToast("Not in the word list!");
      setClickedLetter([]);
    } else {
      swalToast("Nice", "success");
      setTrueWords((prev) => [...prev, result]);
      setClickedLetter([]);
    }
    
    if(result.letters.length==4){
        setPoints(prev=>prev+5)
    }else if(result.letters.length==5){
        setPoints(prev=>prev+6)
    }else if(result.letters.length==6){
        setPoints(prev=>prev+7)
    }else if(result.letters.length==7){
        setPoints(prev=>prev+10)
    }

    console.log("*****", result.letters.length);
  };

  const handleDelete = () => {
    const updatedLetters = [...clickedLetter];
    updatedLetters.pop();
    setClickedLetter(updatedLetters);
  };
  console.log("clickedLetter", clickedLetter);
  console.log("clickedLettersss", clickedLetter.join());
  return (
    <>
    
      {
        trueWords.length>0 && <div className="max-w-[250px] border-2 border-centerHoney p-3 rounded-md text-md flex flex-wrap overflow-hidden">
        {trueWords.map((item) => (
          <span className="mr-3">{item.word}</span>
        ))}
      </div>
      }
      <div className="border-b-4 mt-5 h-14 flex items-center justify-center text-xl">
        {clickedLetter}
      </div>
      <div className="honey-container">
        <div className="honey-cell px-11 translate-y-4">
          <button className="honey-button" onClick={() => handleClick("A")}>
            A
          </button>
          <button className="honey-button" onClick={() => handleClick("C")}>
            C
          </button>
        </div>

        <div className="honey-cell px-2">
          <button className="honey-button" onClick={() => handleClick("K")}>
            K
          </button>
          <button
            className="honey-button center-hex"
            onClick={() => handleClick("R")}
          >
            R
          </button>
          <button className="honey-button" onClick={() => handleClick("T")}>
            T
          </button>
        </div>

        <div className="honey-cell px-11 -translate-y-4">
          <button className="honey-button" onClick={() => handleClick("W")}>
            W
          </button>
          <button className="honey-button" onClick={() => handleClick("Y")}>
            Y
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-4 mx-auto">
        <button className="bg-red-400 px-3 py-1 rounded-md text-white" onClick={handleDelete}>Delete</button>
        <button className="bg-zinc-700 px-3 py-1 rounded-md text-white" onClick={handleMatch}>Enter</button>
      </div>
    </>
  );
};

export default Hive;
