import type {ColumnsType} from 'antd/es/table'
import dayjs from 'dayjs'
import {Tag} from 'antd'
interface DataType {
    key:string
    orderID:number,
    customer:string,
    order:string[],
    deliveryDate:string,
    deliveryPricing:string,
    deliveryStatus:string

}

export const data: DataType[] = [
    {
        key:'1',
        orderID:Math.floor(Math.random()*100000000),
        order:['Sony Playstation 5'],
        deliveryDate:`${dayjs('2022-09-01').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Leon Shelton',
        deliveryPricing:`${699} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'2',
        orderID:Math.floor(Math.random()*100000000),
        order:['Apple Air Pods 2nd Gen','Apple Watch Series 3'],
        deliveryDate:`${dayjs('2022-09-26').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Genesis Martinez',
        deliveryPricing:`${799} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'3',
        orderID:Math.floor(Math.random()*100000000),
        order:['Huawei Matebook 14s (Linux Preinstalled'],
        deliveryDate:dayjs('2022-06-15').format('DD.MM.YYYY'),
        customer:'Takuma Watanabe',
        deliveryPricing:`${2199} $`,
        deliveryStatus:'Delievered'
    },
    {
        key:'4',
        orderID:Math.floor(Math.random()*100000000),
        order:['Seagate Portable 2TB External Hard Drive'],
        deliveryDate:`${dayjs('2022-11-04').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Leon Shelton',
        deliveryPricing:`${499} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'5',
        orderID:Math.floor(Math.random()*100000000),
        order:['Apple Pencil (2nd Generation), White'],
        deliveryDate:`${dayjs('2022-08-27').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'6',
        orderID:Math.floor(Math.random()*100000000),
        order:['Razer Basilisk V3'],
        deliveryDate:`${dayjs('2022-10-03').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Frederick Caldwell',
        deliveryPricing:`${75} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'7',
        orderID:Math.floor(Math.random()*100000000),
        order:['Apple Pencil (1st Generation), White'],
        deliveryDate:'-',
        customer:'Justin Fowler',
        deliveryPricing:`${19.99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'8',
        orderID:Math.floor(Math.random()*100000000),
        order:['Sony Playstation 5'],
        deliveryDate:dayjs('2022-08-03').format('DD.MM.YYYY'),
        customer:'Wade Owens',
        deliveryPricing:`${699} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'9',
        orderID:Math.floor(Math.random()*100000000),
        order:['Matein Travel Laptop Backpack'],
        deliveryDate:`${dayjs('2022-08-28').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Tracey Silva',
        deliveryPricing:`${199} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'10',
        orderID:Math.floor(Math.random()*100000000),
        order:['Sony Playstation 5','Razer Kraken Gaming Headset, Pink'],
        deliveryDate:dayjs('2022-07-18').format('DD.MM.YYYY'),
        customer:'Willie Gray',
        deliveryPricing:`${839} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'11',
        orderID:Math.floor(Math.random()*100000000),
        order:['AMD Radeon RX 6500 XT'],
        deliveryDate:`${dayjs('2022-09-01').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Hamada Chiyo',
        deliveryPricing:`${1075} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'12',
        orderID:Math.floor(Math.random()*100000000),
        order:['Macbook Air Pro 2022'],
        deliveryDate:`${dayjs('2022-09-15').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Nonaka Michi',
        deliveryPricing:`${3999} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'13',
        orderID:Math.floor(Math.random()*100000000),
        order:['Apple Air Pods 2nd Gen'],
        deliveryDate:dayjs('2022-06-12').format('DD.MM.YYYY'),
        customer:'Takuma Watanabe',
        deliveryPricing:`${299} $`,
        deliveryStatus:'Delievered'
    },
    {
        key:'14',
        orderID:Math.floor(Math.random()*100000000),
        order:['Microsoft Surface Pro 2'],
        deliveryDate:'',
        customer:'Clara Mcdonalid',
        deliveryPricing:`${1385} $`,
        deliveryStatus:'Canveled'
    },
    {
        key:'15',
        orderID:Math.floor(Math.random()*100000000),
        order:['Logitech G PRO X'],
        deliveryDate:dayjs('2022-06-23').format('DD.MM.YYYY'),
        customer:'Nomura Shizuko',
        deliveryPricing:`${55} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'16',
        orderID:Math.floor(Math.random()*100000000),
        order:['Sony Playstation 5'],
        deliveryDate:dayjs('2022-06-11').format('DD.MM.YYYY'),
        customer:'Kaneko Yuu',
        deliveryPricing:`${699} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'17',
        orderID:Math.floor(Math.random()*100000000),
        order:['Huawei Matebook 14s (Linux Preinstalled)'],
        deliveryDate:dayjs('2022-04-10').format('DD.MM.YYYY'),
        customer:'Kylie Welch',
        deliveryPricing:`${2199} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'18',
        orderID:Math.floor(Math.random()*100000000),
        order:['SAMSUNG Galaxy Tab A8 '],
        deliveryDate:dayjs('2022-02-09').format('DD.MM.YYYY'),
        customer:'Yokoyama Shou',
        deliveryPricing:`${215} $`,
        deliveryStatus:'Delivered'
    },

]

export const columns:ColumnsType<DataType> = [
    {
        title:'Order ID',
        dataIndex:'orderID',
        key:'orderID'
    },
    {
        title:'Order',
        dataIndex:'order',
        key:'order',
        render: (_, { order }) => (
            <>
              {order.map(orderData => {
                return (
                  <Tag color={'geekblue'} key={orderData}>
                    {orderData.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
    },
    {
        title:'Delivery Date',
        dataIndex:'deliveryDate',
        key:'deliveruDate'
    },
    {
        title:'Customer',
        dataIndex:'customer',
        key:'customer'
    },
    {
        title:'Delivery Pricing',
        dataIndex:'deliveryPricing',
        key:'deliveryPricing'
    },
    {
        title:'Delivery Status',
        dataIndex:'deliveryStatus',
        key:'deliveryStatus',
        render: (_, { deliveryStatus }) => (
            <>
                <Tag color={''} key={deliveryStatus}>
                    {deliveryStatus}
                </Tag>
            </>
          ),
    },
]