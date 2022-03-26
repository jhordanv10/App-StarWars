import { useEffect, useState } from 'react'
import './Characters.scss';
import Modal from '../../molecules/Modal/Modal';

export default function Characters({ url }) {

    const idCharacter = url.split('/').splice(-2, 1)

    // console.log('Number Character', idCharacter);

    const handleClick = (e) => {
        const id = e.target.value
        // console.log(id);
        
        return (
            <Modal
                id={ id }
            >
            </Modal>
        )
    }
    
    return (
        <ul className="character">
            <li className='character-list'>
                <button value={idCharacter} type='button' onClick={handleClick} className="character-list-button"> Character  {idCharacter}</button><br></br>
            </li>
        </ul>
    )
}