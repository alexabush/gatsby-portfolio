import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { pokemon } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>Choose a Pokémon!</h1>
    <ul style={{ padding: 0 }}>
      <li
        key={pokemon.id}
        style={{
          textAlign: "center",
          listStyle: "none",
          display: "inline-block",
        }}
      >
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </li>
    </ul>
    <Link to="/">GO Home</Link>
  </div>
)
