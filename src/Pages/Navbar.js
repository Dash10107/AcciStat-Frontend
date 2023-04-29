import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
// icons
import { FaChartPie, FaCarCrash, FaFileImport } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const [formColor, setFormColor] = useState(false);
  const [chartColor, setChartColor] = useState(false);
  const [listColor, setListColor] = useState(false);

  // Home navigation
  const navigateBack = () => {
    navigate('/');

    // Reset states
    setFormColor(false);
    setChartColor(false);
    setListColor(false);
  }

  // Chart navigation
  const charts = () => {
    navigate("/chart");

    // color toggler
    setFormColor(false);
    setChartColor(true);
    setListColor(false);
  };

  // list-all navigation
  const listAll = () => {
    navigate("/listall");

    // color toggler
    setFormColor(false);
    setChartColor(false);
    setListColor(true);
  };

  // Report form
  const report = () => {
    navigate("/form");

    // color toggler
    setFormColor(true);
    setChartColor(false);
    setListColor(false);
  };

  return (
    <div style={{fontFamily:'El Messiri'}} className="z-10">
      {/* style={{fontFamily:'El Messiri'}} */}
      {/* Navbar */}
      <div id="navbar" className="flex bg-[#ECECEC] p-2 drop-shadow-lg fixed w-full">
        <div id="logo">
          <img src="accilogo.png" alt="" />
        </div>

        <div
          id="name"
          style={{ fontFamily: "El Messiri" }}
          className="text-4xl mx-10 py-3 hover:cursor-pointer"
          onClick={() => navigateBack()}
        >
          <p>
            Accident<span className="text-[#D62828]">Stats</span>
          </p>
        </div>

        <div className="flex-1"></div>

        <div id="buttons" className="flex flex-1 py-3 float-right text-sm">
          <button
            className={chartColor ? "flex transition ease-in-out duration-500 text-white bg-[#003049] px-3 py-2 mx-2 rounded-md" : "flex bg-white px-3 py-2 mx-2 rounded-md"}
            onClick={() => charts()}
          >
            View Chart
            <div className="py-1 px-2">
              <FaChartPie />
            </div>
          </button>
          <button
            className={listColor ? "flex transition ease-in-out duration-500 text-white bg-[#003049] px-3 py-2 mx-2 rounded-md" : "flex bg-white px-3 py-2 mx-2 rounded-md"}
            onClick={() => listAll()}
          >
            List All Accidents
            <div className="py-1 px-2 text-lg">
              <FaCarCrash />
            </div>
          </button>
          <button
            className={formColor ? "flex transition ease-in-out duration-500 text-white bg-[#003049] px-3 py-2 mx-2 rounded-full" : "flex bg-white px-3 py-2 mx-2 rounded-full"}
            onClick={() => report()}
           
          >
            Report an accident
            <div className="py-1 px-2">
              <FaFileImport />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
