import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  return (
    <div className="flex flex-col items-center lg:w-1/3 gap-4">
      <div>
        <button className="bg-green-500 p-2 rounded-md">
          Sign-in to Spotify
        </button>
      </div>
      <form className="flex flex-col items-center gap-4" action="">
        <input
          className="rounded-sm outline-none p-2"
          type="text"
          name=""
          id="search"
          placeholder="Search Song Here...."
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-sm">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
