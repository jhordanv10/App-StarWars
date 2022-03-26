import { useState, useEffect } from 'react';
import './ContainerVehicles.scss';
import CardVehicles from '../../molecules/CardVehicles/CardVehicles';

const ContainerVehicles = () => {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/vehicles/?format=json')
            .then(response => response.json())
            .then(json => {
                setVehicles(json.results)
                console.log(json.results)
            })
    }, [])

    return (
        <section className='container_vehicles'>
            {vehicles.map(vehicle =>
                <CardVehicles
                    name={vehicle.name}
                    crew={vehicle.crew}
                    vehicle_class={vehicle.vehicle_class}
                />)}
        </section >
    );
};

export default ContainerVehicles;