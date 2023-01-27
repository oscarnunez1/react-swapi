import { useState, useEffect } from "react";
import { getDetails } from '../../services/sw-api'
import { useLocation } from "react-router-dom";

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
      <h1>Starship Page</h1>
      <h2>{starshipDetails.name}</h2>
      <h2>{starshipDetails.model}</h2>
    </>
  )
}

export default StarshipDetails