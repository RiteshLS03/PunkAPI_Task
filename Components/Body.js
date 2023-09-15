import React, { useEffect, useState } from "react";
import "./Body.css";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [filteredCard, setFilteredCard] = useState([]);

  function filterData(searchText, allCards) {
    const data = allCards.filter((eachcard) => {
      return eachcard?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    return data;
  }

  async function getCards() {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const json = await response.json();

      setAllCards(json);
      setFilteredCard(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <div className="searchbar">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="search"
        ></input>
        <button
          onClick={() => {
            const data = filterData(searchText, allCards);
            setFilteredCard(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="list">
        {filteredCard.map((allCard) => (
          <div className="cards" key={allCard.id}>
            <div className="cards_img">
              <img src={allCard?.image_url}></img>
            </div>
            <div className="cards_info">
              <h3 className="cards_name">{allCard?.name}</h3>
              <h4 className="cards_tagline">Tagline: {allCard?.tagline}</h4>
              <h2 className="cards_descrip">{allCard?.description}</h2>
              <h4 className="cards_first-brewed">
                First Brewed on {allCard?.first_brewed}
              </h4>
              <h4>Contributed By {allCard?.contributed_by}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
