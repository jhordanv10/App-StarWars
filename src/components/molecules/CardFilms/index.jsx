import './CardFilms.scss'
import Characters from '../../atoms/Characters'

export default function CardFilms({title, characters }) {

    return (
        <div className='card_films'>
            <p className='card_films-title'>{title}</p>
            <p className='card_films-charactersLength'> Characters for film:{characters.length}</p>

            {/* <p className='card_films-charactersLength'> Director:{director}</p>
            <p className='card_films-charactersLength'> Producer:{producer}</p> */}
            {characters.map(character => {
                return (
                    <Characters
                        key={character}
                        url={character}
                    />
                )
            })}
        </div>

    )
}
