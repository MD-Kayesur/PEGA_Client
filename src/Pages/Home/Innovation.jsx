import img1 from "../../images/Innovation_img/Innovation-1.png";
import img2 from "../../images/Innovation_img/Innovation-2.png";

const Innovation = () => {
  return (
    <div>
      <div className="hero  text-white min-h-screen bg-blue-800 ">
        <div className="hero-content flex-col w-11/12 mx-auto lg:flex-row-reverse">
          <img src={img2} className="lg:max-w-lg rounded-lg " />
          <div>
            <img className="lg:w-80" src={img1} alt="" />
            <h1 className="lg:text-7xl text-6xl font-bold">Innovation, on demand</h1>
            <p className="py-6">
              Watch PegaWorld keynotes to see how industry experts are refining
              AI strategies and transforming legacy systems to ensure success
              now and in the future.
            </p>
            <button className="btn shadow-2xl btn-primary text-black rounded-3xl bg-yellow-500 hover:transition-top-6">Watch keynote replays</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
