import './ContainerHome.scss';
import ImgHome from '../../../assets/Lightsaber.png';

const ContainerHome = () => {
  return (
    <>
      <section className='container_home'>
        <figure className='container_home-figure'>
          <img className='container_home-figure-imgStarW' src={ImgHome}></img>
        </figure>
        <div className='container_home-description'>
          <h2 className='container_home-description-p'>¡Hello to StarWars-App!</h2>
        </div>
      </section>
    </>
  );
};

export default ContainerHome;
