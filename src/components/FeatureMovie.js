/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./FeatureMovie.css";

function convertAverageRate(vote) {
  let nota = Math.floor(vote * 10);
  return nota;
}

export default ({ item }) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
  }
  
  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {convertAverageRate(item.vote_average)}% relevante
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured-buttons">
            <a href={`/watch/${item.id}`} className="featured--watchButton">
              &#9654; Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featured--myListButton">
              + Minha Lista
            </a>
          </div>

          <div className="featured--genres">
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
