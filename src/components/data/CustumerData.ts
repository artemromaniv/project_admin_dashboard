import type {ColumnsType} from 'antd/es/table'
import dayjs from 'dayjs'
interface DataType {
    key:string,
    name:string,
    email:string,
    location:string
    lastActive:string
}

export const data:DataType[] = [
    {
        key:'1',
        name:'Tajima Haru',
        email:'tajimaharu@gmail.com',
        location:'Japan',
        lastActive:dayjs('2022-05-25').format('DD.MM.YYYY')
    },
    {
        key:'2',
        name:'Tajima Haru',
        email:'tajimaharu@gmail.com',
        location:'Japan',
        lastActive:dayjs('2022-05-25').format('DD.MM.YYYY')
    },
    {
        key:'3',
        name:'Tajima Haru',
        email:'tajimaharu@gmail.com',
        location:'Japan',
        lastActive:dayjs('2022-05-25').format('DD.MM.YYYY')
    },
    {
        key:'4',
        name:'Tajima Haru',
        email:'tajimaharu@gmail.com',
        location:'Japan',
        lastActive:dayjs('2022-05-25').format('DD.MM.YYYY')
    },

]

export const columns:ColumnsType<DataType> = [
    {
        title:'Name',
        dataIndex:'name',
        key:'name'
    },
    {
        title:'Email',
        dataIndex:'email',
        key:'email'
    },
    {
        title:'Location',
        dataIndex:'location',
        key:'location'
    },
    {
        title:'Last Active',
        dataIndex:'lastActive',
        key:'lastactive'
    }
]