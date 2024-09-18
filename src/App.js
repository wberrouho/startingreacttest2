import './App.css';
import pokemon from './pokemon.json';
import PropTypes from 'prop-types';

const PokemonRow = ({pokemon}) =>(
    <tr>
    <td>
      {pokemon.name.english}
    </td>
    <td>
      {pokemon.type.join(',')}
    </td>
  </tr>
);

PokemonRow.PropTypes ={
pokemon: PropTypes.shape({
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  type: PropTypes.arrayOf(PropTypes.string)
}),
onSelect : PropTypes.func
};

function App() {
  return (
    <div style={
      {
        margin: 'auto',
        width: 800,
        paddingTop: '1rem',
      }
    }>
      <h1 className='title'> Pokemon Search</h1>
      <table width='100%'>
        <thead>
          <tr>
            <th>
              Bulbasor
            </th>
            <th>
              Grass, Poison
            </th>
          </tr>
        </thead>
        <tbody style={
          { textAlign: 'center' }
        }>
          {pokemon.slice(0, 20).map(pokemon => (
            <PokemonRow pokemon={pokemon} key={pokemon.id} />
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
