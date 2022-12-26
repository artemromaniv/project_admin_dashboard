import {
    Home,
    Group,
    Store,
    Analytics,
    AlignVerticalBottom,
    DataUsage,
    SortOutlined,
    Person,
} from '@mui/icons-material'
export const links = [
    {
        path: '',
        name: 'Home',
        icon: <Home />,
    },
    {
        path: 'employees',
        name: 'Employees',
        icon: <Group />,
    },
    {
        path: 'customers',
        name: 'Customers',
        icon: <Person />,
    },
    {
        path: 'orders',
        name: 'Orders',
        icon: <Store />,
    },
    {
        path: 'budget-sales',
        name: 'Budget/Sales',
        icon: <Analytics />,
    },
    {
        path: 'yearly-income',
        name: 'Yearly Income',
        icon: <AlignVerticalBottom />,
    },
    {
        path: 'sales-overview',
        name: 'Sales Overview',
        icon: <DataUsage />,
    },
    {
        path: 'best-sellers',
        name: 'Best Sellers',
        icon: <SortOutlined />,
    },
]
