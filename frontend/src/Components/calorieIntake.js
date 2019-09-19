import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet'
import './css/Dashboard.css'


const calorieIntake = (props) => {

    const bulletData = [
        {
            "id": "Calories",
            "ranges": [
                500,
                1000,
                1500,
                1700,
                2000,
                2200,
                2500,
                3000,
                3500
            ],
            "measures": [
                props.calories
            ],
            "markers": [
                2500
            ]
        }

    ]

    return (
        <div className="card lineChart">
            <ResponsiveBullet
                data={bulletData}
                margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
                spacing={46}
                titleAlign="start"
                titleOffsetX={-70}
                measureSize={0.2}
                animate={true}
                motionStiffness={90}
                motionDamping={12}
            />
        </div>
    );
}

export default calorieIntake;