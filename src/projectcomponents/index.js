import React,{useEffect, useState} from 'react';
import CountryCard from './CountryCard';
import RefreshIcon from '@material-ui/icons/Refresh';

function Index() {

    const fetchURL = "https://restcountries.com/v3/all"

    const [data, setData] = useState([]); 

    const getData = () =>
      fetch(`${fetchURL}`)
        .then((res) => res.json())
  

    useEffect(() => {
      getData().then((data) => setData(data))
       console.log(data[0])
    }, [])


    function refreshPage() {
        window.location.reload(false);
      }
       
    
    return (
        <div>
            <div className="header">
                 <h1>List Of Asian Countries</h1>
                 <span><button className="reloadbutton" onClick={refreshPage}><RefreshIcon/></button></span>
            </div>
            
                 <div className="index"> 
                
                    {data?.map((item) => 
                       
                      <CountryCard name={item.name.common} 
                                   region={item.region}
                                   capital={item.capital}
                                   flag={item.flags[1]}
                                   subregion={item.subregion}
                                   area={item.area}
                                   border={(item.borders!=undefined?item.borders.length:"0")}
                                   language= {item.languages}
                                   
                                   />             
                  )} 
                </div>            
        </div>
    )
}

export default Index
