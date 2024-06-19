import React, { useEffect } from 'react'
import BackEndSideBar from '../../components/BackEndSideBar'
import BackEndFooter from '../../components/BackEndFooter'
import BackEndHeader from '../../components/BackEndHeader'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js'

// Register the components for Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
)

const Dashboard = () => {
    // window scroll to top on page load
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const data = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
        fill: false,
        borderColor: '#007bff',
        backgroundColor: 'transparent',
        tension: 0.1
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        boxPadding: 3
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of the Week'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  }

  return (
    <>
      <div class='container-fluid'>
        <div class='row'>
          <BackEndSideBar />
          <div class='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div class='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 class='h2'>Dashboard</h1>
              <div class='btn-toolbar mb-2 mb-md-0'>
                <div class='btn-group me-2'>
                  <button
                    type='button'
                    class='btn btn-sm btn-outline-secondary'
                  >
                    Share
                  </button>
                  <button
                    type='button'
                    class='btn btn-sm btn-outline-secondary'
                  >
                    Export
                  </button>
                </div>
                <button
                  type='button'
                  class='btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1'
                >
                  <i class='bi bi-calendar-event'></i>
                  This week
                </button>
              </div>
            </div>

            {/* <canvas
            class='my-4 w-100'
            id='myChart'
            width='1036'
            height='437'
            style={{display: 'block', boxSizing: 'border-box', height: '218px', width: '518px'}}
          ></canvas> */}

            <Line data={data} options={options} />

            <h2>Section title</h2>
            <div class='table-responsive small'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
