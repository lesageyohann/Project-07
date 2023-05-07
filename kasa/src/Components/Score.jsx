import React from 'react';
import Stars from './Star';

function Score({item}) {

    return (
        <div>
            {Stars(item.rating)}
        </div>
    )
}

export default Score