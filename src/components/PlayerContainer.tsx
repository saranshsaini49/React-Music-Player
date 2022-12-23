import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

const PlayerContainer = () => {
  return (
    <>
      <div
        className="rounded-sm text-black "
        style={{
          background:
            "url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="backdrop-blur-sm">
          <p className="text-xl p-4">Now Playing...</p>
          <img
            className="rounded-md overflow-hidden w-1/2 px-4 py-4 "
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="image"
          />
          <p className="text-2xl p-4 text-center ">Song Name</p>
        </div>
      </div>
      <div className="flex justify-center p-4 border border-white border-t-0">
        <div className="text-3xl flex justify-between w-2/3 text-white">
          <button className="hover:text-green-500">
            <BiSkipPrevious />
          </button>
          <button className="hover:text-green-500">
            <AiFillPlayCircle />
          </button>

          <button className="hover:text-green-500">
            <AiFillPauseCircle />
          </button>
          <button className="hover:text-green-500">
            <BiSkipNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerContainer;
