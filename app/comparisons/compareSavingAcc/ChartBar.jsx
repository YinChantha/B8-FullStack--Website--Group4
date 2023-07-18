import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        // {
        //   name: "ABA",
        //   data: [31, 40, 28, 51, 42, 109, 100],
        // },
        // {
        //   name: "ACELEDA",
        //   data: [11, 32, 45, 32, 34, 52, 41],
        // },
        // {
        //   name: "SATHAPANA",
        //   data: [11, 2, 45, 8, 34, 100, 80],
        // },
      ],
      chart: {
        height: 350,
        type: "area",
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

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div ref={chartRef} />;
};

export default ChartComponent;
