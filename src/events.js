const stats = [
    {
        id: 1, name: 'Prayer Times', values: {
            "Fajr": "5:00 AM",
            "Zuhr": "1:00 PM",
            "Asr": "3:00 PM",
            "Magrib": "8:00 PM",
            "Isha": "10:00 PM",
        }
    },
    // { id: 2, name: 'Jummah', value: '$119 trillion' },
    // { id: 3, name: 'Donation Drive', value: '46,000' },
]

export default function Events() {
    return (
        <div className="bg-white py-24 sm:py-32" id="event">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">


                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {stat.name}
                            </dd>


                            <dt className="text-2xl leading-7 text-gray-600">
                                {
                                    Object.entries(stats).values.map(([k, value]) => {
                                        console.log(k);
                                        <li key={k}>{k} : {value} </li>
                                    })
                                }
                            </dt>

                            {/* <dt className="text-2xl leading-7 text-gray-600">{stat.value}</dt> */}


                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
