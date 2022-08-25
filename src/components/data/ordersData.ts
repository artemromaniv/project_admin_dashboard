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
        deliveryDate:dayjs('2022-05-25').format('DD.MM.YYYY'),
        customer:'Leon Shelton',
        deliveryPricing:`${1099} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'2',
        orderID:83923080,
        order:['boat'],
        deliveryDate:`${dayjs('2022-05-25').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Genesis Martinez',
        deliveryPricing:`${1799} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'3',
        orderID:4049830,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-08-25').format('DD.MM.YYYY'),
        customer:'Takuma Watanabe',
        deliveryPricing:`${2255.89} $`,
        deliveryStatus:'Delievered'
    },
    {
        key:'4',
        orderID:336287369,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-07-13').format('DD.MM.YYYY'),
        customer:'Leon Shelton',
        deliveryPricing:`${699} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'5',
        orderID:463964929,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'6',
        orderID:574574073,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'7',
        orderID:87969003,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'8',
        orderID:383833328,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'9',
        orderID:92202787629,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'10',
        orderID:2773907320,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'11',
        orderID:380923720372,
        order:['boat'],
        deliveryDate:dayjs('2022-05-25').format('DD.MM.YYYY'),
        customer:'Leon Shelton',
        deliveryPricing:`${1099} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'12',
        orderID:3837023720397,
        order:['boat'],
        deliveryDate:`${dayjs('2022-05-25').format('DD.MM.YYYY')} (Estimated)`,
        customer:'Genesis Martinez',
        deliveryPricing:`${1799} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'13',
        orderID:4049830,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-08-25').format('DD.MM.YYYY'),
        customer:'Takuma Watanabe',
        deliveryPricing:`${2255.89} $`,
        deliveryStatus:'Delievered'
    },
    {
        key:'14',
        orderID:336287369,
        order:['boat', 'boats', 'boot'],
        deliveryDate:dayjs('2022-07-13').format('DD.MM.YYYY'),
        customer:'Leon Shelton',
        deliveryPricing:`${699} $`,
        deliveryStatus:'Continue'
    },
    {
        key:'15',
        orderID:463964929,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'16',
        orderID:463964929,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'17',
        orderID:463964929,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
    },
    {
        key:'18',
        orderID:463964929,
        order:['boat', 'boats', 'boot'],
        deliveryDate:'-',
        customer:'Adrian Hill',
        deliveryPricing:`${99} $`,
        deliveryStatus:'Canceled'
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