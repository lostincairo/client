import React, { useMemo } from "react";
import { useBlock } from '@starknet-react/core'

export default function NetworkStatus() {

  const { data, isLoading, isError } = useBlock() 

  const indicatorColor = useMemo(() => {
    if (data) {
      return ( <div className="mt-1 ml-5 w-6 h-6 rounded-full bg-green-500"></div> )
    }
    if (isError) {
      return ( <div className="mt-1 ml-5  w-6 h-6  rounded-full bg-red-500"></div> )
    }
    return ( <div className="mt-1 ml-5  w-6 h-6  rounded-full bg-blue-500"></div> )
  }, [data, isError]) 

  return indicatorColor;

  }