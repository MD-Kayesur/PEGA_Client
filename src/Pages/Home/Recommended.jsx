import React from "react";
import img1 from "../../images/Recommended/anah-platform-1.png";
import img2 from "../../images/Recommended/pega-forrester-crm-2025-card-image-2.png";
import img3 from "../../images/Recommended/pw25-webcard-post-3.png";
import { Link } from "react-router-dom";

const Recommended = () => {
  const recommendedData = [
    {
      img: img1,
      event: "Customer Success Story",
      link: "ANAH develops new housing grant application platform, increasing applications processed by 9X",
      discription:
        "Learn how ANAH, Pega, and Capgemini put France on track to achieve environmental housing",
    },
    {
      img: img2,
      event: "Analyst Report",
      link: "Pega recognized as a Leader by Forrester in CRM software",
      discription:
        "Pega was recently named a Leader in the Forrester Wave™: Customer Relationship Management Software, Q1 2025.",
    },
    {
      img: img3,
      event: "PegaWorld | Flagship event",
      link: "Watch PegaWorld 2025 replays",
      discription:
        "Catch up on all the highlights and insights from this year’s event, including the latest in Infinity 25, agentic workflow solutions",
    },
  ];

  return (
    <div className="w-11/12 pb-20 mx-auto">
      <h1 className="text-3xl font-bold py-10 text-center">
        Recommended for you
      </h1>
      <div className="flex gap-7 items-start flex-wrap justify-center">
        {recommendedData.map((data, index) => (
          <Link to="/" key={index} className="w-[320px]">
            <div className="card hover:shadow-2xl bg-base-100 h-[450px] shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <figure className="h-[180px] md:h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={data.img}
                  alt="Image"
                />
              </figure>

              <div className="card-body">
                <p className="text-sm text-gray-500">{data.event}</p>
                <h2 className="card-title hover:underline text-lg font-semibold leading-tight">
                  {data.link}
                </h2>
                <p className="text-sm text-gray-700 mt-2">{data.discription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
