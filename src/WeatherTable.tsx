interface WeatherTableProps {
  rain: number[];
  temperature: string[];
  time: string[];
}

const WeatherTable = ({ rain, temperature, time }: WeatherTableProps) => {
  return (
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
        {time.map((time, index) => (
          <tr key={time}>
            <td>{time}</td>
            <td>{temperature[index]}</td>
            <td>{rain[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
