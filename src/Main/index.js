import {useEffect, useState} from "react";
import {API} from '../Constants/api'
import './style.css';

const url = `${API}`;

const Home = () => {

    const [drinks, setDrinks] = useState([]);

    const gettingDrinks = async()=> {
        try {
        const response = await fetch(url);
        const data = await response.json();

        setDrinks(data.drinks);
        } catch(e) {
            console.log(e)
        }

    }
    
    useEffect(()=> {
        gettingDrinks()
    }, [])
    const [inputValue, setinputValue] = useState(gettingDrinks);
    
    const searchTerm = (e) => {
        if (inputValue = drinks.strDrink) {
        setinputValue(e.target.value, 
         <div>
            {drinks.filter((item) => (
                <div key={item.idDrink}>
                      <div className='mainCnt1'>
                                <div className='imgcont'>
                                    <img src={item.strDrinkThumb} alt='drinkimg' className='img'></img>
                                </div>
                                <div className='mainCont2'>
                                   <h2>{item.strDrink}</h2>
                                   <p>{item.strGlass}</p>
                                   <p>{item.strAlcoholic}</p>
                                   <button>Details</button>
                                </div>
                         </div>
                </div>
     
            ))}
            </div>
        )
            }
    }

    return (
        <>
            <div className='main'>
                <div className='input'>
                    <input type='search' size='50' value={inputValue} onChange={searchTerm}></input>
                    <button >Search</button>
                </div>
                <div className='container'>
                    {drinks.map ((item) => (
                        <div key={item.idDrink}>
                            <div className='mainCnt1'>
                                <div className='imgcont'>
                                    <img src={item.strDrinkThumb} alt='drinkimg' className='img'></img>
                                </div>
                                <div className='mainCont2'>
                                   <h2>{item.strDrink}</h2>
                                   <p>{item.strGlass}</p>
                                   <p>{item.strAlcoholic}</p>
                                   <button>Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;