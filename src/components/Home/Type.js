import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hi There!",
          "I'M SREEJA KODALI"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 1500,
      }}
    />
  );
}

export default Type;
