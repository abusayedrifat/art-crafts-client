import { useLoaderData } from "react-router-dom";
import SingleArtCraft from "./SingleArtCraft";
import { useEffect } from "react";

const AllArtCrafts = () => {
  const loadCrafts = useLoaderData();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  
  return (
    <div className="w-[70%] mx-auto my-24">
      <h2 className="text-2xl font-bold text-font text-center my-10 md:text-5xl">
        ALL Arts & Crafts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        {loadCrafts.map((craftsItem) => (
          <SingleArtCraft
            key={craftsItem._id}
            craftItem={craftsItem}
          ></SingleArtCraft>
        ))}
      </div>
    </div>
  );
};

export default AllArtCrafts;
