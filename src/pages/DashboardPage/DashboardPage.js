import React, { useState, useEffect } from "react"
import s from "./DashboardPage.module.css"
import TrainsTable from "../../components/TrainsTable/TrainsTable"

export default function DashboardPage() {
   
    return (
        <div>
            <h1 className={s.title}>Train Schedule</h1>
            <TrainsTable/>
        </div>
    )
}