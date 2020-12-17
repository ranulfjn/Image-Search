import React, { useState } from "react";
export default function SearchPhotos() {

  const [client,setClient]=useState("");
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);


  const searchPhotos = (e) => {
    e.preventDefault();

    const url="https://api.unsplash.com/search/photos?query="+query+"&per_page=20&client_id="+client;
    fetch(url)
    .then((res) => res.json())
    .then((result) => {
     
      setPhotos(result);
      console.log(result);
    });

  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {[photos].map((photo,index)=>{
          // console.log(photo);
          // console.log(photo.results[index].urls.full);
          <div className="card">
          <img
          className="card--image"
          alt=""
          src={photo.results[index].urls.full}
        ></img>
          </div>
          })}
      </div>
    </>
  );
}
