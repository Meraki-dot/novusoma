import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './css/Dashboard.css'

const PreviouslySavedMeals = (props) => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/recipes`)
            .then(res => {
                console.log(res.data.data)
                setMeals(res.data.data);
            })
    }, [])

    const fetchMeals = () => {
            axios.get(`https://localhost5000/api/recipes`)
                .then(res => {
                    setMeals(res);
                })
    }

    async function saveMeal(meal){
        await axios.post(`http://localhost5000/api/recipes`, meal);
        props.fetchMeals();
    }

    return ( 
        <div>
            <h2 id="savedMealTitle">Previously Saved</h2>
            <div className="lineBreak">──────────────────</div>
            {meals.map((m, i) =>
            <div id="listOfMeals">
                 {i === 0 && 
                 
                <h2>{m.dishTitle}</h2>
                 }
                {i > 0 && i < 6 &&
                <div>
                    <p>{m.dishTitle}</p>
                </div>}
                
            </div>
            )}
               
        </div>
     );
}
 
export default PreviouslySavedMeals;