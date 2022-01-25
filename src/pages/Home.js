import React, { useEffect, useState } from "react";
import EstateCard from "../components/EstateCard";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { data } from "../data";
import "./Home.scss";
function Home() {
  const [liked, setLiked] = useState([]);
  const [value, setValue] = useState("");
  let unliked = [];

  function handleLike(id) {
    unliked = liked.filter((d) => d !== id);
    if (liked.includes(id)) {
      setLiked([...unliked]);
    } else {
      setLiked((prev) => [...prev, id]);
    }
  }
  let [filtered, setFiltered] = useState(data);

  function search(e) {
    setValue(e.target.value);
  }
  function click() {
    if (value === "") return;
    setFiltered(
      filtered.filter(
        (item) => item.location.toLowerCase() === value.toLowerCase() && item
      )
    );
  }
  useEffect(() => {
    setFiltered(data);
  }, [value]);
  return (
    <>
      <Sidebar />
      <TopBar />
      <div className="home">
        <div className="search">
          <input type="text" onChange={search} value={value} />
          <button onClick={() => click()}>search</button>
        </div>
        <div className="estates">
          {filtered.length > 0 &&
            filtered.map((item, index) => (
              <React.Fragment key={item.id}>
                <EstateCard
                  item={item}
                  like={() => {
                    handleLike(item.id);
                    console.log(filtered);
                  }}
                  color={liked.includes(item.id) && "red"}
                />
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
