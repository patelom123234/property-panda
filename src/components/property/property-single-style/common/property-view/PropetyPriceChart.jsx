import React, { useState, useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const data = [
  { projectName: "Project A", rate: 100, ratePerSq: 20, percentage: 75 },
  { projectName: "Project B", rate: 150, ratePerSq: 25, percentage: 80 },
  { projectName: "Project C", rate: 120, ratePerSq: 18, percentage: 90 },
  { projectName: "Project D", rate: 120, ratePerSq: 18, percentage: 90 },
  { projectName: "Project E", rate: 120, ratePerSq: 18, percentage: 90 },
  { projectName: "Project F", rate: 120, ratePerSq: 18, percentage: 90 },
  { projectName: "Project G", rate: 120, ratePerSq: 18, percentage: 90 },
  { projectName: "Project H", rate: 120, ratePerSq: 18, percentage: 90 },
];

const PropertyPriceChart = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [dataPoints2, setDataPoints2] = useState([]);
  const [dataPoints3, setDataPoints3] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://canvasjs.com/data/gallery/react/nifty-stock-price.json"
      );
      const data = await response.json();
      console.log(data);
      const formattedDataPoints = data.map((point) => ({
        x: new Date(point.x),
        y: point.y,
      }));

      setDataPoints(formattedDataPoints);

      // Add more data for additional lines
      const formattedDataPoints2 = formattedDataPoints.map((point, index) => ({
        x: point.x,
        y: point.y * (1.05 + 0.05 * Math.cos(index * 0.2)), // Introduce a sinusoidal pattern for ups and downs
      }));

      const formattedDataPoints3 = formattedDataPoints.map((point, index) => ({
        x: point.x,
        y: point.y * (0.95 + 0.1 * Math.sin(index * 0.2)), // Introduce a cosine pattern for ups and downs
      }));

      setDataPoints2(formattedDataPoints2);
      setDataPoints3(formattedDataPoints3);
    };

    fetchData();
  }, []);

  const options = {
    theme: "light2",
    data: [
      {
        type: "line",
        xValueFormatString: "MMM",
        yValueFormatString: "#,##0.00",
        dataPoints: dataPoints,
        lineColor: "blue",
      },

      {
        type: "line",
        xValueFormatString: "MMM",
        yValueFormatString: "#,##0.00",
        dataPoints: dataPoints2,
        lineColor: "red",
      },

      {
        type: "line",
        xValueFormatString: "MMM",
        yValueFormatString: "#,##0.00",
        dataPoints: dataPoints3,
        lineColor: "green",
      },
    ],
  };

  return (
    // <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap:'20px' }}>
    //   <div style={{ flex: '1', width:'100%' }}>
    //     <table style={{ width: '100%', borderCollapse: 'collapse', margin: 'auto' }}>
    //       <thead>
    //         <tr>
    //           <th style={{ padding: '8px', textAlign: 'center', backgroundColor: 'blue', color: 'white' }}>Project Name</th>
    //           <th style={{ padding: '8px', textAlign: 'center', backgroundColor: 'blue', color: 'white' }}>Rate per sq</th>
    //           <th style={{ padding: '8px', textAlign: 'center', backgroundColor: 'blue', color: 'white' }}>Percentage</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((row, index) => (
    //           <tr key={index}>
    //             <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{row.projectName}</td>
    //             <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{row.ratePerSq}</td>
    //             <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{row.percentage}%</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //   <div style={{ flex: '1', maxWidth: '100%', width: '100%', height: '400px', margin: 'auto' }}>
    //     <CanvasJSChart options={options} />
    //   </div>
    // </div>
    <></>
  );
};

export default PropertyPriceChart;
