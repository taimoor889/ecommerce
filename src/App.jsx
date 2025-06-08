import { allProducts } from "../src/assets/data";
import CardItems from "./components/CardItems";
import AddToCart from '../src/components/AddToCart'
function App() {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 py-10 px-5">
        <h1 className="text-5xl mr-6">Grab the season's outfit</h1>
      <AddToCart/>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-4 xs:grid-cols-2 place-items-center-safe m-16 gap-6">
        {allProducts?.map((prod, index) => (
          <CardItems prod={prod} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
