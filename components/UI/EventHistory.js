
import { GetServerSideProps } from "next";

export default function EventHistory({properties}) {
    
  // const id = properties.map((property) => {
  //   return <div>{property_id}</div>
  // });
  

  return (
    <div>
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">Event History</div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {properties && properties.map(property => (
          <p>{property.name} - Game ID: {Buffer.from(property.data[0],'base64')}</p>
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
    
  