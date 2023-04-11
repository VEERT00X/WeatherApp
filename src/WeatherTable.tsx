interface WeatherTableProps {
  rain: number[];
  temperature: string[];
  time: string[];
}

const WeatherTable = ({ rain, temperature, time }: WeatherTableProps) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <p>Time</p>
            </th>
            <th>
              <p>Temperature</p>
            </th>
            <th>
              <p>Rain</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {time.slice(1).map((time, index) => (
            <tr key={time}>
              <td>{time}</td>
              <td>{temperature[index + 1]}</td>
              <td>{rain[index + 1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
