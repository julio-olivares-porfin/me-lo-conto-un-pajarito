import { useState, useEffect } from 'react';
import Buscador from './Buscador';

function MiApi() {
  const [birds, setBirds] = useState([]);
  const [filteredBirds, setFilteredBirds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://aves.ninjas.cl/api/birds');
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await response.json();
        setBirds(data);
        setFilteredBirds(data);
      } catch (error) {
        console.error('Error al acceder a los datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (criteria) => {
    const filtered = birds.filter(bird => bird.name.spanish.toLowerCase().includes(criteria.toLowerCase()));
    setFilteredBirds(filtered);
  };

  const handleSort = () => {
    const sorted = [...filteredBirds].sort((a, b) => a.name.spanish.localeCompare(b.name.spanish));
    setFilteredBirds(sorted);
  };

  return (
    <div>
      <Buscador onFilter={handleFilter} />
      <button onClick={handleSort}>Ordenar alfabéticamente</button>
      <div className='birds-container'>
        {filteredBirds.map(bird => (
          <div key={bird.uid}>
            <h2>{bird.name.spanish}</h2>
            <img src={bird.images.main} alt={bird.name.spanish} style={{ width: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiApi;
