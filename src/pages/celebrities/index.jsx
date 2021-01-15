import React from 'react';

const Celebrities =({celebrities})=>{
    const mapCelebs = celebrities.map(celebrity=>{
        return(
            <div className='celeb_contenet' key={celebrity.img}> 
                <div className="nkari_chxol">
                    <img src={celebrity.img} alt='celeb'/>
                </div>
                <p className='celeb_par'>{celebrity.fullname}` {celebrity.body}</p>
            </div>
        )
        })
     return(
         <div className='celebrity_line'>
             <h1>Մեր պարծանքները</h1>
             {mapCelebs}
         </div>
     )
}
export default Celebrities;