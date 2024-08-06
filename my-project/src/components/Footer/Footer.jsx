import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/*_____ company details section _____*/}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="tex-sm max-w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur id optio vel nesciunt tenetur ducimus.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone /> +1 (123) 456-7890
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation /> Noida, Uttar Pradesh
                </p>
              </div>
            </div>
            {/*_____ Footer Links section _____*/}
            <div className="space-Y-6">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*_____ Social Links section _____*/}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Follow</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={Cards} alt="" className="w-[80%]" />
              </div>
            </div>
            {/*_____ copyright section _____*/}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
