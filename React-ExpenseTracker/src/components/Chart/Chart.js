import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //The chart uses the highest month value for 100% when displaying the bars
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const highestMonth = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={highestMonth}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
