import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

// 1.Sony Playstation 5
// 2.Apple Air Pods 2nd Gen
// 3.AMD Radeon RX 6500 XT
// 4.Seagate Portable 2TB External Hard Drive
// 5.Apple Pencil (2nd Generation), White
// 6.Huawei Matebook 14s (Linux Preinstalled)
// 7.Matein Travel Laptop Backpack, 
// 8.Razer Kraken Gaming Headset, Pink
// 9.Apple Watch Series 3
// 10.Razer Basilisk V3 

const lables:string[] =[
    'Sony Playstation 5',
    'Apple Air Pods 2nd Gen',
    'AMD Radeon RX 6500 XT',
    'Seagate Portable 2TB External Hard Drive',
    'Apple Pencil (2nd Generation), White',
    'Huawei Matebook 14s (Linux Preinstalled)',
    'Matein Travel Laptop Backpack',
    'Razer Kraken Gaming Headset, Pink',
    'Apple Watch Series 3',
    'Razer Basilisk V3'
];
const data = {
    labels:lables,
    datasets:[{
        label:'Best Sellers',
        backgroundColor:[ '#000000'],
        data: [10,9,8,7,6,5,4,3,2,1,],
    }]
}

const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: "y",
}

export const BestSellersChart = () => {
    return <Bar options={options}  data={data} />
}