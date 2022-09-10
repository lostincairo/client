import React, { useMemo } from "react";
import { useStarknetBlock } from '@starknet-react/core'

export default function BlockNumber() {

  const { data, loading, error } = useStarknetBlock() 

  const indicatorText = useMemo(() => {
    if (data) {
      return data.block_number;
    }
    if (loading) {
      return "Loading";
    }
    if (error) {
      return "Network Error";
    }
    return "";
  }, [data, loading, error]);

  return (
      <div className="ml-auto px-10 btn btn-primary">
          {`Block ${indicatorText}`}
      </div>
  )

}

