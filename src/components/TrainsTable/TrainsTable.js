import React, { useState, useEffect  } from "react";
import {  Table } from 'antd'
import { getAllTrains } from "../../services/api/trainsAPI";
import Loader from "../Loader/Loader";
import {TrainsColumns} from "./TrainsColumns";
import SearchComponent from "../Search";

export default function TrainsTable() {
  const [trains, setTrains] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trainListPagination, setTrainListPagination] = useState({ page: 1, limit: 30 })
  const [trainTotal, setTrainTotal] = useState(0);


  useEffect(() => {
    fetchData(trainListPagination);
  }, []);


   async function  fetchData (pagination) {
    try {
        setIsLoading(true);
        const result = await getAllTrains(pagination);
          setTrains(result);
        setTrainTotal(result.length)
        setTrainListPagination(pagination)
        setIsLoading(false);
    } catch (e) {
        console.log(e);
        setIsLoading(false);
        alert("Something went wrong! Try Again!");
      }
  }

  
  if (isLoading) {
    return <Loader />;
  }

    return (
      <div>
        <SearchComponent trains={trains} setTrains={setTrains} />
       
          <Table
            dataSource={trains.map((train) => ({
              key: train._id,
              ...train,
            }))}
                columns={TrainsColumns()}
                 pagination={{
              position: 'both',
              total: trainTotal,
              pageSize: trainListPagination.limit,
              pageSizeOptions: ['10', '20', '50', '100', '250'],
              showSizeChanger: true,
              current: trainListPagination.page,
              onChange: (page) => {
                  return fetchData({
                    page: page,
                    limit: trainListPagination.limit,
                  })
              },
             onShowSizeChange: (_, pageSize) => {
                   return fetchData({
                    page: trainListPagination.page,
                    limit: pageSize,
                  })
              },
            
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} results`,
            }}
          />
        </div>
    )
}
