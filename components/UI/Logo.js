import React from "react";
import Image from "next/image";


export default function CairoLogo() {

    return (
        <div className="h-10 w-15">
        <Image
          src="/lost_in_cairo.svg"
          layout="responsive"
          

          height="98"
          width="183"
        />
      </div>
    )
}