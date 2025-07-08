import { Line,Pie,PolarArea, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, RadialLinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement,TimeScale, ChartOptions } from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  ChartDataLabels
);

const Chart = ({ type, data, title }) => {
  // Polar Area chart configuration

  if (type === 'polarArea') {
    
    const chartData = {
      labels: data.labels,
      datasets: [{
        data: data.values,
        backgroundColor: data.colors,
        borderWidth: 4,
        borderRadius:5,
        
        
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: { // Adds internal spacing
          top: 30,
          
          left: 8,
          
        }
      },
      plugins: {
        legend: {
          display: false, // Hide the legend above
        },
        datalabels: {
          color: "white", // Label color inside sections
          font: {
            weight: "lighter",
            size: 11,
          },
          align: "center", // Center inside the section
          formatter: (value, ctx) => {
            return ctx.chart.data.labels[ctx.dataIndex]; // Show category name inside
          },
        },
      },
      scales: {
        r: {
          ticks: {
            display: false // Hide radial numbers
          },
          grid: {
            display: false,
            circular: true
          }
          
        }
      }
    };

    return (
      <div className="h-[335px] w-full bg-white p-4 rounded-lg shadow" style={{ borderRadius:25 }}>
        <PolarArea 
          data={chartData}
          options={options}
          
        />
      </div>
    );
  }


  const options = {
    responsive: true,
    barThickness: 26,
    maxBarThickness: 30,
    borderWidth: 6,
    borderColor: "transparent",
    
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: '#e2e8f0',
          display: false
        },
        ticks: {
          color: '#9F9FA0',
          
        },
       
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9F9FA0',
          stepSize: 100, // Forces intervals of 100
        },
        grid: {
          color: '#e2e8f0',
          drawBorder: false // Optional: Cleaner look
        }
      }
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: title,
      },

      datalabels:{
        display:false
      },
      
    },
  };
  const options1 = {
    responsive: true,
    
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: false,
        text: title,
      },
      tooltip: {
        mode: 'index',
        intersect: false
      },

      datalabels:{
        display:false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e7eb',
          borderDash: [5, 5] // Dash pattern
        },
        ticks: {
          color: '#9F9FA0',
          stepSize: 200, // Forces intervals of 100
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#e2e8f0',
          borderDash: [5, 5] // Dash pattern
        }
      }
    }
  };

  if(type === 'pie'){
    const chartData = {
      labels: data.labels,
      datasets: [{
        data: data.values,
        backgroundColor: data.colors,
        borderWidth: 10,
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: { // Adds internal spacing
          
          
        }
      },
      plugins: {
        legend: {
          display: false, // Hide the legend above
        },
        datalabels: {
          color: "white", // Label color inside sections
          font: {
            weight: "lighter",
            size: 11,
          },
          align: "center", // Center inside the section
          formatter: (value, ctx) => {
            return ctx.chart.data.labels[ctx.dataIndex]; // Show category name inside
          },
        },
      },
      
      
    };
    return (
      <div className="h-[335px] w-full " style={{ borderRadius:25 }}>
        <Pie 
          data={chartData}
          options={options}
          
        />
      </div>
    );
  }

  

  const chartData = {
    labels: data.labels,
    datasets: type === 'bar' ? [
      {
        label: 'Withdrawals',
        data: data.withdrawals,
        backgroundColor: 'rgba(35, 35, 35, 1)',
        borderRadius: 100,
        borderSkipped: false,
      },
      {
        label: 'Deposits',
        data: data.deposits,
        backgroundColor: 'rgba(57, 106, 255, 1)',
        borderRadius: 100,
        borderSkipped: false,
      }
      
    ] :  [
      {
        label: 'Balance',
        data: data.data,
        borderColor: '#0522A8',
        fill: true, 
        tension: 0.5
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-lg w-full" style={{ borderRadius:25 }}>
      {type === 'bar' && <Bar options={options} data={chartData} />}
      {type === 'pie' && <Pie options={options} data={chartData} />}
      {type === 'polarArea' && <PolarArea options={options} data={chartData}/>}
      {type === 'line' && <Line options={options1} data={chartData} />}
    </div>
  );
};

export default Chart;