import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    
    <section className="main-card--cointainer">
    {menuData.map((curElem) => {
        return(
            <>
            <div className="card-container" key={curElem.id} >
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    <span className="card-author subtle" >{curElem.name}</span>
                    <h2 classNmae="card-title">{curElem.name}</h2>
                    <span className="card-description subtle">
                      loererm ipsum dolor ait amet hdsknijs xinx ijd biefue hjfbku hf khef jbf khbf ibf ejhd jjf ujm wofb f
    
    
        
                  </span>
                  <div className ="card-read">Read</div> 
                  <div>
                    <img 
                    src={curElem.image} alt="images" className="card-media"></img>
                    <span className="card-tag subtle">order now</span>
                  </div>
                    
    
                </div>
    
            </div>
    
        </div> 
        </>

        );
    
    })}
    </section>
   
      
    </>
  )
}

export default MenuCard 
