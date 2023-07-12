"use client";

import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ExchangeRateChart = () => {
  const chartRef = useRef(null);
  let chart = null;

  useEffect(() => {
    const seriesData = [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ];

    const chartOptions = {
      series: seriesData,
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  //   const handleZoomIn = () => {
  //     chart.zoomIn();
  //   };

  //   const handleZoomOut = () => {
  //     chart.zoomOut();
  //   };

  const handleSetZoom = (duration) => {
    const { xaxis } = chart.options;
    if (xaxis && xaxis.categories) {
      const { categories } = xaxis;
      const numDataPoints = categories.length;
      const newMaxIndex = numDataPoints - 1;
      let newMinIndex;

      switch (duration) {
        case "1month":
          newMinIndex = Math.max(0, newMaxIndex - 30); // Show last 30 days
          break;
        case "2months":
          newMinIndex = Math.max(0, newMaxIndex - 60); // Show last 60 days
          break;
        case "6months":
          newMinIndex = Math.max(0, newMaxIndex - 180); // Show last 180 days
          break;
        case "1year":
          newMinIndex = Math.max(0, newMaxIndex - 365); // Show last 365 days
          break;
        default:
          return;
      }

      chart.updateOptions({
        xaxis: {
          categories: categories.slice(newMinIndex, newMaxIndex + 1),
        },
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        {/* <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={handleZoomIn}
        >
          Zoom In
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={handleZoomOut}
        >
          Zoom Out
        </button> */}
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={() => handleSetZoom("1month")}
        >
          1 Month
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={() => handleSetZoom("2months")}
        >
          2 Months
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={() => handleSetZoom("6months")}
        >
          6 Months
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={() => handleSetZoom("1year")}
        >
          1 Year
        </button>
      </div>
      <div ref={chartRef} />
    </div>
  );
};

export default ExchangeRateChart;
