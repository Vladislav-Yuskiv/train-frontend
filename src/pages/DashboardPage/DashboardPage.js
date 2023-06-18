import React, { useState, useEffect } from "react"
import s from "./DashboardPage.module.css"
import TrainList from "../../components/TrainsList"

export default function DashboardPage() {
   
    return (
        <div>
            <TrainList/>
        </div>
    )
}