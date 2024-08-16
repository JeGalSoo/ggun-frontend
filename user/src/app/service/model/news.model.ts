
interface INews {
  id?: number,
  imgLink: string,
  title: string,
  content: string,
  imgSrc: string,
}

interface INewsToday {
  title: string,
  newslist: INews[];
}
