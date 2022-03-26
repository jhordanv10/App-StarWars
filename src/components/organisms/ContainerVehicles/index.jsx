import { useState, useEffect } from 'react';
import './ContainerVehicles.scss';
import CardVehicles from '../../molecules/CardVehicles';
import Loading from '../../atoms/Loading';

const ContainerVehicles = () => {

    const [vehicles, setVehicles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://swapi.dev/api/vehicles/?format=json')
            .then(response => response.json())
            .then(json => {
                setVehicles(json.results)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <Loading/>
        )
    } else {
        return (
            <section className='container_vehicles'>
                {vehicles.map(vehicle =>
                    <CardVehicles
                        key={vehicle.name}
                        name={vehicle.name}
                        crew={vehicle.crew}
                        vehicle_class={vehicle.vehicle_class}
                    />)}
            </section >
        );
    }
};

export default ContainerVehicles;