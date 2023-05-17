import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, forecast }) => {
if (loadingData) {
return <Spinner />;
}

return (
<div className='mt-5'>
{showData ? (
<div className='container'>
<div className='card mb-3 mx-auto bg-dark text-light'>
<div className='row g-0'>
<div className='col-md-4'>
<img
    className="img-fluid rounded-start"
    alt="..."
    src="/cantina.png"
  />
</div>

<div className='col-md-8'>
<div className='card-body text-start mt-2'></div>
</div>
</div>
</div>
</div>
) : (
<h2 className="text-light">Sin datos</h2>
)}
</div>
);
};

export default Card;
