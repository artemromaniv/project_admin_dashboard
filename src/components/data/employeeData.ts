import type {ColumnsType} from 'antd/es/table'

interface DataType {
    key:string,
    employee:string,
    position:string,
    email:string,
    status: string,
    salary:number
}

export const data:DataType[] = [
    {
        key:'1',
        employee:'Ariene Fox',
        position:'Lead UX Designer',
        email:'ariene.fox@example.com',
        status:'Full Time',
        salary:58000
    },
    {
        key:'2',
        employee:'Ariene Fox',
        position:'Lead UX Designer',
        email:'ariene.fox@example.com',
        status:'Full Time',
        salary:58000
    },
]

export const columns:ColumnsType<DataType> = [
    {
        title:'Employee',
        dataIndex:'employee',
        key:'employee'
    },
    {
        title:'Position',
        dataIndex:'position',
        key:'position'
    },
    {
        title:'Email',
        dataIndex:'email',
        key:'email'
    },
    {
        title:'Status',
        dataIndex:'status',
        key:'status'
    },
    {
        title:'Salary/Year $',
        dataIndex:'salary',
        key:'salary'
    },
]

