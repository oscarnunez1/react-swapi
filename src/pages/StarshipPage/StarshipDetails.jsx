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
      <div class="starship-card">
        <h1>Starship Page</h1>
        <h3>{starshipDetails.name}</h3>
        <h3>{starshipDetails.model}</h3>
        <Link 
          to='/'>Return To All Starships
        </Link>
      </div>
    </>
  )
}

export default StarshipDetails