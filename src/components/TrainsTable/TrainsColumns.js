import moment from 'moment'
export const TrainsColumns = () => {
    return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      sorter: (a, b) =>
        String(a.name)
          .trim()
          .split(' ')
          .join('')
          .localeCompare(String(b.name).trim().split(' ').join('')),
      sortDirections: ['ascend', 'descend'],
        },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
      width: '10%',
    },
       {
      title: 'Departure Station',
      dataIndex: 'departureStation',
      key: 'departureStation',
      width: '15%',
      sorter: (a, b) =>
        String(a.departureStation)
          .trim()
          .split(' ')
          .join('')
          .localeCompare(String(b.departureStation).trim().split(' ').join('')),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Arrival Station',
      dataIndex: 'arrivalStation',
      key: 'arrivalStation',
      width: '15%',
      sorter: (a, b) =>
        String(a.arrivalStation)
          .trim()
          .split(' ')
          .join('')
          .localeCompare(String(b.arrivalStation).trim().split(' ').join('')),
      sortDirections: ['ascend', 'descend'],
      },
      {
      title: 'Departure Time',
      dataIndex: 'departureTime',
      key: 'departureTime',
      width: '15%',
      sorter: (a, b) => moment(a.departureTime).unix() - moment(b.departureTime).unix(),
       render: dateTime => {
        const date = moment(dateTime).format('DD-MM-YYYY')
        return date
      },
    },
    {
      title: 'Arrival Time',
      dataIndex: 'arrivalTime',
      key: 'arrivalTime',
      sorter: (a, b) => moment(a.arrivalTime).unix() - moment(b.arrivalTime).unix(),
      width: '15%',
      render: dateTime => {
        const date = moment(dateTime).format('DD-MM-YYYY')
        return date
      },
    },

    {
      title: 'Ticket Price',
      dataIndex: 'ticketPrice',
      key: 'ticketPrice',
      width: '7%',
      sorter: (a, b) => moment(a.ticketPrice) - moment(b.ticketPrice),
    },
    {
      title: 'Train Class',
      dataIndex: 'trainClass',
      key: 'trainClass',
      width: '10%',
    },
      {
      title: 'Coaches',
      dataIndex: 'numberOfCoaches',
      key: 'numberOfCoaches',
      width: '8%',
      sorter: (a, b) => moment(a.numberOfCoaches) - moment(b.numberOfCoaches),
    },
    {
      title: 'Available Seats',
      dataIndex: 'availableSeats',
      key: 'availableSeats',
      width: '8%',
      sorter: (a, b) => moment(a.availableSeats) - moment(b.availableSeats),
    },
      
  ]
}


