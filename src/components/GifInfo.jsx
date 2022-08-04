import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const GifInfo = () => {
  const [gifItem, SetGifItem] = useState({});
  console.log("you", gifItem);
  const navigate = useNavigate();
  const { id } = useParams();
  const url = `https://api.giphy.com/v1/gifs/${id}`;
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(url, {
          params: {
            api_key: process.env.REACT_APP_GIPHY_KEY,
            gif_id: id,
          },
        });
        SetGifItem(res.data.data);
        console.log(res);
      } catch (err) {
        console.error("error is", err);
      }
    };
    fetch();
  }, []);
  return (
    <div className="text-white overflow-hidden h-screen">
      <div className="flex justify-between px-5 pt-3">
        <h1 className="text-center text-2xl">Gif Details</h1>
        <button
          className="bg-red-500 py-2 px-3 rounded-md text-white text-lg"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="flex-wrap flex w-full justify-center items-center space-x-10 space-y-5">
          <img src={gifItem.images?.fixed_height.url} alt="" />
          <div className="text-lg">
            <h1>
              Title: <span className="text-red-500">{gifItem?.title}</span>
            </h1>
            {gifItem?.username && (
              <h1>
                Username:{" "}
                <span className="text-red-500">{gifItem?.username}</span>
              </h1>
            )}
            {gifItem?.rating && (
              <h1>
                Gif Rating:{" "}
                <span className="text-red-500">{gifItem?.rating}</span>
              </h1>
            )}
            {gifItem?.user?.description && (
              <h1>
                Description:{" "}
                <span className="text-red-500">
                  {gifItem?.user?.description}
                </span>
              </h1>
            )}
            {gifItem?.user?.website_url && (
              <h1>
                Website:{" "}
                <span className="text-red-500">{gifItem?.username}</span>
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifInfo;
