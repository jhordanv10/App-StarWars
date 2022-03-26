import { useState, useEffect } from 'react';
import './ContainerStarShips.scss';
import CardStarShips from '../../molecules/CardStarShips/CardStarShips';

const ContainerStarShips = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/starships/?format=json')
            .then(response => response.json())
            .then(json => {
                setStarships(json.results)
                console.log(json.results)
            })
    }, [])

    return (
        <section className='container_starships'>
            {starships.map(ships =>
                <CardStarShips
                    name={ships.name}
                    crew={ships.crew}
                    manufacturer={ships.manufacturer}
                />)}
        </section >
    );
};

export default ContainerStarShips;


