import React from "react";

const ReportForm = () => {
  return (
    <>
      <div id="container" className="flex">
        <div id="map" className="w-[70%]">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.432904761523!2d-122.01146477396668!3d37.3346490567883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1682441994795!5m2!1sen!2sin"
            width="100%"
            height="620"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>
        <div id="side-container" className="w-[30%]" style={{ fontFamily: "El Messiri" }}>
            <div id="form-box" className="bg-white border my-2 p-2 rounded-lg shadow-lg  mx-1">
              <h1 className="text-3xl text-red-600">Report an Accident :</h1>
              
              {/* io-1 */}
              <div id="io1">
                <p className="text-sm">Vehicle type :</p>
                <input className="border h-8 rounded-md w-[90%] p-1" type="text" />
              </div>

              {/* io-2 */}
              <div id="io2" className="flex">
                <div id="left">
                  <p className="text-sm">No. of Casualties :</p>
                  <input className="border h-8 rounded-md w-[90%] p-1" type="number" />
                </div>
                <div id="right">
                  <p className="text-sm">No. of Injuries :</p>
                  <input className="border h-8 rounded-md w-[80%] p-1" type="number" />
                </div>
              </div>

              {/* io-3 */}
              <div id="txtarea">
                <p>Cause of Accident :</p>
                <textarea name="" id="" cols="30" rows="4" className="w-[90%] border rounded-md p-1"></textarea>
              </div>

              {/* io-4 */}
              <div id="location-of-accident">
                <p>Location of Accident :</p>
                <input className="border h-8 rounded-md w-[90%] p-1" type="text" />
              </div>

              {/* io-5 checkbox */}
              <p>On road property ?</p>
              <div id="selection" className="flex">
                <div id="rd-1">
                  <input className="mx-2" type="radio" id="true" name="age" value="30"></input>
                  <label className="" htmlFor="true">true</label>
                </div>

                <div id="rd-2">
                  <input className="mx-2" type="radio" id="false" name="age" value="30"></input>
                  <label className="" htmlFor="false">false</label>
                </div>

                <div id="rd-3">
                  <input className="mx-2" type="radio" id="custom" name="age" value="30"></input>
                  <label className="" htmlFor="custom">custom</label>
                </div>
              </div>

              {/* io-6 photo proof */}
              <p>Upload image proof of accident :</p>
              <div id="img-upload" className="flex">
                <input type="file" className="w-[68%] border rounded-md px-3 py-1"/>
                <button className="border px-3 mx-1 rounded-md">Upload</button>
              </div>
            </div>

            <div id="helpline" className="p-2 border mx-1 my-4 bg-white rounded-md shadow-lg ">
              <p className="text-red-600 underline underline-offset-2">Emergency Helpline :</p> <ul>
                <li>- Police : 100</li>
                <li>- Fire Department : 101</li>
                <li>- Ambulance : 102</li>
              </ul>

            </div>
        </div>
      </div>
    </>
  );
};

export default ReportForm;
