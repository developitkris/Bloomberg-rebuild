export class Article {
  constructor (
    public title: string,
    public sector: string,
    public author: string,
    public image: String,
    public links: String
  ){}
}

export class Account {
  constructor (
    public firstname: string,
    public lastname: string,
    public email: string,
    public pw: string,
    // public address: Address[] // subclass object
  ){}
}

export class Page {
  constructor (
    public category: string,
    public video: String,
    public article: Article // contain peer class
  ){}
}
