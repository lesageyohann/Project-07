import React from 'react';
import Stars from './Star';

function Score({item}) {

    return (
        <div className='base-TR_rate' >
            {Stars(item.rating)}
        </div>
    )
}

export default Score