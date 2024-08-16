interface IAccount {
    id: number,
    acno?: string,
    receiveAcId?: number,
    acpw?: string,
    balance?: number,
    refundAcno?: string,
    bank?: string,
    briefs?: string,
    tradeType?: string,
    paymentUid?: string,
    regDate?: string,
    modDate?: string,
    pdno? : string,
    avgPrvs? : string, 
    acType? : string,
}

interface IAskTrade {
    pdno: string,
    prdtName: string,
    pdQty: number,
    avgPrvs: number,
    tradeType: string,
    account: number,
    acpw: number,
    sllBuyDvsnCd: number,
    ordDvsnCd: number
}

interface IOwnStock {
     id?: number,
     pdno ?:  String,
     prdtName?:  String,
     pdQty?: number,
     avgPrvs?: number,
     tradeType?:  String,
     account?: number,
     acpw?:  String,
     sllBuyDvsnCd?: number,
     ordDvsnCd?: number,
     profitRatio?: number,
     profitLoss?: number,
     evaluatedAmount?: number,
     buyingAmount?: number,
     regDate?:  String,
     modDate?:  String,
     color?:  String,
     userId?: number,
     ownStock: IOwnStock[]; 
}
