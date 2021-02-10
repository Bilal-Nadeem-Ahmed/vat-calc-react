
const DateDesplay = ({days}) => {
    return ( 
        <div className='days'>
            <table>
                <thead>
                    <tr>
                        <th className={'date'}><b>Day</b>
                        </th>            
                    </tr>
                </thead>
                <tbody>
                    { days.map(i=>{
                        return (
                            <tr key ={i}>
                                <td className={'date'}>
                                    <b>{i}</b> 
                                </td>
                                    </tr>
                                )
                            })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DateDesplay;