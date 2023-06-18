import React, { useState, useEffect } from "react"
import s from "./TrainItem.module.css"

export default function TrainItem({ train }) {
    const { name, number } = train;
    return (
        <div className={s.item}>
            <h3>{name}</h3>
            <p>{number}</p>
        </div>
    )
}