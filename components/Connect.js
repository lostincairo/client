import React from "react";

export default function Connect() {
  return (
    <div className="flex align-center max-w-7xl w-full p-5 flex-col lg:px-8">
      <a
        className="self-center w-40 h-20 "
        href="https:/twitter.com/lostincairogame/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button
          type="button"
          className="mx-auto w-40 h-20 bg-[url('../public/play_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4"
        ></button>
      </a>
    </div>
  );
}
