import React,{useState} from 'react';
import './App.css';

//58kWZe6c0SF2ZeXTkUZctr8J38rmty9ewXka62hMiIU
//&orientation=squarish
//https://api.unsplash.com/search/photos?client_id=58kWZe6c0SF2ZeXTkUZctr8J38rmty9ewXka62hMiIU&query=${value}&orientation=squarish
function App() {
  const [value,setvalue] = useState("")
  const [results,setResults] = useState([])
    
  
  const phones = ()=>{
    fetch('https://api.unsplash.com/search/photos?query=phones&client_id=58kWZe6c0SF2ZeXTkUZctr8J38rmty9ewXka62hMiIU')
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results)
    })
  }

  const peoples = ()=>{
    fetch('https://api.unsplash.com/search/photos?query=people&client_id=58kWZe6c0SF2ZeXTkUZctr8J38rmty9ewXka62hMiIU')
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results)
    })
  }

  const landscapes = ()=>{
    fetch('https://api.unsplash.com/search/photos?query=landscapes&client_id=58kWZe6c0SF2ZeXTkUZctr8J38rmty9ewXka62hMiIU')
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results)
    })
  }


  const beaches = ()=>{
    fetch('https://api.unsplash.com/search/photos?query=beaches&client_id=58kWZe6c0SF2ZeXTkUZctr8J38rmty9ewXka62hMiIU')
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results)
    })
  }


  const houses = ()=>{
    fetch('https://api.unsplash.com/search/photos?query=houses&client_id=58kWZe6c0SF2ZeXTkUZctr8J38rmty9ewXka62hMiIU')
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results)
    })
  }

  return (
          <div className="App">
            

            <div className="mydiv">
                
                    <h1>Carousel</h1> 
                    
              </div>
            
                <div>
                <div className="sides">
                      <div className="sidebar">
                          <h3>Categories</h3>
                              <ul>
                                  
                                    <button onClick={()=>phones()}>Phones</button>
                                    <button onClick={()=>landscapes()}>Landscapes</button>
                                    <button onClick={()=>peoples()}>Peoples</button>
                                    <button onClick={()=>beaches()}>Beaches</button>
                                    <button onClick={()=>houses()}>Houses</button>
                                 
                              </ul>
                       </div>
                       <h3>Files</h3>
                        <div className="list">
                            <div className="listimg">
                           {
                              results.map((item)=>{
                                      return <img className="listitem" key={item.id} src={item.urls}/>
                                    })
                                  }
                            </div>
                        
                        </div>
                </div>
                    
                    <div className="gallery">



                   
                    
                      {
                       results.map((item)=>{
                              return <img className="item" key={item.id} src={item.urls.regular}/>
                            })
                          }

                          <button className="prew">-</button>
                          <button className="next">+</button>

                         
                     </div>
                    
                    
                     <div className="main_content">
                       <div className="foot">

                        <div className="footimg">
                            {
                            results.map((item)=>{
                                    return <img className="footitem" key={item.id} src={item.urls.regular}/>
                                  })
                                }
                          </div>
                       </div>

                       
                      </div>
                 </div>
                 
          </div>
  
  );
}

export default App;
