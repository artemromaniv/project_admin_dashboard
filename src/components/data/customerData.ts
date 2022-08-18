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
        email:'tajima.haru@example.com',
        location:'Japan',
        lastActive:dayjs('2022-05-25').format('DD.MM.YYYY')
    },
    {
        key:'2',
        name:'Jacob Byrd',
        email:'jacob.byrd@example.com',
        location:'UK',
        lastActive:dayjs('2022-04-09').format('DD.MM.YYYY')
    },
    {
        key:'3',
        name:'Justin Fowler',
        email:'justin.fowler@example.com',
        location:'USA',
        lastActive:dayjs('2022-03-08').format('DD.MM.YYYY')
    },
    {
        key:'4',
        name:'Margie Gordon',
        email:'margie.gordon@example.com',
        location:'UK',
        lastActive:dayjs('2022-02-22').format('DD.MM.YYYY')
    },
    {
        key:'5',
        name:'Alex Ortiz',
        email:'alex.ortiz@example.com',
        location:'Germany',
        lastActive:dayjs('2022-01-06').format('DD.MM.YYYY')
    },
    {
        key:'6',
        name:'Frederick Caldwell',
        email:'frederick.caldwell@example.com',
        location:'UK',
        lastActive:dayjs('2022-05-12').format('DD.MM.YYYY')
    },
    {
        key:'7',
        name:'Gregory Howard',
        email:'gregory.howard@example.com',
        location:'USA',
        lastActive:dayjs('2022-01-06').format('DD.MM.YYYY')
    },
    {
        key:'8',
        name:'Hamada Takuma',
        email:'hamada.takuma@example.com',
        location:'Japan',
        lastActive:dayjs('2022-03-18').format('DD.MM.YYYY')
    },
    {
        key:'9',
        name:'Yasuhiro Fujimoto',
        email:'yasuhiro.fujimoto@example.com',
        location:'Japan',
        lastActive:dayjs('2022-02-01').format('DD.MM.YYYY')
    },
    {
        key:'10',
        name:'Travis Gordon',
        email:'travis.gordon@example.com',
        location:'USA',
        lastActive:dayjs('2022-06-10').format('DD.MM.YYYY')
    },
    {
        key:'11',
        name:'Genesis Martinez',
        email:'genesis.martinez@example.com',
        location:'Austria',
        lastActive:dayjs('2022-07-17').format('DD.MM.YYYY')
    },
    {
        key:'12',
        name:'Wade Owens',
        email:'wade.owens@example.com',
        location:'USA',
        lastActive:dayjs('2022-05-25').format('DD.MM.YYYY')
    },
    {
        key:'13',
        name:'Naoki Nagisa',
        email:'naoki.nagisa@example.com',
        location:'Japan',
        lastActive:dayjs('2022-02-16').format('DD.MM.YYYY')
    },
    {
        key:'14',
        name:'Tracey Silva',
        email:'tracey.silva@example.com',
        location:'Spain',
        lastActive:dayjs('2022-06-05').format('DD.MM.YYYY')
    },
    {
        key:'15',
        name:'Hamada Chiyo',
        email:'hamada.chiyo@example.com',
        location:'Japan',
        lastActive:dayjs('2022-05-17').format('DD.MM.YYYY')
    },
    {
        key:'16',
        name:'Jun Yamaguchi',
        email:'jun.yamaguchi@example.com',
        location:'Japan',
        lastActive:dayjs('2022-06-11').format('DD.MM.YYYY')
    },
    {
        key:'17',
        name:'Takuma Watanabe',
        email:'takuma.watanabe@example.com',
        location:'Japan',
        lastActive:dayjs('2022-08-08').format('DD.MM.YYYY')
    },
    {
        key:'18',
        name:'Leon Shelton',
        email:'leon.shelton@example.com',
        location:'USA',
        lastActive:dayjs('2022-07-16').format('DD.MM.YYYY')
    },
    {
        key:'19',
        name:'Willie Gray',
        email:'willie.gray@example.com',
        location:'UK',
        lastActive:dayjs('2022-03-06').format('DD.MM.YYYY')
    },
    {
        key:'20',
        name:'Adrian Hill',
        email:'adrian.hill@example.com',
        location:'Germany',
        lastActive:dayjs('2022-08-05').format('DD.MM.YYYY')
    },
    {
        key:'21',
        name:'Nonaka Michi',
        email:'nonaka.michi@example.com',
        location:'Japan',
        lastActive:dayjs('2022-02-23').format('DD.MM.YYYY')
    },
    {
        key:'22',
        name:'Kaneko Yuu',
        email:'kaneko.yuu@example.com',
        location:'Japan',
        lastActive:dayjs('2021-12-13').format('DD.MM.YYYY')
    },
    {
        key:'23',
        name:'Clara Mcdonalid',
        email:'clara.mcdonalid@example.com',
        location:'USA',
        lastActive:dayjs('2022-04-01').format('DD.MM.YYYY')
    },
    {
        key:'24',
        name:'Leo Johnston',
        email:'leo.johnston@example.com',
        location:'UK',
        lastActive:dayjs('2022-06-10').format('DD.MM.YYYY')
    },
    {
        key:'25',
        name:'Johnanthan Snow',
        email:'johnathansnow@example.com',
        location:'USA',
        lastActive:dayjs('1603-09-19').format('DD.MM.YYYY')
    },
    {
        key:'26',
        name:'John Snow',
        email:'johnsnow@example.com',
        location:'USA',
        lastActive:dayjs('3087-09-19').format('DD.MM.YYYY')
    },
    {
        key:'27',
        name:'Yokoyama Shou',
        email:'yokohama.shou@example.com',
        location:'Japan',
        lastActive:dayjs('2021-11-16').format('DD.MM.YYYY')
    },
    {
        key:'28',
        name:'Kylie Welch',
        email:'kylie.welch@example.com',
        location:'Germany',
        lastActive:dayjs('2021-09-18').format('DD.MM.YYYY')
    },
    {
        key:'29',
        name:'Nomura Shizuko',
        email:'nomura.shizuko@example.com',
        location:'Japan',
        lastActive:dayjs('2021-10-21').format('DD.MM.YYYY')
    },
    {
        key:'30',
        name:'Marsha Gray',
        email:'marsha.gray@example.com',
        location:'Spain',
        lastActive:dayjs('2020-07-02').format('DD.MM.YYYY')
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