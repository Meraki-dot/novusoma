import React, { useState, useEffect } from 'react';
import Searchbar from './searchBar'
import axios from 'axios';
import CalorieIntake from './calorieIntake'
import PreviouslySavedMeals from './previousSavedMeals';


const MealCard = () => {

    const API_KEY = "2ff1a25049f0974fca33633c1a1427f8";
    const APP_ID = "0b603bf2"

    useEffect(() => {
        axios.get(`https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${API_KEY}`)
            .then(res => {
                setMeal(res.data.hits[0].recipe);
            })
    }, [])
    const [meal, setMeal] = useState({});
    const [calories, setCalories] = useState(0);

    async function fetchMeal(search) {
        axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`)
            .then(res => {
                setMeal(res.data.hits[0].recipe);
            })
    }

    const saveClick = () => {
        setCalories(calories + meal.calories/4)
        console.log(calories)
    }

    console.log(meal);

    return (
        <div className="card meal-card">
            <div className="card-title">
                <Searchbar fetchMeal={fetchMeal} />
                {meal.healthLabels === undefined &&
                    <div>
                        <h3>LOADING...</h3>
                    </div>
                }
            </div>
            {meal.healthLabels !== undefined &&
                <div className="card-body">
                    <h2 id="nameOfMeal">{meal.label}</h2>
                    <h3 id="facts-title">Facts: </h3>
                    {meal.healthLabels.map((hl, i) =>
                        <div key={i}>
                            <p>{hl}</p>
                        </div>
                    )}
                    <p>Calories: {meal.calories/4}</p>
                    <h3>Ingredients: </h3>
                    {meal.ingredientLines.map((m, i) =>
                        <div key={i}>
                            <p>{m}</p>
                        </div>
                    )}
                    <button className="btn, btn-success" onClick={saveClick}>Save</button>
                </div>
            }
            <CalorieIntake calories={calories}/>
            <div className="lineBreak">──────────────────</div>
            <PreviouslySavedMeals  fetchMeal={fetchMeal}/>
        </div>
    );
}

export default MealCard;