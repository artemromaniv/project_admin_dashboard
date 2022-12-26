import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
        year: '2015',
        budget: 28,
        budgetColor: 'hsl(65, 70%, 50%)',
        sales: 181,
        salesColor: 'hsl(192, 70%, 50%)',
    },
    {
        year: '2016',
        budget: 81,
        budgetColor: 'hsl(351, 70%, 50%)',
        sales: 139,
        salesColor: 'hsl(23, 70%, 50%)',
    },
    {
        year: '2017',
        budget: 80,
        budgetColor: 'hsl(160, 70%, 50%)',
        sales: 33,
        salesColor: 'hsl(233, 70%, 50%)',
    },
    {
        year: '2018',
        budget: 138,
        budgetColor: 'hsl(157, 70%, 50%)',
        sales: 158,
        salesColor: 'hsl(225, 70%, 50%)',
    },
    {
        year: '2019',
        budget: 85,
        budgetColor: 'hsl(79, 70%, 50%)',
        sales: 82,
        salesColor: 'hsl(52, 70%, 50%)',
    },
    {
        year: '2020',
        budget: 58,
        budgetColor: 'hsl(350, 70%, 50%)',
        sales: 54,
        salesColor: 'hsl(147, 70%, 50%)',
    },
    {
        year: '2021',
        budget: 82,
        budgetColor: 'hsl(2, 70%, 50%)',
        sales: 123,
        salesColor: 'hsl(93, 70%, 50%)',
    },
]

const BudgetSalesChart = () => {
    return (
        <ResponsiveBar
            data={data}
            keys={['budget', 'sales']}
            indexBy="year"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'year',
                legendPosition: 'middle',
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) {
                return (
                    e.id + ': ' + e.formattedValue + ' in year: ' + e.indexValue
                )
            }}
        />
    )
}

export default BudgetSalesChart
