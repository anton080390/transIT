import { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import useRequest from "../../components/hooks/useRequest";
import SingleCard from "../../components/SingleCard/SingleCard";

function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [search, setSearch] = useState("");
  const apiData = useRequest(search);
  const searchRef = useRef("");
  useEffect(() => {
    searchRef.current.focus();
  });

  const handleCardClick = (id) => {
    setSelectedFilm(id);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        ref={searchRef}
      />
      <h2>{selectedFilm}</h2>
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {apiData.map(({ show }, index) => (
          <Grid item xs={4} key={index}>
            <SingleCard
              id={show.id}
              title={show.name}
              description={show.premiered}
              image={show.image ? show.image.medium : ""}
              makeClick={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Home;
