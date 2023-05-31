import Highcharts from "highcharts/highstock";
import { useEffect, useRef } from "react";
import highcharts3d from "highcharts/highcharts-3d";

export default function Barchart() {
  highcharts3d(Highcharts);
  const chartRef = useRef(null);
  const options = {
    chart: {
      renderTo: "bar-chart",
      type: "column",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
    },
    xAxis: {
      categories: [
        "Toyota",
        "BMW",
        "Volvo",
        "Audi",
        "Peugeot",
        "Mercedes-Benz",
        "Volkswagen",
        "Polestar",
        "Kia",
        "Nissan",
      ],
    },
    yAxis: {
      title: {
        enabled: false,
      },
    },
    tooltip: {
      headerFormat: "<b>{point.key}</b><br>",
      pointFormat: "Cars sold: {point.y}",
    },
    title: {
      text: "Bar Chart",
      align: "left",
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        depth: 25,
      },
    },
    series: [
      {
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true,
      },
    ],
  };
  useEffect(() => {
    Highcharts.chart("bar-chart", options);
  });

  return (
    <div className="yy">
      <div
        id={`bar-chart`}
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
