const axios = require("axios")

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getProjects = async () => {
  let res = await axios.get(
    "https://alexabush.github.io/portfolio-data/json/portfolio-data.json"
  )
  return res.data
}
const getPokemonData = async () => {
  const { data: pokemon } = await get(`/pokemon/squirtle`)
  return { ...pokemon }
}

exports.createPages = async ({ actions: { createPage } }) => {
  const pokemon = await getPokemonData()
  const projectsData = await getProjects()
  console.log("projectsData", projectsData)
  createPage({
    path: `/all-pokemon.js`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { pokemon },
  })

  createPage({
    path: `/home`,
    component: require.resolve("./src/templates/home.js"),
    context: { projectsData, string: "hi" },
  })
}
