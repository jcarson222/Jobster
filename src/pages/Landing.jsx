import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      {/* nav */}
      <nav>
        <Logo />
      </nav>

      {/* login/register */}
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nam veritatis saepe, impedit et dicta officiis, esse dolor quis
            accusamus modi, fugit cum optio numquam nesciunt magnam? Modi,
            dolorem quisquam?
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
