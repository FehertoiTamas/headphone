import React from "react";
import Headphone from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import Headphone4 from "../../assets/headphone4.png";

const headphoneData = [
  {
    id: 1,
    image: Headphone,
    title: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, recusandae.",
    price: "$100",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
];

const Hero = () => {
  return (
    <>
      <section className="bg-brandDark text-white">
        <div className="container grid grid-cols-1 md:grid-cols-1 min-h-[700px]">
          {/*_____ Headphone info _____*/}

          {/*_____ Hero image _____*/}
          {/*_____ WhatsApp Icon _____*/}
        </div>
      </section>
    </>
  );
};

export default Hero;
