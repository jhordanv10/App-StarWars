import './CardFilms.scss'
import Characters from '../../atoms/Characters'

export default function CardFilms({ title, characters, handleClick }) {


    return (
        <div className='card_films'>
            <p className='card_films-title'>{title}</p>
            <p className='card_films-charactersLength'> Characters for film:{characters.length}</p>

            <ul className='card_films-ul'>
                {characters.map(character => {
                    return (
                        <Characters
                            key={character}
                            url={character}
                            handleClick={handleClick}
                        />
                    )
                })}
            </ul>
        </div>

    )
}
