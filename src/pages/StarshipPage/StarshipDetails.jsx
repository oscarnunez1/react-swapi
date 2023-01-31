import { useState, useEffect } from "react";
import { getDetails } from '../../services/sw-api'
import { Link, useLocation } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])


  return (
    <>
      <h1>Starship Details</h1>
      <div class="parent-container">
        <div class="card-details">
          <h3>Name: {starshipDetails.name}</h3>
          <h3>Model: {starshipDetails.model}</h3>
          <Link 
            to='/' className="animated-btn"><button>Return To All Starships</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default StarshipDetails