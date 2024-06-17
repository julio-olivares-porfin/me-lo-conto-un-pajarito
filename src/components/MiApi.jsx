import { useState, useEffect } from 'react';
import Buscador from './Buscador';
import { Button, Spinner } from 'react-bootstrap';
import BirdCard from './BirdCard';

function MiApi() {
  const [birds, setBirds] = useState([]);
  const [filteredBirds, setFilteredBirds] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
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
    <div className="full-container">
      <div className="header">
        <h1> Me lo contó un pajarito</h1>
        <p>Es una forma de decir que uno se enteró de algo, generalmente un rumor o un dato confidencial, sin revelar la fuente exacta de esa información. <span className="fw-bold">Ahora cuando te pidan la fuente, puedes citar un ave chilena</span></p>
        <p>Por ejemplo: <span className="ejemplo-italic">Chincol, Gaviota, Pequén, etc</span></p>
        <div className="hero-section">
          <Buscador onFilter={handleFilter} />
          <Button onClick={handleSort} variant="secondary" className="mb-3 w-25">Ordenar A-z</Button>
        </div>
      </div>
      <div className='main-container container'>
      {loading ? ( <Spinner animation="grow" />) : (

          <div className="row col-12">
            {filteredBirds.map(bird => (
              <BirdCard key={bird.uid} nombreBird={bird.name.spanish} imagenBird={bird.images.main} nombreLatinBird={bird.name.latin} />
            ))}
          </div>

      )}
      </div>
    </div>
  );
}

export default MiApi;
