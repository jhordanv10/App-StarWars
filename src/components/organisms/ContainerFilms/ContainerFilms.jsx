import { useState, useEffect } from 'react';
import './ContainerFilms.scss';
import CardFilms from '../../molecules/CardFilms';

const ContainerFilms = () => {

  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/films/?format=json')
      .then(response => response.json())
      .then(json => {
        setFilms(json.results)
      })
  }, [])

  return (
    <section className='container_films'>
      {films.map(film => {
        return (
          <CardFilms
            key={film.episode_id}
            id={film.episode_id}
            title={film.title}
            characters={film.characters}
          />
        )
      }
      )}
    </section >

  );
};

export default ContainerFilms;
