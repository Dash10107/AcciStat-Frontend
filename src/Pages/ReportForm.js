import React, { useEffect, useState } from "react";
import axios from "axios";
// toast message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loader, LoaderOptions } from "google-maps";
// or const {Loader} = require('google-maps'); without typescript
import "../App.css";


const ReportForm = () => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [alt, setAlt] = useState("");

  // geolocation
  navigator.geolocation.getCurrentPosition((position) => {

    // Un-necessary sh!t
    // console.log(position.coords.longitude);
    // console.log(position.coords.latitude);
    // console.log(position.coords.altitude);
    setLong(position.coords.longitude);
    setLat(position.coords.latitude);
    setAlt(position.coords.altitude);
  });

  
  const URL = "http://localhost:4000";

  const [acc, setAcc] = useState({
    aTitle: "",
    aType: "",
    aCasual: "",
    aInjure: "",
    aCause: "",
    aLoc: "",
    aDam: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setAcc({ ...acc, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (acc.aTitle === "" || acc.aCasual === "" || acc.aInjure === "" ||   acc.aLoc === "" || acc.aDam === ""){
      toast.error("Please fill all the fields");
    }else{
      submitAccident();
      toast.success("Accident report submitted");
    }
  };
  const submitAccident = () => {
    axios
      .post(URL + "/accidents/add", acc)
      .then((response) => {
        console.log(response);
        setAcc({
          aTitle: "",
          aType: "",
          aCasual: "",
          aInjure: "",
          aCause: "",
          aLoc: "",
          aDam: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="container" className="flex">
        <div id="map" className="w-[70%]">
          {/* <iframe
            src={map}
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.4321004761523!2d-122.01146477396668!3d37.33464100567883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1682441994795!5m2!1sen!2sin"
            // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&center=-33.8569,151.2152&q=NEW+YORK"
            width="100%"
            height="620"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}

          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            // src={map}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=19.051476%20,%2072.8885044+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure acres/hectares on map
            </a>
          </iframe>
        </div>
        <div
          id="side-container"
          className="w-[30%]"
          style={{ fontFamily: "El Messiri" }}
        >
          <div
            id="form-box"
            className="bg-white border border-slate-400 my-2 p-2 px-4 rounded-lg shadow-lg  mx-1"
          >
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Accident title */}
              <h1 className="text-3xl text-red-500 text-center my-2">Report an Accident</h1>

              <div id="title">
                <p>Accident title:</p>
                <input
                  type="text"
                  value={acc.aTitle}
                  name="aTitle"
                  className="border w-[100%] h-7 rounded-md hover:shadow-md hover:shadow-blue-200 transition duration-300"
                  onChange={handleChange}
                />
              </div>

              {/* Vehicle type */}
              <div id="type">
                <p>Vehicle type:</p>
                {/* <input
                  type="text"
                  value={acc.aType}
                  name="aType"
                  className="border w-[100%] h-7 rounded-md hover:shadow-md hover:shadow-blue-200 transition duration-300"
                  onChange={handleChange}
                /> */}
                <select id="causes" name="aType" value={acc.aType} onChange={handleChange} className="border px-4 w-[100%] h-7 rounded-md hover:shadow-md hover:shadow-blue-200 transition duration-300">
                  <option value="Two-wheeler"  >Two-wheeler</option>
                  <option value="Three-wheeler" >Three-wheeler</option>
                  <option value="Four-wheeler" >Four-wheeler</option>
                  <option value="Four-wheeler+">Four-wheeler+</option>
                </select>
              </div>

              {/* no of casualties */}
              {/* no of injuries */}
              <div id="numContainer" className="flex">
                <div id="casualties">
                  <p>No. of casualties:</p>
                  <input
                    type="number"
                    value={acc.aCasual}
                    name="aCasual"
                    className="border w-[90%] h-7 rounded-md py-4 px-2 hover:shadow-md hover:shadow-blue-200 transition duration-300"
                    onChange={handleChange}
                  />
                </div>

                <div id="injuries">
                  <p>No. of injuries</p>
                  <input
                    type="number"
                    value={acc.aInjure}
                    name="aInjure"
                    className="border w-[100%] h-7 rounded-md py-4 px-2 hover:shadow-md hover:shadow-blue-200 transition duration-300"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* cause */}
              <div id="cause">
                <p>Cause of accident:</p>
                {/* <textarea
                  id=""
                  cols="30"
                  rows="5"
                  value={acc.aCause}
                  name="aCause"
                  className="border w-[100%] rounded-md hover:shadow-md hover:shadow-blue-200 transition duration-300"
                  onChange={handleChange}
                ></textarea> */}
                <select id="causes" name="aCause" value={acc.aCause} onChange={handleChange} className="border px-4 w-[100%] h-7 rounded-md hover:shadow-md hover:shadow-blue-200 transition duration-300">
                  <option value="Over Speeding"   >Over Speeding</option>
                  <option value="Drink & Drive"   >Drink & Drive</option>
                  <option value="On-road Property">On-road property</option>
                  <option value="Wrong Lane"    >Wrong Lane</option>
                  <option value="UnderAge Driving" >UnderAge driving</option>
                  <option value="Distraction">Distraction</option>
                </select>
              </div>

              {/* location */}
              <div id="locoation">
                <p>Enter location:</p>
                <input
                  type="text"
                  className="border w-[100%] h-7 rounded-md hover:shadow-md hover:shadow-blue-200 transition duration-300"
                  value={acc.aLoc}
                  name="aLoc"
                  onChange={handleChange}
                />
              </div>

              {/* onroad property - text field */}
              <div id="onroad-damage">
                <p>Any on-road property damage?</p>
                <input
                  type="text"
                  className="border w-[100%] h-7 rounded-md hover:shadow-md hover:shadow-blue-200 transition duration-300"
                  value={acc.aDam}
                  name="aDam"
                  onChange={handleChange}
                />
              </div>

              <br />

              <div id="submit">
                <button className="border py-2 px-7 rounded-lg fill-button bg-slate-300  text-white " type="submit">
                  Submit Form
                </button>

                {/* <button class="relative overflow-hidden bg-transparent text-white border-none px-4 py-2 text-base cursor-pointer group">
                  Click me
                  <div class="absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-full"></div>
                </button> */}

              </div>
            </form>
          </div>

          <div
            id="helpline"
            className="p-2 border mx-1 my-4 bg-white rounded-md shadow-lg "
          >
            <p className="text-red-600 underline underline-offset-2">
              Emergency Helpline :
            </p>{" "}
            <ul>
              <li>- Police : 100</li>
              <li>- Fire Department : 101</li>
              <li>- Ambulance : 102</li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ReportForm;
