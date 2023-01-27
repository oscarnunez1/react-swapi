import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {getDetails } from '../../services/sw-api'

const StarshipPage = () => {
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
    </>
  )
}

export default StarshipPage