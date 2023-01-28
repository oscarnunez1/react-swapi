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
      <nav><h1>Star Wars Starships</h1></nav>
      {starshipList.length ?
        <>
          <div class="card-container">
            {starshipList.map(starship =>
              <div class="card" key={starship.name}>
                <Link 
                  to='/starship' 
                  state={{starship}}>{starship.name}
                </Link>
              </div>
            )}
          </div>
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