import { useState, useEffect } from 'react';
import './ContainerFilms.scss';
import CardFilms from '../../molecules/CardFilms';
import Loading from '../../atoms/Loading';
import swal from 'sweetalert';

const ContainerFilms = () => {

  const [selectedId, setSelectedId] = useState()
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)

  const handleClick = (e) => {
    const id = e.target.value
    setSelectedId(id)
  }

  useEffect(() => {
    if (selectedId) {
      fetch(`https://swapi.dev/api/people/${selectedId}/`)
        .then(response => response.json())
        .then(json => {
          return (
            <div className='alert'>
              {swal({
                title: `Name: ${json.name}`,
                text: `Gender: ${json.gender} 
                Height: ${json.height} 
                Mass: ${json.mass}
                Hair Color: ${json.hair_color}
                Skin Color: ${json.skin_color}
                Eyes Colors: ${json.eye_color}

                `,
              })}
            </div>
          )
        })
    }

  }, [selectedId])

  console.log('Selectedid ', selectedId);

  useEffect(() => {
    setLoading(true)
    fetch('https://swapi.dev/api/films/?format=json')
      .then(response => response.json())
      .then(json => {
        setFilms(json.results)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <section className='container_films'>
          {films.map(film => {
            return (
              <CardFilms
                key={film.episode_id}
                id={film.episode_id}
                title={film.title}
                characters={film.characters}
                handleClick={handleClick}
              />
            )
          }
          )}
        </section >
      </>
    );
  }
};

export default ContainerFilms;
