const baseUrl = 'https://www.swapi.dev/api/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  res.json()
}