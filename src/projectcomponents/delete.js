{data?.map((item) => 
    {item.region == "Asia" ?  
   <CountryCard name={item.name.common}/>
       :""}
)} 



 {/* <div>
            <h1>
                 <div> 
                    {data?.map((item) => 
            
                      <CountryCard name={item.name.common} 
                                   region={item.region}
                                   capital={item.capital}
                                   flag={item.flags[1]}
                                   subregion={item.subregion}
                                   population
                                 //  border={item.borders?.map((subitem) => subitem)}
                                   language= {item.languages}
                                   
                                   />
                     
                  )} 
                </div>
            </h1>
            
        </div> */}


 {/* <li>
      {props.languages?.map((lang, i) => (
        <li key={i}>{lang.name}</li>
      ))}</li> */}
      
                {/* <li>
      {props.languages?.map((lang, i) => (
        <li key={i}>{lang.name}</li>
      ))}</li> */}