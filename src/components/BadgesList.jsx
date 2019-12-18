import React from "react";
import {Link} from "react-router-dom"; 

import Gravatar from '../components/Gravatar';

import "../pages/style/Badges.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function useSearchBadges(badges){
  //declaramos los hooks
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)
  
  React.useMemo(()=>{ //useMemo guarda lo que sucedio cuando se ejecuta la función y si algun resultado cambie lo vuelve a recalcular
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]); //aquí colocamos los argumentos que si detectan un cambio, la lista se vuelve a calcular, sino pues se mantiene lo que se guardo

  return {query, setQuery, filteredBadges}
}

export default function BadgeList (props) {
  const badges = props.badges;
  
  const {query, setQuery, filteredBadges} = useSearchBadges(badges)

  if(filteredBadges.length === 0){
    return(
      <div>
        <div className="form-group">
          <label className="my-2 text-center font-weight-bold">Filter Badges</label>
          <input 
            type="text" 
            className="form-control"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgeList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input 
          type="text" 
          className="form-control"
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value);
          }}
        />
      </div>
    
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id} className="Badges__CardItem my-3">
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <div className="card-body col-12 d-flex">
                  <Gravatar className="rounded-circle w-25 h-25 col-md-4" email={badge.email} alt="avatar"/>
                  <div className="col-md-8 d-flex flex-column align-items-center">
                      <h3 className="font-weight-bold">{badge.firstName} {badge.lastName}</h3>
                      <h5>{badge.jobTitle}</h5>
                      <h5 className="Badges__text font-weight-bold">@ {badge.twitter} <FontAwesomeIcon icon={faTwitter} color="#008abe" /></h5>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>  
  );
}

