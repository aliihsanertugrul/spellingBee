"use client";
import React, { useEffect, useState } from "react";
import CorrectWord from "./wordsForBothLang.json";
import { swalAlert, swalToast } from "@/helpers/swal";

import ButtonsForAction from "./buttonsForAction";

const Hive = ({ setShowGame, t, lang }) => {
  const [clickedLetter, setClickedLetter] = useState([]);
  const [trueWords, setTrueWords] = useState([]);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const counter = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(counter);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => {
      console.log("componentdidunmount")
      clearInterval(counter)
    };
  }, []);

  const handleClick = (letter) => {
    setClickedLetter([...clickedLetter, letter]);
  };
  const [answer, setAnswer] = useState(CorrectWord);

  const handleMatch = () => {
    let result = answer.find(
      (item) => item.letters.join() == clickedLetter.join()
    );
    if (lang == "en" && !clickedLetter.includes("R")) {
      swalToast("Missing center letter");
      setClickedLetter([]);
    } else if (lang == "tr" && !clickedLetter.includes("S")) {
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
      setTimer((prevTimer) => prevTimer + 15);
    }

    if (result?.letters?.length == 4) {
      setPoints((prev) => prev + 5);
    } else if (result?.letters?.length == 5) {
      setPoints((prev) => prev + 6);
    } else if (result?.letters?.length == 6) {
      setPoints((prev) => prev + 7);
    } else if (result?.letters?.length == 7) {
      setPoints((prev) => prev + 10);
    }
  };

  const handleDelete = () => {
    const updatedLetters = [...clickedLetter];
    updatedLetters.pop();
    setClickedLetter(updatedLetters);
  };

  if (timer == 0) {
    swalAlert(
      `${t.hive.timeIsOver}`,
      "warning",
      `${t.hive.score}: ${points} ${t.hive.points}`
    );
    setShowGame(false);
  }
  return (
    <>
      {trueWords.length > 0 && (
        <div className="max-w-3/4 border-2 border-centerHoney p-3  rounded-md text-md flex flex-col justify-between flex-wrap overflow-hidden shadow-md">
          <div className="flex flex-wrap">
            {trueWords.map((item) => (
              <span className="mr-3">{item.word}</span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-2">
        <h2 className="text-zinc-800 font-semibold">
          {t.hive.time} :{" "}
          <span className={`${timer < 11 ? "text-red-700 animate-pulse" : ""}`}>
            {timer === 0 ? t.hive.timeIsOver : timer}
          </span>
        </h2>

        <h2 className="text-zinc-800 font-semibold">
          {t.hive.points} :{" "}
          <span className="motion-reduce:animate-ping text-green-500">
            {points}
          </span>
        </h2>
      </div>

      <div className="border-b-4 mt-3 h-8 flex items-center justify-center text-xl">
        {clickedLetter}
      </div>
      <div className={`honey-container ${timer == 0 && "pointer-events-none"}`}>
        <div className="honey-cell px-11 translate-y-4">
          <button
            className="honey-button"
            onClick={() => handleClick(`${lang == "en" ? "A" : "M"}`)}
          >
            {lang == "en" ? "A" : "M"}
          </button>
          <button
            className="honey-button"
            onClick={() => handleClick(`${lang == "en" ? "C" : "E"}`)}
          >
            {lang == "en" ? "C" : "E"}
          </button>
        </div>

        <div className="honey-cell px-2">
          <button
            className="honey-button"
            onClick={() => handleClick(`${lang == "en" ? "K" : "A"}`)}
          >
            {lang == "en" ? "K" : "A"}
          </button>
          <button
            className="honey-button center-hex"
            onClick={() => handleClick(`${lang == "en" ? "R" : "S"}`)}
          >
            {lang == "en" ? "R" : "S"}
          </button>
          <button
            className="honey-button"
            onClick={() => handleClick(`${lang == "en" ? "T" : "K"}`)}
          >
            {lang == "en" ? "T" : "K"}
          </button>
        </div>

        <div className="honey-cell px-11 -translate-y-4">
          <button
            className="honey-button"
            onClick={() => handleClick(`${lang == "en" ? "W" : "L"}`)}
          >
            {lang == "en" ? "W" : "L"}
          </button>
          <button
            className="honey-button"
            onClick={() => handleClick(`${lang == "en" ? "Y" : "N"}`)}
          >
            {lang == "en" ? "Y" : "N"}
          </button>
        </div>
      </div>

      <ButtonsForAction
        t={t}
        handleDelete={handleDelete}
        handleMatch={handleMatch}
        setShowGame={setShowGame}
      />
    </>
  );
};

export default Hive;
