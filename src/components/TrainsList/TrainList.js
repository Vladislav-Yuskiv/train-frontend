import React, { useState, useEffect } from "react"
import TrainItem from "../TrainItem"
import { getAllTrains} from "../../services/api/trainsAPI"
export default function TrainList() {
    
    const [trains, setTrains] = useState([])

    useEffect(() => {
        try {
            const result = getAllTrains();

            setTrains(result)
        } catch (e) {
            console.log("Error", e.message);
            alert("Something went wrong ! Try Again !")
        }
    }, [])
    
    return (
        <div className="container">
            <ul>
                {trains.map(train => {
                    return <TrainItem train={train} key={train._id} />
                })}
          </ul>
        </div>
    )
}