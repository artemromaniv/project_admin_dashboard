import { HomeOutlined, GroupOutlined,StorefrontOutlined,AnalyticsOutlined,AlignVerticalBottom, DataUsageOutlined,SortOutlined,PersonPinOutlined } from "@mui/icons-material";
export const links = [
    {
        title:'Pages',
        content:[
            {
                path:'',
                name:'Home',
                icon: <HomeOutlined/>
            },
            {
                path:'employees',
                name:'Employees',
                icon:<GroupOutlined/>
            },
            {
                path:'customers',
                name:'Customers',
                icon:<PersonPinOutlined/>
            },
            {
                path:'orders',
                name:'Orders',
                icon:<StorefrontOutlined/>
            }
        ]
    },
    {
        title:'Analytics',
        content:[
            {
                path:'budget-sales',
                name:'Budget/Sales',
                icon:<AnalyticsOutlined/>
            },
            {
                path:'yearly-income',
                name:'Yearly Income',
                icon:<AlignVerticalBottom/>
            },
            {
                path:'sales-overview',
                name:'Sales Overview',
                icon:<DataUsageOutlined/>
            },
            {
                path:'best-sellers',
                name:'Best Sellers',
                icon:<SortOutlined/>
            },
        ]
    }
];