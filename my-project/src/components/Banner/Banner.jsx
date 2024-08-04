import React from "react";
import Headphone4 from "../../assets/headphone4.png";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 ">
          {/*_____  Banner Image _____*/}
          <div>
            <img src={Headphone4} alt="" className="w-[300px] md:w-[400px]" />
          </div>
          {/*_____  Banner Text Info _____*/}
        </div>
      </section>
    </>
  );
};

export default Banner;
