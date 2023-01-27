import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return (
    <>
      <div><h1>STARS WARS STARSHIPS</h1></div>
      {starshipList.length ?
        <>
          {starshipList.map(starship =>
            <div key={starship.index}>
              <Link to='/starships' state={{starship}}>{starship.name}</Link>
            </div>
          )}
        </>
        :
        <>
          <h3>Loading Starships</h3>
        </>
      }
    </>
  )
}

export default StarshipList