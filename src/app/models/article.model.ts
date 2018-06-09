export class Article {
  constructor (
    public title: string,
    public sector: string;
    public author: string,
    public date: Date,
    public image: HTMLImageElement,
    public content: string,
    public links: String
  ){}
}
