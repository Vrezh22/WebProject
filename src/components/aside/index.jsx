import React from 'react';

const Aside = ({ isOpen }) => {

    return (
        <div className={isOpen ? 'aside' : 'aside hidden'}>

        </div>
    )
}



export default Aside;