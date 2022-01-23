import arrow from "./images/Arrow.svg";
import ticket from "./images/Ticket.svg";
function Card(props){
  return(
    <div className="card">
      <img src={props.src} alt="profile-img"/>
      <label className="music-label">{props.label}</label>
      <p className="artist-name">{props.artist}</p>
      <button className="card-link">More Info <img className="arrow" src={arrow} alt="arrow"/></button>
      <hr/>
      <img className="ticket" src={ticket} alt="ticket"/>
    </div>
  );
}

const ReviewCard = (props)=>{
  return(
    <>
      <div className="review-card">
      <div className="review-details">
      <img className="profile-img" src={props.src} alt="profile"/>
      <p className="profile-name">{props.profileName}</p>
      <p className="location"><img src={props.flagImg} alt="profile"/>{props.location}</p>
    <p className="review">{props.review}</p>
      </div>
    </div>
    </>
  );

}



export default Card;
export {ReviewCard};
