import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    place: "10",
    salesPerYear: 8098,
    salesPerYearColor: "hsl(2, 70%, 50%)",
  },
  {
    place: "9",
    salesPerYear: 11097,
    salesPerYearColor: "hsl(2, 70%, 50%)",
  },
  {
    place: "8",
    salesPerYear: 15989,
    salesPerYearColor: "hsl(2, 70%, 50%)",
  },
  {
    place: "7",
    salesPerYear: 17097,
    salesPerYearColor: "hsl(2, 70%, 50%)",
  },
  {
    place: "6",
    salesPerYear: 18790,
    salesPerYearColor: "hsl(350, 70%, 50%)",
  },
  {
    place: "5",
    salesPerYear: 21087,
    salesPerYearColor: "hsl(79, 70%, 50%)",
  },
  {
    place: "4",
    salesPerYear: 23897,
    salesPerYearColor: "hsl(157, 70%, 50%)",
  },
  {
    place: "3",
    salesPerYear: 23990,
    salesPerYearColor: "hsl(160, 70%, 50%)",
  },
  {
    place: "2",
    salesPerYear: 34589,
    salesPerYearColor: "hsl(351, 70%, 50%)",
  },
  {
    place: "1",
    salesPerYear: 45790,
    salesPerYearColor: "hsl(65, 70%, 50%)",
  },
];

const BestSellersChart = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["salesPerYear"]}
      indexBy="place"
      layout="horizontal"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
      ]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "year",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Sales per year",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
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
        return e.id + ": " + e.formattedValue + " in year: " + e.indexValue;
      }}
    />
  );
};

export default BestSellersChart;
