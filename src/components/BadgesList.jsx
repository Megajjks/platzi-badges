import React from "react";
import {Link} from "react-router-dom"; 
import "../pages/style/Badges.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Gravatar from '../components/Gravatar';
class BadgeList extends React.Component {
  render() {

    if(this.props.badges.length === 0){
      return(
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="Badges__CardItem my-3">
              <div className="card-body col-12 d-flex">
                <Gravatar className="rounded-circle w-25 h-25 col-md-4" email={badge.email} alt="avatar"/>
                <div className="col-md-8 d-flex flex-column align-items-center">
                    <h3 className="font-weight-bold">{badge.firstName} {badge.lastName}</h3>
                    <h5>{badge.jobTitle}</h5>
                    <h5 className="Badges__text font-weight-bold">@ {badge.twitter} <FontAwesomeIcon icon={faTwitter} color="#008abe" /></h5>
                </div>
              </div>
              <p>
                
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
