import advertise from "../../public/Food_collectionbanner.avif";

function Main() {

  return (
    <div className="pt-[90px] ">
      <div className="relative w-[80%] ml-40 mt-10 flex flex-col items-center ">
        <img className="w-[100%]" src={advertise} alt="advertisement" />
        <div className="w-[450px] h-[90px] absolute left-10 top-55 ">
          <p className="text-red-100 text-[35px] font-semibold font-serif     ">
            Order Online Delivery Restaurants Near Me
          </p>
        </div>

        

      </div>
    </div>
  );
}

export default Main;
