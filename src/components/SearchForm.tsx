import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  const CLIENT_ID = "f6718f16ea50493bb7d6d97db0cdf587";
  const REDIRECT_URI = "http://127.0.0.1:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token: string | null | undefined = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token == undefined ? "" : token);
    }
    if (token) {
      setToken(token);
    }
  }, []);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  return (
    <div className="flex flex-col items-center lg:w-1/3 gap-4 p-2">
      <div>
        {!token ? (
          <a
            className="bg-green-500 p-2 rounded-md"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Sign-in to Spotify
          </a>
        ) : (
          <button
            className="bg-red-500 p-2 rounded-md"
            onClick={() => logout()}
          >
            Log-out Spotify
          </button>
        )}
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
