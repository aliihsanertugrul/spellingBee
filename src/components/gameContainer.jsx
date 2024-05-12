"use client";

import React, { useState } from "react";
import Hive from "./hive";
import Rules from "./rules";

const GameContainer = ({ t, lang }) => {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      {showGame ? (
        <Hive t={t} setShowGame={setShowGame} lang={lang} />
      ) : (
        <Rules t={t} setShowGame={setShowGame} />
      )}
    </>
  );
};

export default GameContainer;
