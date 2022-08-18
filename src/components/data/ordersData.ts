import type {ColumnsType} from 'antd/es/table'
import dayjs from 'dayjs'
interface DataType {
    key:number,
    orderID:number,
    customer:string,
    order:string[],
    deliveryDate:string,
    deliveryPricing:string,
    deliveryStatus:string

}

export const data: DataType[] = [
    {
        key:747498,
        orderID:747498,
        order:['boat'],
        deliveryDate:dayjs('2022-05-25').format('DD.MM.YYYY'),
        customer:'dude',
        deliveryPricing:`${93} $`,
        deliveryStatus:'continue'
    }
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
        title:'Delivery Pricing $',
        dataIndex:'deliveryPricing',
        key:'deliveryPricing'
    },
    {
        title:'Delivery Status',
        dataIndex:'deliveryStatus',
        key:'deliveryStatus'
    },
]