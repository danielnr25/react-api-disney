
export default function Pokemons(props) {

   const { pokemons, setPokemons } = props

   const handleBack = () => {
      setPokemons(null)
   }

   return (
      <div className="mx-auto text-white py-10 px-16">
         <div className="flex justify-center items-center space-x-10 mb-10">
            <h3 className="font-semibold text-lg">Pokemones</h3>
            <span className="font-semibold text-lg cursor-pointer text-indigo-600" onClick={handleBack}>Volver</span>
         </div>
         <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {
               pokemons.map((pokemon) => (
                  <div key={pokemon.id} className="space-y-10 items-center bg-gray-900 rounded-md shadow-md p-5 mb-5">
                     <p className="font-semibold text-2xl capitalize">{pokemon.name}</p>
                     <div className="flex justify-center mb-4">
                        <img src={pokemon.image} alt={pokemon.name} className="w-full h-32" />
                     </div>
                     <div className="items-center flex justify-center text-cen
                     ">
                        <span className="bg-black px-4 items-center py-1 font-semibold text-lg text-purple-600 cursor-pointer rounded-md hover:scale-110  
                        hover:text-blue-400 hover:bg-gray-800">Ver 👀 </span>
                     </div>
                  </div>
               ))
            }
         </div>

      </div>
   )
}
