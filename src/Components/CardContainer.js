import { React } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const CardContainer = ({ input }) => {
  const pokeData = useSelector((state) => state.data);
  const filteredPoke = pokeData.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(input);
    }
  });
  return (
    <div>
      <div className="resultsBar">
        {input ? "Filtered" : "All"} Jobs - {filteredPoke.length} Result
        {filteredPoke.length > 1 ? "s" : " "}
      </div>
      <div className="cardContainer">
        {filteredPoke.map((i) => (
          <Card key={i.id} pokeData={i} />
        ))}
      </div>
    </div>
  );
};
