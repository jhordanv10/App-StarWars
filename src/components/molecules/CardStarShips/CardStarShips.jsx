import './CardStarShips.scss'

export default function CardStarShips({ name, crew, manufacturer}) {

    return (
        <div className='card_starships' key={name}>
            <h2 className='card_starships-name'>{ name }</h2>
            <p className='card_starships-crew'> <strong>Crew:</strong> {crew}</p>
            <p className='card_starships-manufacturer'> <strong>Manufacturer:</strong> {manufacturer}</p>
        </div>
    )
}