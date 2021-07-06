import './App.css';
import React,{useState, useEffect} from 'react';

const url = "https://gist.githubusercontent.com/Tayarthouail/da5a426f2741c6bf6cafdf8cfffaa031/raw/26115eaabdd06c9c8aa8b8a14600b860eed84dde/slider.json";

function App() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState([]);
  

  useEffect(() => {
  const getDataEffect = async () => {
    const result = await getData();
    setPeople(result);
  }

  getDataEffect();

  }, [])
 

  const getData = async () => {
    const response = await fetch(url); 
    const json = await response.json();
    return json;
  }



  return (
    <section className="card-container">

      {people.map((person)=> {
        const {id, age, city, followers, image, likes, name, photos} = person;
        
        return (
              <article className="card" key={id}>
              <div className="bg-box">
                <img src="./images/bg-pattern-card.svg" alt="pattern" />
              </div>

              <div className="victor-box">
                <img src={image} className="victor" alt="victor" />
              </div>
          
             <h1 className="name">{name}<span>{age}</span></h1>
             <h3 className="city">{city}</h3>

            <div className="review">
              <div>
                <h2>{followers}K</h2>
                <h4>Followers</h4>
              </div>

              <div>
                <h2>{likes}K</h2>
                <h4>Likes</h4>
              </div>
              
              <div>
                <h2>{photos}K</h2>
                <h4>Photos</h4>
              </div>

            </div>

          </article>
        )
      })}

      
    </section>
  );
}

export default App;





// <section className="card-container">

// <article className="card">
//   <div className="bg-box">
//     <img src="./images/bg-pattern-card.svg" alt="pattern" />
//   </div>

//   <div className="victor-box">
//     <img src="./images/image-victor.jpg" className="victor" alt="victor" />
//   </div>
 
//  <h1 className="name"> Vector Crest<span>26</span></h1>
//  <h3 className="city">London</h3>

// <div className="review">
//   <div>
//     <h2>80K</h2>
//     <h4>Followers</h4>
//   </div>

//   <div>
//     <h2>803K</h2>
//     <h4>Likes</h4>
//   </div>
  
//   <div>
//     <h2>1.4K</h2>
//     <h4>Photos</h4>
//   </div>

// </div>

// </article>
// </section>
// );
// }

// export default App;
