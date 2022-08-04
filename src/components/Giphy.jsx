import React, { useEffect, useState } from "react";
import axios from "axios";
import Gif from "./Gif";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

const Giphy = () => {
  const [resultgif, setResultGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(`https://api.giphy.com/v1/gifs/trending`, {
          params: {
            api_key: process.env.REACT_APP_GIPHY_KEY,
          },
        });
        setResultGif(result.data.data);
      } catch (error) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderGifs = () => {
    if (isLoading) {
      return (
        <div className="animate-pulse text-white h-screen flex items-center justify-center text-3xl">
          Loading...
        </div>
      );
    }
    return resultgif.map((gif) => {
      return (
        <div key={gif.id} className="px-2 py-1" data-testid="result-List">
          <Link to={`/gifInfo/${gif.id}`}>
            <Gif image={gif.images.fixed_height.url} />
          </Link>
        </div>
      );
    });
  };

  const renderError = () => {
    if (isError) {
      return (
        <div className="text-white  flex items-center justify-center text-3xl">
          Unable to get gifs, please try again.
        </div>
      );
    }
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    setIsError(false);
    setIsLoading(true);
    event.preventDefault();
    try {
      const result = await axios(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_KEY,
          q: search,
        },
      });
      setResultGif(result.data.data);
    } catch (error) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }
    setIsLoading(false);
  };
  return (
    <div className="p-2">
      <form className="w-full flex justify-center py-5">
        <input
        data-testid="search-input"
          onChange={handleChange}
          type="text"
          placeholder="search"
          className="py-1 rounded-md px-3 focus:outline-none text-black w-[25%]"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="ml-2 bg-red-500 py-2 px-3 rounded-md text-white"
        >
          GO
        </button>
      </form>
      {renderError()}
      <div className="flex flex-wrap w-[80%] justify-center mx-auto">
        {renderGifs()}
      </div>
    </div>
  );
};

export default Giphy;
