const DateDesplay = () => {
  const days = [...new Array(31)].map((i) => i + 1);
  return (
    <div className="days">
      <table>
        <thead>
          <tr>
            <th className={"date"}>
              <b>Day</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {days.map((value, index) => {
            return (
              <tr key={index}>
                <td className={"date"}>
                  <b>{value}</b>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DateDesplay;
