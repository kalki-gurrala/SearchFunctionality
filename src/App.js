import { useState } from "react";
import "./App.css";
import datas from "./Lists/Apidata";
import Lists from "./Lists/Lists";
// import CardPage from "./CardPage/CardPage";
import Navbar from "./NavBar/Navbar";

function App() {
  let [data, setData] = useState(datas);
  const [search, SetSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const SearchHandler = (search) => {
    SetSearch(search);
    if (search !== "") {
      const newSearchList = data.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResults(newSearchList);
    } else {
      setSearchResults(data);
    }
  };

  return (
    <div className="App">
      <Navbar search={search} searchKeyword={SearchHandler} />
      {/* <CardPage /> */}
      <Lists data={search.length < 1 ? data : searchResults} />
    </div>
  );
}

export default App;
