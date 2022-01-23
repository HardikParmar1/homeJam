import './App.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import card1Img from "./images/card1.png";
import card2Img from "./images/card2.png";
import card3Img from "./images/card3.png";
import card4Img from "./images/card4.png";
import logo from "./images/logo.png";
import basket from "./images/Basket.svg";
import search from "./images/search.png";
import like from "./images/Like.png";
import calender from "./images/Calendar.png";
import profile3 from "./images/profile3.png";
import profile2 from "./images/profile2.png";
import profile1 from "./images/profile1.png";
import Card,{ReviewCard} from "./card";
import us from "./images/USA.svg";
import it from "./images/IT.svg";
import Circle from "./label-circle";
import "./card.css";
function App() {
  return (
    <div className="container">
    <div className="header">
      <nav>
      <div className="nav-logo">
            <img src={logo} alt="logo"/>
      </div>
      <ul className="nav-item">
      <li className="nav-link"> <img className="search-icon" src={search} alt="search-icon"/>Search</li>
      <li className="nav-link">Help</li>
      <li className="nav-link">Account <img className="basket-icon" src={basket} alt="basket-icon"/></li>
      </ul>
      </nav>
      <h1>Cari Cari</h1>
      <p className="header-text">Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>

      <div className="labels">
          <Circle
            icon={like}
            count="0"
            label="Label"
          />
          <div className="active" />
          <Circle
            icon={calender}
            count="0"
            label="Label"
          />
          <Circle
            icon={calender}
            count="0"
            label="Label"
          />
          <Circle
            icon={calender}
            count="0"
            label="Label"
          />
      </div>

    </div>

       <section>
       <div className="show-headingbar">
       <p className="section-title">Upcoming Shows</p>
       <div className="line"></div>
       <a href="/" className="show-link">View all</a>
       </div>

       <div className="shows">
       <Card
         src={card1Img}
         label="Folk"
         artist="Benny Dayal"
       />

       <Card
         src={card2Img}
         label="Bollywood"
         artist="Vijay Yesudas"
       />
       <Card
         src={card3Img}
         label="Folk"
         artist="Andrea Jeremiah"
       />
       <Card
         src={card4Img}
         label="Folk"
         artist="Shilpa Rao"
       />
       </div>
    </section>

    <section>
      <div className="headingbar">
      <p className="section-title">Reviews</p>
      <div className="line2"></div>
      <p className='review-link'>1/<span>12</span></p>
      <p className="review-link"><ArrowBackIcon/></p>
      <p className="review-link"><ArrowForwardIcon/></p>
      </div>

    <div className="review-container">
  <ReviewCard
    src={profile1}
    profileName="Hellen Jummy"
    flagImg={us}
    location="Palo Alto, CA"
    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
  />
  <ReviewCard
    src={profile2}
    profileName="Isaac Oluwatemilorun"
    flagImg={it}
    location="Palo Alto, CA"
    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
  />
  <ReviewCard
    src={profile3}
    profileName="Helly Jummy"
    flagImg={it}
    location="Palo Alto, CA"
    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
  />

    </div>

    </section>
    </div>
  );
}

export default App;
