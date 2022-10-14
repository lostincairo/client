import { GetServerSideProps } from "next";
import { Base64 } from "/utils/base64";

export default function EventHistory({properties}) {

  return (
    <div className="overflow-hidden	">
      <div className="mx-auto mt-3 sm:px-6 lg:px-8">
        {properties && properties.map(property => (
          <p>{property.name} - {Buffer.from(property.address,'')} - Game ID: {Buffer.from(property.data[0],'base64')}</p>,
          // <p>{property.address}</p>
        ))}</div>
    </div>
  )}
  
  export async function getServerSideProps(context) {
  
    const { db } = await connectToDatabase();
    const data = await db.collection("events").find({}).limit(6).toArray(); 
  
    const properties = JSON.parse(JSON.stringify(data));
  
  
    return {
      props: { properties: properties  },
    }
  }
    
  