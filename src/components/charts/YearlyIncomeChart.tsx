import { ResponsiveLine } from '@nivo/line'

const lables: number[] = [2016, 2017, 2019, 2020, 2021, 2022]
const data = [
    {
        id: 'japan',
        color: 'hsl(313, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 46,
            },
            {
                x: 'helicopter',
                y: 89,
            },
            {
                x: 'boat',
                y: 155,
            },
            {
                x: 'train',
                y: 156,
            },
            {
                x: 'subway',
                y: 184,
            },
            {
                x: 'bus',
                y: 36,
            },
            {
                x: 'car',
                y: 23,
            },
            {
                x: 'moto',
                y: 234,
            },
            {
                x: 'bicycle',
                y: 239,
            },
            {
                x: 'horse',
                y: 77,
            },
            {
                x: 'skateboard',
                y: 206,
            },
            {
                x: 'others',
                y: 283,
            },
        ],
    },
]

const YearlyIncomeChart = () => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    )
}

export default YearlyIncomeChart
