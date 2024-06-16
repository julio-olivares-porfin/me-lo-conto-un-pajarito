import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Buscador({ onFilter }) {
  const [criteria, setCriteria] = useState('');

  const handleChange = (e) => {
    setCriteria(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Qué pajarito te lo contó?"
        value={criteria}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}

export default Buscador;
