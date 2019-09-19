import React from 'react';
import './css/Dashboard.css'
import MealCard from './mealCard.js'

const Dashboard = () => {

    return (
        <div id="dashboardWrapper">
            <div id="dashboardTitle">
                <h1>DASHBOARD</h1>
            </div>
            <div id="userBlock">
                <div class="card" id="userContent">
                    <h1 class="card-title">WELCOME!</h1>
                    <div className="lineBreak">──────────────────</div>
                    <div class="card-subtitle mb-2 text-muted"><h4 id="dayOfWeek">Mon</h4>
                    <div id="userDays">
                            <p class="card-text">Spaghetti</p>
                            <p class="card-text">Chicken Parmesan</p>
                            <p class="card-text">Baked Potato</p>
                        </div>
                    </div>
                    <br></br>
                    <div className="lineBreak">──────────────────</div>
                    <div class="card-subtitle mb-2 text-muted"><h4 id="dayOfWeek">Tues</h4>
                    <div id="userDays">
                            <p class="card-text">Spaghetti</p>
                            <p class="card-text">Chicken Parmesan</p>
                            <p class="card-text">Baked Potato</p>
                        </div>
                    </div>
                    <br></br>
                    <div className="lineBreak">──────────────────</div>
                    <div class="card-subtitle mb-2 text-muted"><h4 id="dayOfWeek">Wed</h4>
                    <div id="userDays">
                            <p class="card-text">Spaghetti</p>
                            <p class="card-text">Chicken Parmesan</p>
                            <p class="card-text">Baked Potato</p>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
            <div class="card" id="mealSearch">
                <h1 id="mealsTitle" class="card-title">SEARCH MEALS</h1>
                <div id="factsApi">
                    <MealCard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;