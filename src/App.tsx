import { useState } from "react";
import PlayerContainer from "./components/PlayerContainer";
import SearchForm from "./components/SearchForm";

function App() {
  const [tracks, setTracks] = useState([]);
  return (
    <div
      className=" w-screen h-screen p-10"
      style={{
        background:
          "-webkit-linear-gradient(to right, #000428, #004e92)" /* Chrome 10-25, Safari 5.1-6 */,
        backgroundImage: "linear-gradient(to right, #000428, #004e92)",
      }}
    >
      <div className="flex gap-x-2 p-2">
        <PlayerContainer />
        <SearchForm tracks={tracks} setTracks={setTracks} />
      </div>
    </div>
  );
}

export default App;
