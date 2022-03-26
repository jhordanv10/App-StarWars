import { useEffect, useState } from 'react'
import './Characters.scss';
import Modal from '../../molecules/Modal/Modal';

export default function Characters({ url, handleClick }) {

    
    const idCharacter = url.split('/').splice(-2, 1)
    
    
    return (
            <li className='character-list'>
                <button value={idCharacter} type='button' onClick={handleClick} className="character-list-button"> Character  {idCharacter}</button><br></br>
            </li>
    )
}