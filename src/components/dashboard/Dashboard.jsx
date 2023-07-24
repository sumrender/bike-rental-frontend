import React from "react";
import Stats from "./Stats";
import AddRenterForm from "./AddRenterForm";
import Bike from "./Bike";
import bike1 from "../../assets/bike1.jpg";
import bike2 from "../../assets/bike2.jpg";
import bike3 from "../../assets/bike3.jpg";
import { getBlockchainContext } from "../../context/BlockchainContext";
import Loading from "../loading/Loading";

const bikeData = [
  {
    img: bike1,
    id: "one",
    desc: "Conquer mountains, breeze through city streets, and blaze your trail on any surface. Ideal for adrenaline junkies and casual riders alike, this bike guarantees an unforgettable biking experience.",
  },
  {
    img: bike2,
    id: "two",
    desc: "Perfectly designed for city dwellers, it offers effortless maneuverability and exceptional comfort. Commute to work, run errands, or explore the town – the City Cruiser's reliable gears make every ride efficient and enjoyable.",
  },
  {
    img: bike3,
    id: "three",
    desc: "Share memorable adventures as you pedal through picturesque landscapes. Equipped with adjustable seats and safety features, the Family Explorer ensures a secure and comfortable journey for both kids and adults.",
  },
];

const Dashboard = () => {
  const { renterExists, currentAccount } = getBlockchainContext();

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="justify-self-center w-[40rem]">
          {renterExists == null && currentAccount ? (
            <Loading />
          ) : renterExists ? (
            <Stats />
          ) : (
            <AddRenterForm />
          )}
        </div>
      </div>
      <div className="bikes flex mb-32">
        {renterExists &&
          bikeData.map((bike, i) => <Bike key={i} bike={bike} />)}
      </div>
    </div>
  );
};

export default Dashboard;
