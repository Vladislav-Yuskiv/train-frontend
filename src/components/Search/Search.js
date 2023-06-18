import React, { useState, useEffect } from "react";
import { Input , Checkbox , Button  } from 'antd'
export default function SearchComponent({ trains, setTrains }) {

        const [searchQuery , setSearchQuery] = useState("")
        const [isSelectedTitle, setIsSelectedTitle] = useState(false);
        const [isSelectedNumber, setIsSelectedNumber] = useState(false);
    
            
        const handleCkeckboxName = () => {
            setIsSelectedTitle(!isSelectedTitle)
            if(isSelectedNumber){
                setIsSelectedNumber(false)
            }
        }
        const handleCkeckboxNumber = () => {
            setIsSelectedNumber(!isSelectedNumber)
            if(isSelectedTitle){
                setIsSelectedTitle(false)
            }
    }

   
    
      function onSearch() {
        const filteredTrains = trains.filter(el => {
        if(isSelectedTitle) {
        return  el.name.trim() === searchQuery.trim()
        } else if (isSelectedNumber){
            return el.number === Number(searchQuery.trim())
        }else{
            return trains
        }
        })
        
        setTrains(filteredTrains)
  }
  

    return (
        <div style={{display: "flex" , alignItems: "center" , marginBottom: 30}}>
            <Input
                size='large'
                placeholder='Search by'
                style={{ width: 300, margin: '0 5px 0 10px' }}
                type='text'
                value={searchQuery}
                allowClear
                onPressEnter={onSearch}
                onChange={(e)=> {
                    setSearchQuery(e.target.value)
                }} />
            
            <div style={{margin: '0 10px'}}>
                <Checkbox checked={isSelectedTitle} onChange={handleCkeckboxName}>Name</Checkbox>
                <Checkbox checked={isSelectedNumber} onChange={handleCkeckboxNumber}>Number</Checkbox>
            </div>

             <Button onClick={onSearch} style={{
                color: '#ffffff',
                backgroundColor: '#b5d922',
                opacity:!isSelectedTitle && !isSelectedNumber ? 0.4 : 1,
                borderColor: '#b5d922',
                height: 40,
                width: 80
                }} disabled={!isSelectedNumber && !isSelectedTitle}>Search</Button>
        </div>
    )
}