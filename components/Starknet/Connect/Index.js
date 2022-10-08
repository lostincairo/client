import dynamic from "next/dynamic";
const NoSSRComponent = dynamic(() => import("./Connect"), {
  ssr: false,
});

const ConnectWallet = () => {
  return (
    <>
      <NoSSRComponent />
    </>
  );
}
export default ConnectWallet;