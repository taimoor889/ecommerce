import { allProducts } from "../src/assets/data";
import CardItems from "./components/CardItems";
function App() {
 
  return (
    <>
      <div className="flex items-center  justify-center bg-gray-100 ">
        <h1 className="text-5xl mt-8 mb-5">Grab the season's outfit </h1>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 place-items-center-safe m-16 gap-10">
       
        {allProducts?.map((prod, index) => (
          <CardItems prod={prod} key={index}/>
        ))}
      </div>
    </>
  );
}

export default App;
