import React from 'react';
import './country.css'

function CountryCard(props) {
    console.log()
    return (
        <div>
        {(props.region) == "Asia" ?
        <div className="countrycard" 
             style={{  
                  backgroundImage: "url(" + props.flag + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
             }}>
            <ul>
                <li> <div className="header">{props.name}</div></li>
                <li>CAPITAL: {props.capital}</li>
                <li>REGION: {props.region}</li>
                <li>SUBREGION: {props.subregion}</li>
                <li>AREA: {props.area} kmsq</li>
                <li>BORDER :  {props.border}</li>
            </ul>
        </div>
            :""}
     </div>  
    )
}

export default CountryCard
