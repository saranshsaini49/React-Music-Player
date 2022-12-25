import PlayerContainer from "./components/PlayerContainer";

function App() {
  return (
    <div
      className=" w-screen h-screen p-10"
      style={{
        background:
          "-webkit-linear-gradient(to right, #000428, #004e92)" /* Chrome 10-25, Safari 5.1-6 */,
        backgroundImage: "linear-gradient(to right, #000428, #004e92)",
      }}
    >
      <div className="w-full lg:w-4/6 p-2">
        <PlayerContainer />
      </div>
    </div>
  );
}

export default App;
