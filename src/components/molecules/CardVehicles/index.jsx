import './CardVehicles.scss'

export default function CardVehicles({ name, crew, vehicle_class }) {

    return (
        <div key={name} className='card_vehicles'>
            <p className='card_vehicles-name'>{name}</p>
            <p className='card_vehicles-crew'> <strong>Crew: </strong>{crew}</p>
            <p className='card_vehicles-class'><strong>Class: </strong> {vehicle_class}</p>            
        </div>
    )
}