import React, { useMemo } from "react";
import { useBlock } from '@starknet-react/core'

export default function BlockNumber() {

  const { data, isLoading, isError } = useBlock() 

  const indicatorText = useMemo(() => {
    if (data) {
      return data.block_number;
    }
    if (isLoading) {
      return "Loading";
    }
    if (isError) {
      return "Network Error";
    }
    return "";
  }, [data, isLoading, isError]);

  return (
      <div className="font-mario text-2xl -ml-6 px-10 btn btn-primary">
          {`Block ${indicatorText}`}
      </div>
  )

}

