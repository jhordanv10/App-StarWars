import './Characters.scss';

export default function Characters({ url, handleClick }) {

    const idCharacter = url.split('/').splice(-2, 1)

    return (
        <li className='character-list'>
            <button value={idCharacter} type='button' onClick={handleClick} className="character-list-button"> Character  {idCharacter}</button><br></br>
        </li>
    )
}