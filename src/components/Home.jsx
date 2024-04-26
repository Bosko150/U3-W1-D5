import React from "react";
import MyNavbar from "./MyNavbar";
import MyTvShows from "./MyTvShows";
import MyFooter from "./MyFooter";
import MyCarousel from "./MyCarousel";

function Home() {
  return (
    <div>
      <MyNavbar />
      <MyTvShows />
      <MyCarousel search="resident evil" title="Resident Evil saga" />
      <MyCarousel search="Planet of the apes" title="Planet of the Apes saga" />
      <MyCarousel search="Godzilla" title="Godzilla saga" />
      <MyCarousel search="Harry Potter" title="Harry Potter saga" />
      <MyFooter />
    </div>
  );
}

export default Home;
