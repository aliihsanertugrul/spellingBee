"use client";

import React, { useState } from "react";
import Hive from "./hive";
import Rules from "./rules";


const GameContainer = ({ t,lang }) => {
  const [showGame, setShowGame] = useState(false);
  const [timer, setTimer] = useState(60);

  const handleTimer = () => {
    setShowGame(true);
    setTimer(60)
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

    return () => clearInterval(counter);
  };

  

  return (
    <>
      {showGame ? (
        <Hive
          setTimer={setTimer}
          timer={timer}
          t={t}
          setShowGame={setShowGame}
          lang={lang}
        />
      ) : (
        <Rules t={t} handleTimer={handleTimer} />
      )}
    </>
  );
};

export default GameContainer;
