import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsVolumeMuteFill, BsVolumeUpFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import sampleSound from "../assets/sample.mp3";
import useSound from "use-sound";

const PlayerContainer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(sampleSound);
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  });
  const [seconds, setSeconds] = useState(0);
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
  const setVolume = () => {
    if (isMuted) {
      sound.volume(1);
      setIsMuted(false);
    } else {
      sound.volume(0);
      setIsMuted(true);
    }
  };
  useEffect(() => {
    if (
      !(endTime.min === 0 && endTime.sec === 0) &&
      currTime.min === endTime.min &&
      currTime.sec === endTime.sec
    ) {
      console.log("hello");
      setPlayPause();
      // setCurrTime({ min: 0, sec: 0 });
    }
  }, [currTime]);
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
  }, [duration]);
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
        if (min === endTime.min && sec === endTime.sec) {
          setTimeout(() => {
            setIsPlaying(false);
          }, 1000);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sound]);

  return (
    <>
      <div
        className="rounded-xl "
        style={{
          background:
            "url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        {/* main div started */}
        <div className=" backdrop-blur-sm">
          <p
            className={`text-xl p-4 invert ${
              window.innerWidth < 427 ? "text-center" : ""
            }`}
          >
            Now Playing...
          </p>
          <img
            className="rounded-md w-full md:w-1/2 px-4 py-4 "
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="image"
          />
          <p className="text-2xl p-4 text-center invert">Song Name</p>
        </div>
        {/* first div ended */}
        {/* <div className="flex flex-col backdrop-blur-sm"> */}
        <div className="flex justify-between px-2 backdrop-blur-sm">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {endTime.min}:{endTime.sec}
          </p>
        </div>
        <input
          className="accent-[#27ae60] w-full"
          type="range"
          min={"0"}
          max={duration == null ? 0 : Math.floor(duration / 1000)}
          value={seconds}
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
        {/* </div> */}
        {/* second div ended  */}
      </div>

      <div className="flex justify-evenly p-4 border border-white">
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
          {isMuted ? (
            <button
              className="hover:text-green-500"
              name="muted"
              onClick={() => setVolume()}
            >
              <BsVolumeMuteFill />
            </button>
          ) : (
            <button
              className="hover:text-green-500"
              name="unmuted"
              onClick={() => setVolume()}
            >
              <BsVolumeUpFill />
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
