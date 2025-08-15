import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FEFCF6] py-20">
      <h1 className="text-center text-black uppercase inter">Design Vision</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-start flex-col">
          <div className="flex items-center gap-2">
            <p>+</p>
            <h1 className="mar">15</h1>
          </div>
          <p className="inter">Years Of Experience</p>
        </div>

        <h1 className="mar">Modern</h1>

        <div className="flex items-end flex-col">
          <div className="flex items-center gap-2">
            <h1 className="mar">98</h1>
            <p>+</p>
          </div>
          <p className="inter">Successfull Projects</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
