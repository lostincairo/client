import Meta from "../components/Meta";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { connectToDatabase } from "../utils/mongodb";

export default function Home({ properties }) {
  const { inGame } = useSelector((store) => store._game);

  return (
    <div className="h-full w-screen flex flex-col">
      <Meta />
      <Navigation properties={properties} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("events")
    .find({})
    .limit(5)
    .sort({ _id: -1 })
    .toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties: properties },
  };
}
