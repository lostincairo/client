import React from "react";
import { useStarknetBlock } from '@starknet-react/core'

// TODO: Add UseMemo if compute of Network Status introduces performance issues.

export default function NetworkStatus() {

  const { data, loading, error } = useStarknetBlock() 

    if (data) {
      return ( <div className="mt-1 ml-5 w-6 h-6 rounded-full bg-green-500"></div> )
    }
    if (error) {
      return ( <div className="mt-1 ml-5  w-6 h-6  rounded-full bg-red-500"></div> )
    }
    return ( <div className="mt-1 ml-5  w-6 h-6  rounded-full bg-blue-500"></div> )
  }