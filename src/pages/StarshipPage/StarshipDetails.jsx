import { useState, useEffect } from "react";
import { getDetails } from '../../services/sw-api'
import { Link, useLocation } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      console.log(starshipData);
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])


  return (
    <>
      <nav><h1>Starship Details</h1></nav>
      <div class="card-detail">
        <div class="starship-card">
          <h3>{starshipDetails.name}</h3>
          <h3>{starshipDetails.model}</h3>
          <Link 
            to='/'><span>Return To All Starships</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default StarshipDetails