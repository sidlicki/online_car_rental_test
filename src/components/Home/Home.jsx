import { NavLink } from 'react-router-dom';
import { HomeDiv } from './Home.styled';

export const HomePageComponent = () => {
  return (
    <HomeDiv>
      <h1 className="title">Online Car rental</h1>
      <h2 className="homeSubtitle">Welcome to our car rental platform!</h2>
      <h2 className="homeSubtitle">
        Explore <NavLink to="/cars">our diverse catalog</NavLink> of vehicles,
        each offering unique features and configurations. Filter by brand,
        hourly rental price, or mileage to find the perfect car for your needs.
      </h2>
      <h2 className="homeSubtitle">
        Keep track of{' '}
        <NavLink to="/favorites">
          your favorite listings with our dedicated page
        </NavLink>
        , ensuring a seamless rental experience from start to finish. Start your
        journey with us today!
      </h2>
    </HomeDiv>
  );
};
