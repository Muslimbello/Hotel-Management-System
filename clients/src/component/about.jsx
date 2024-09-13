import image from "../Images/family-room.png";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
    <div className="About">
      <h2>About</h2>
      <div className="About_box">
        <div className="About_card_1">
          <img src={image} />
        </div>
        <div className="About_card_2">
          <h3>Relax In Our Hotel Resort</h3>
          <div className="About_card2_box">
            <p>
              Step into a world of comfort and tranquility at our hotel resort,
              where relaxation meets luxury. Whether you're looking for a
              peaceful retreat or an exciting vacation, our resort offers
              everything you need to unwind.
            </p>
            <p>
              From breathtaking views and cozy accommodations to world-class
              amenities and personalized service, we cater to your every need.
              Lounge by the pool, indulge in a rejuvenating spa treatment, or
              simply soak in the serene atmosphere of our lush surroundings.
            </p>
            <p>
              At our hotel resort, relaxation isn’t just a promise—it’s a
              lifestyle. Come and experience the ultimate escape, where every
              moment is designed with your comfort in mind.
            </p>
            <img src={image1} />
            <h5>Ilonuba Chukwudi</h5>
            <h4>chukwudi</h4>
            <p>Hotel Maneger</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
