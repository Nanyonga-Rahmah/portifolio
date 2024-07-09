import React from "react";
const levels = [
  {
    name: "UnderGraduate",
    icon: "👨‍🎓",
    institiution: "Makerere University",
    description:
      "Currently pursuing my Bachelor's degree in Software Engineering from Makerere University in Kampala, Uganda.",
    date: "2022 - 2026",
  },
  {
    name: "Advanced Level",
    icon: "👨‍🎓",
    institiution: "Nansana Senior Secondary School",
    description:
      "Knolwedge is Light",
    date: "2019 - 2021",
  },
  {
    name: "Ordinary Level",
    icon: "👨‍🎓",
    institiution: "Nansana Senior Secondary School",
    description:
     "Knolwedge is Light",
    date: "2018",
  },
  {
    name: "Primary Level",
    icon: "👨‍🎓",
    institiution: "Sts.Peter and Paul School",
    description:
     "Knolwedge is Light",
    date: " 2014",
  },
];

function Education() {
  return (
    <div className="">
      {levels.map((level, index) => (
        <div
          className="flex flex-col border-b w-full px-20 pt-5 pb-5 "
          key={index}
        >
          <div className="text-sm font-semibold mb-2 text-gray-900">
            {level.name}
          </div>
          <div className="flex gap-3">
            <div>
              <div className="text-xl font-bold text-gray-900 border rounded-full flex justify-center w-[40px] h-[40px] items-center">
                {level.icon}
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <div className="flex gap-2">
                  <div className="text-sm font-bold text-black ">
                    {level.institiution}
                  </div>
                  <div className="text-sm text-gray-500">{level.date}</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">{level.description}</div>
              </div>
            </div>
          </div>

          {/* 
                <div className="flex  items-center">

                    
                    
                   
                    
                </div> */}
        </div>
      ))}
    </div>
  );
}

export default Education;
