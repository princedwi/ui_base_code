import Highcharts from "highcharts/highstock";
import { useEffect, useRef } from "react";
import highcharts3d from "highcharts/highcharts-3d";

export default function PieChart() {
  highcharts3d(Highcharts);
  const chartRef = useRef(null);

  const chartOptions = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: "Pie Chart",
      align: "left",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 35,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Share",
        data: [
          ["John", 23],
          ["Lily", 18],
          {
            name: "Paul",
            y: 12,
            sliced: true,
            selected: true,
          },
          ["Victor", 9],
        ],
      },
    ],
  };
  useEffect(() => {
    Highcharts.chart("pie-chart", chartOptions);
  });

  return (
    <div className="yy">
      <div
        id={`pie-chart`}
        className="overflow-visible top-0 w-100"
        ref={chartRef}
        style={{
          top: "0px",
          width: "100%",
          height: "inherit",
        }}
      />
    </div>
  );
}
