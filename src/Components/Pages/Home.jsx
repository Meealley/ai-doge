import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Section1 from "../Section1/Section1";
import Platformprev from "../Section1/Platformprev";
import Futurememe from "../Section1/Futurememe";
import HowtoBuy from "../Section1/HowtoBuy";
import RoadMap from "../Section1/RoadMap";
import BillionToken from "../Section1/BillionToken";
import FaqReal from "../Section1/FaqReal";
import Footer from "../Section1/Footer";
import ConnectWallet from "../Section1/ConnectWallet";

const Home = () => {
  const [isShown, setIsShown] = useState(false);

  const showHandler = () => {
    setIsShown(true);
  };

  const hideHandler = () => {
    setIsShown(false);
  };
  return (
    <>
      <NavBar onShow={showHandler}/>
      {isShown && <ConnectWallet onHide={hideHandler} />}
      <Section1 />
      <Platformprev />
      <Futurememe />
      <HowtoBuy />
      <RoadMap />
      <BillionToken />
      <FaqReal />
      <Footer />
    </>
  );
};

export default Home;
