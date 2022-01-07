/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css';
import './components/FeatureMovie';
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const loader = require('./assets/loading.gif')
  
  useEffect(() => {
    const loadAll = async () => {
      /* Pegando a listagem total */
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Retornando o filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
        if (window.scrollY > 50) 
        {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <hr></hr>
        Feito por Guilherme Soares E-mail: guilhermefbachiega@gmail.com
        <br></br>
        Direitos de imagem para Netflix
        <br></br>
        Dados extraídos via API themoviedb.org
      </footer>

      {movieList.length <= 0 &&
          
      <div className="loading">
        <img src={loader} alt="Carregando..."/>
      </div>
          }
    </div>
  )
  
}