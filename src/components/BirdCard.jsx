import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function BirdCard({ nombreBird, imagenBird, nombreLatinBird }) {
  return (
    <div className='col-md-2'>
      <Card className='mb-4 card-fixed-size'>
      <Card.Img variant="top" src={imagenBird} alt={nombreBird} className="card-img-fixed" />
      <Card.Body>
        <Card.Title>{nombreBird}</Card.Title>
        <Card.Text>{nombreLatinBird}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

BirdCard.propTypes = {
  nombreBird: PropTypes.string.isRequired,
  imagenBird: PropTypes.string.isRequired,
  nombreLatinBird: PropTypes.string.isRequired,
};

export default BirdCard
