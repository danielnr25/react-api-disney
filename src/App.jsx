
import { useState } from 'react'
import image from './assets/imagepoke.png'
import Pokemons from './components/Pokemons'

function App() {

  const [pokemons, setPokemons] = useState([])


    const Api = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
      const data = await res.json()
      const { results } = data

      const newPokemons = results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return {
          id: data.id,
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
        }
      })

      const pokemons = await Promise.all(newPokemons)
      setPokemons(pokemons)
    }

  return (
    <>
      <header className="mx-auto border rounded-md border-slate-700 bg-black max-w-5xl p-10 my-10 justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-600">Pokémon <strong className="text-yellow-500">API</strong> </h1>

        {
          pokemons ?
            <Pokemons pokemons={pokemons} setPokemons={setPokemons} /> :
            <>
              <div className='flex justify-center'>
                <img src={image} className='w-96 py-5' alt="image pokemon" />
              </div>
              <button onClick={Api}  className='bg-yellow-600 h-10 font-semibold rounded-md w-28 text-white hover:bg-yellow-400 hover:text-black'>Buscar</button>
            </>
        }
      </header>
    </>
  )
}

export default App
