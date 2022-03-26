import './Loading.scss'
import imgLoading from '../../../assets/StarWars.png'

function Loading() {
    return (
        <div className="loading">
            <figure className='loading-figure'>
                <img className="loading-figure-img" src={imgLoading} alt="loading" />
            </figure>
            <div className="loading-spinner"> </div>
        </div>
    )
}

export default Loading;