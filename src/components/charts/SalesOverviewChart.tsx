import { ResponsivePie } from '@nivo/pie'
// const data = [
//     'Japan',
//     'United States',
//     'United Kingdom',
//     'Germany',
//     'Austria'
// ];

interface MockPieData {
    id: string
    label: string
    value: number
    color: string
}

const mockData: MockPieData[] = [
    {
        id: 'Japan',
        label: 'Japan',
        value: 381,
        color: 'hsl(297, 70%, 50%)',
    },
    {
        id: 'United States',
        label: 'United States',
        value: 253,
        color: 'hsl(269, 70%, 50%)',
    },
    {
        id: 'United Kingdom',
        label: 'United Kingdom',
        value: 85,
        color: 'hsl(32, 70%, 50%)',
    },
    {
        id: 'Germany',
        label: 'Germany',
        value: 589,
        color: 'hsl(180, 70%, 50%)',
    },
    {
        id: 'Austria',
        label: 'Austria',
        value: 267,
        color: 'hsl(23, 70%, 50%)',
    },
]

const SalesOverviewChart = () => {
    return (
        <ResponsivePie
            data={mockData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: 'ruby',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: 'c',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: 'go',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: 'python',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: 'scala',
                    },
                    id: 'lines',
                },
                {
                    match: {
                        id: 'lisp',
                    },
                    id: 'lines',
                },
                {
                    match: {
                        id: 'elixir',
                    },
                    id: 'lines',
                },
                {
                    match: {
                        id: 'javascript',
                    },
                    id: 'lines',
                },
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                            },
                        },
                    ],
                },
            ]}
        />
    )
}

export default SalesOverviewChart
