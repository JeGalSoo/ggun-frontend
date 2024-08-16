import Today from "../date/today"


export const StockRankingDummy = [
    { id: 1, stock: '삼성전자', now: 7400, volume: 420000, total: '5조천억', imgSrc: `/stockLogo/samsung.jpg` },
    { id: 2, stock: 'SK하이닉스', now: 7400, volume: 420000, total: '3조천억', imgSrc: `/stockLogo/sk.jpg` },
    { id: 3, stock: 'DB하이텍', now: 7400, volume: 420000, total: '2조천억', imgSrc: `/stockLogo/db.jpg` },
    { id: 4, stock: '네페스', now: 7400, volume: 420000, total: '3조천억', imgSrc: `/stockLogo/nepes.jpg` },
    { id: 5, stock: '후성', now: 7400, volume: 420000, total: '1조천억', imgSrc: `/stockLogo/foosung.jpg` },
    { id: 6, stock: 'LG전자', now: 7400, volume: 420000, total: '4조천억', imgSrc: `/stockLogo/lg.jpg` },
    { id: 7, stock: 'LS일렉트릭', now: 7400, volume: 420000, total: '1조천억', imgSrc: `/stockLogo/lsElec.jpg` },
    // { id: 9, stock: 'SK시그넷', now: 7400, volume: 420000, total: '1조천억', imgSrc: `/stockLogo/sk.jpg` },
    { id: 8, stock: '모트렉스', now: 7400, volume: 420000, total: '1조천억', imgSrc: `/stockLogo/motrex.jpg` },
    { id: 9, stock: '원익피앤이', now: 7400, volume: 420000, total: '1조천억', imgSrc: `/stockLogo/wonik.jpg` },
    { id: 10, stock: '신세계I&C', now: 7400, volume: 420000, total: '1조천억', imgSrc: `/stockLogo/ssg.jpg` },
    { id: 11, stock: '프로텍', now: 6400, volume: 420000, total: '1조천억', imgSrc: `/stockLogo/protec.jpg` },
]

export const stockList = [
    { id: 1, name: '삼성전자', code : '005930', imgSrc: `/stockLogo/samsung.jpg` },
    { id: 2, name: 'SK하이닉스', code : '000660', imgSrc: `/stockLogo/sk.jpg` },
    { id: 3, name: 'DB하이텍', code : '000990', imgSrc: `/stockLogo/db.jpg` },
    { id: 4, name: '네페스', code : '033640', imgSrc: `/stockLogo/nepes.jpg` },
    { id: 5, name: '후성', code : '093370', imgSrc: `/stockLogo/foosung.jpg` },
    { id: 6, name: 'LG전자', code : '066570', imgSrc: `/stockLogo/lg.jpg` },
    { id: 7, name: 'LS일렉트릭', code : '010120', imgSrc: `/stockLogo/lsElec.jpg` },
    // { id: 8, name: 'SK시그넷', code : '005930', imgSrc: `/stockLogo/sk.jpg` },
    { id: 8, name: '모트렉스', code : '118990', imgSrc: `/stockLogo/motrex.jpg` },
    { id: 9, name: '원익피앤이', code : '217820', imgSrc: `/stockLogo/wonik.jpg` },
    { id: 10, name: '신세계I&C', code : '035510', imgSrc: `/stockLogo/ssg.jpg` },
    { id: 11, name: '프로텍', code : '053610', imgSrc: `/stockLogo/protec.jpg` },
]

// export const stockInfoTitle:IItems[] =[
//     {id:1, title:'전일', data:'16,000', color:''},
//     {id:2, title:'시가', data:'16,170', color:'text-red-400'},
//     {id:3, title:'고가', data:'16,680', color:'text-red-400'},
//     {id:4, title:'저가', data:'15,820', color:'text-blue-400'},
//     {id:5, title:'거래량', data:'11,440,528', color:'t'},
//     {id:6, title:'대금', data:'189,787백만', color:''},
//     {id:7, title:'시총', data:'3조 1,360억', color:''},
//     {id:8, title:'외인소진율', data:'6.93%', color:''},
//     {id:9, title:'PER', data:'28.61', color:''},
//     {id:10, title:'EPS', data:'588원', color:''},
//     {id:11, title:'추정PER', data:'', color:''},
//     {id:12, title:'추정EPS', data:'', color:''},
//     {id:13, title:'PBR', data:'2.19', color:''},
//     {id:14, title:'BPS', data:'7,669원', color:''},
//     {id:15, title:'배당수익률', data:'', color:''},
//     {id:16, title:'주당배당금', data:'', color:''},
// ]

export const stockInfoDummy:IItems = {
    id : '1',
    item: '삼성전자',
    open: '16170',
    high: '16820',
    low: '15820',
    close: '16000',
    adjClose: '16000',
    volume: '11440528',
    date: Today(),
}