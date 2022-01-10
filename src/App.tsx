import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useGetPokemonByNameQuery } from './app/api'

function App() {

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <>
      <div className="App">

        {
          isLoading ? 'isLoading...' : (
            <>
              <h1>Pokemon</h1>
              <p>{data?.name}</p>
              <p>weight {data?.weight}</p>
              <p>height {data?.height}</p>
              <p>id {data?.id}</p>
            </>
          )
        }
      </div>

    </>

  );
}

export default App;
