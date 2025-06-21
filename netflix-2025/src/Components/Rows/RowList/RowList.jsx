import React from "react";
import RowSingle from "../RowSingle/RowSingle";
import requests from "../../../utils/requests";
// import './RowList.css';

function RowList() {
  return (
    <>
      <RowSingle
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <RowSingle
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <RowSingle
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={false}
      />
      <RowSingle
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <RowSingle
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <RowSingle
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <RowSingle
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <RowSingle
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />
      <RowSingle
        title="TV Shows"
        fetchUrl={requests.fetchTVShow}
        isLargeRow={true}
      />
    </>
  );
}

export default RowList;
