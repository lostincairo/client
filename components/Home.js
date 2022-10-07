
import React from "react";
import Image from "next/image";
import ConnectWallet from "./Connect";

export default function Home({}) {

  return (
    <div className="my-2 h-full">
      <div className="flex flex-auto justify-center content-center mx-auto max-w-3xl p-5 flex-col lg:px-8">
        <Image
          src="/lost_in_cairo.svg"
          layout="responsive"
          height="98"
          width="183"
        />
        <ConnectWallet />
      </div>
    </div>
  );
}
