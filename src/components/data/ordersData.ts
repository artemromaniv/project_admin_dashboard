import type {ColumnsType} from 'antd/es/table'
import dayjs from 'dayjs'
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
        orderID:747498,
        order:['boat'],
        deliveryDate:`${dayjs('2022-09-01').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Leon Shelton',
        deliveryPricing:`${1099} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'2',
        orderID:83923080,
        order:['boat'],
        deliveryDate:`${dayjs('2022-09-26').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Genesis Martinez',
        deliveryPricing:`${1799} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'3',
        orderID:4049830,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-06-15').format('DD.MM.YYYY'),
        customer:'Takuma Watanabe',
        deliveryPricing:`${2255.89} $`,
        deliveryStatus:'Delievered'
    },
    {
        key:'4',
        orderID:336287369,
        order:['boat', 'boats', 'boot'],
        deliveryDate:`${dayjs('2022-11-04').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Leon Shelton',
        deliveryPricing:`${26499.89} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'5',
        orderID:463964929,
        order:['boat', 'boats', 'boot'],
        deliveryDate:`${dayjs('2022-08-27').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'6',
        orderID:574574073,
        order:['boat', 'boats', 'boot'],
        deliveryDate:`${dayjs('2022-10-03').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Frederick Caldwell',
        deliveryPricing:`${5399} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'7',
        orderID:87969003,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Justin Fowler',
        deliveryPricing:`${19.99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'8',
        orderID:383833328,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-08-03').format('DD.MM.YYYY'),
        customer:'Wade Owens',
        deliveryPricing:`${8099} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'9',
        orderID:92202787629,
        order:['boat', 'boats', 'boot'],
        deliveryDate:`${dayjs('2022-08-28').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Tracey Silva',
        deliveryPricing:`${299} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'10',
        orderID:2773907320,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-07-18').format('DD.MM.YYYY'),
        customer:'Willie Gray',
        deliveryPricing:`${599} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'11',
        orderID:380923720372,
        order:['boat'],
        deliveryDate:`${dayjs('2022-09-01').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Hamada Chiyo',
        deliveryPricing:`${1099} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'12',
        orderID:3837023720397,
        order:['boat'],
        deliveryDate:`${dayjs('2022-09-15').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Nonaka Michi',
        deliveryPricing:`${7799} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'13',
        orderID:4049830,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-06-12').format('DD.MM.YYYY'),
        customer:'Takuma Watanabe',
        deliveryPricing:`${2255.89} $`,
        deliveryStatus:'Delievered'
    },
    {
        key:'14',
        orderID:336287369,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Clara Mcdonalid',
        deliveryPricing:`${399} $`,
        deliveryStatus:'Canveled'
    },
    {
        key:'15',
        orderID:463964929,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-06-23').format('DD.MM.YYYY'),
        customer:'Nomura Shizuko',
        deliveryPricing:`${399} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'16',
        orderID:6089764,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-06-11').format('DD.MM.YYYY'),
        customer:'Kaneko Yuu',
        deliveryPricing:`${999} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'17',
        orderID:33586524,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-04-10').format('DD.MM.YYYY'),
        customer:'Kylie Welch',
        deliveryPricing:`${1199} $`,
        deliveryStatus:'Delivered'
    },
    {
        key:'18',
        orderID:146775467,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-02-09').format('DD.MM.YYYY'),
        customer:'Yokoyama Shou',
        deliveryPricing:`${7899} $`,
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
        key:'order'
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
        key:'deliveryStatus'
    },
]