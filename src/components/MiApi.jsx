import { useState, useEffect } from 'react';
import Buscador from './Buscador';

function MiApi() {
  const [birds, setBirds] = useState([]);
  const [filteredBirds, setFilteredBirds] = useState([]);

  useEffect(() => {
    fetch('https://aves.ninjas.cl/api/birds')
      .then(response => response.json())
      .then(data => {
        setBirds(data);
        setFilteredBirds(data);
      })
      .catch(error => console.error('Error fetching data:', error));
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
      <div>
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
