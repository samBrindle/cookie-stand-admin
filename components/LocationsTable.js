export default function LocationsTable({ locationsList: locations}) {
    const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]
    const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516]

    if ( locations.length == 0 ) {
        return (
            <h2 className="w-1/2 mx-auto my-8 text-4xl text-center">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <table className="w-1/2 max-auto my-4 border border-black">
                <thead>
                    <tr>
                        <th>Location</th>
                        {hours.map(item => <th  key={item}>{item}</th> )}
                    </tr>
                </thead>
                <tbody>
                    {locations.map(item => (
                        <tr key={item.location}>
                            <td className="p-2 border border-black" >{item.location}</td>
                            {hourly_sales.map(sales => (
                                <td className="p-2 border border-black" key={sales}>{sales}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}