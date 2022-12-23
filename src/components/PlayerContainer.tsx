import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import sampleSound from "../assets/sample.mp3";
import useSound from "use-sound";

const PlayerContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(sampleSound);
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  });
  const [seconds, setSeconds] = useState();
  const [endTime, setEndTime] = useState({
    min: 0,
    sec: 0,
  });
  const setPlayPause = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    let durr = duration === null ? 0 : duration;
    const sec = durr / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
      min: min,
      sec: secRemain,
    };
    setEndTime(time);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
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
            className="rounded-md  w-1/2 px-4 py-4 "
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="image"
          />
          <p className="text-2xl p-4 text-center ">Song Name</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between px-2">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {endTime.min}:{endTime.sec}
            </p>
          </div>
          <input
            className="text-green-500"
            type="range"
            min={"0"}
            max={duration == null ? 0 : duration / 1000}
            defaultValue="0"
            value={seconds}
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center p-4 border border-white">
        <div className="text-3xl flex justify-between w-2/3 text-white">
          <button className="hover:text-green-500" name="prev">
            <BiSkipPrevious />
          </button>
          {isPlaying ? (
            <button
              className="hover:text-green-500"
              name="pause"
              onClick={() => setPlayPause()}
            >
              <AiFillPauseCircle />
            </button>
          ) : (
            <button
              className="hover:text-green-500"
              name="play"
              onClick={() => setPlayPause()}
            >
              <AiFillPlayCircle />
            </button>
          )}

          <button className="hover:text-green-500" name="skip">
            <BiSkipNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerContainer;
