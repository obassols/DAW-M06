export class Article {
    constructor(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
}

export class ArticleRow {
    constructor(article) {
        this.article = article;
        this.quantity = 1;
        this.totalPrice = this.article.price;
    }
}