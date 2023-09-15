// import React, { useEffect, useState } from "react";
// import "./Header.css";

// const Header = () => {
//   const [allCards, setAllCards] = useState([]);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [search, setSearch] = useState("");

  
//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     const response = await fetch("https://api.punkapi.com/v2/beers");
//     const json = await response.json();

//     setAllCards(json);
//     setFilteredCards(json);
//   }

//   async function filterData(search , allCards){
//     const filterData = await allCards.filter((card)=>{
//       card?.name.includes(search);
//     })
//     return filterData;
//   }

//   // if(!allCards) return null;

//   return (
//     <div className="Header">
//       <div className="searchbar">
//         <input
//           type="text"
//           value={search}
//           placeholder="search"
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//         ></input>

//         <button
//         type="submit"
//           onClick={() => {
//             const data = filterData(search, allCards);
//             console.log(filterData());
//             setFilteredCards(data);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       { filteredCards.map((filteredCard) => { return (
//           <div className="cards" key={filteredCard.id}>
//             <div className="cards_img">
//               <img src={filteredCard?.image_url}></img>
//             </div>
//             <div className="cards_info">
//               <h3 className="cards_name">{filteredCard?.name}</h3>
//               <h2 className="cards_descrip">{filteredCard?.description}</h2>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//     // </div>
//   );
// };

// export default Header;

import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header