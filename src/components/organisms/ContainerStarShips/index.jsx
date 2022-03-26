import { useState, useEffect } from 'react';
import './ContainerStarShips.scss';
import CardStarShips from '../../molecules/CardStarShips';
import Loading from '../../atoms/Loading';

const ContainerStarShips = () => {

    const [starships, setStarships] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://swapi.dev/api/starships/?format=json')
            .then(response => response.json())
            .then(json => {
                setStarships(json.results)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <Loading/>
        )
    } else {
        return (
            <section className='container_starships'>
                {starships.map(ships =>
                    <CardStarShips
                        key={ships.name}
                        name={ships.name}
                        crew={ships.crew}
                        manufacturer={ships.manufacturer}
                    />)}
            </section >
        );
    }
};

export default ContainerStarShips;


