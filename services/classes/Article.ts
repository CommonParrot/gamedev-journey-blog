import ArticleModel from '../models/ArticleModel.js';
import ArticleMetaInfo from './ArticleMetaInfo.js';

class Article extends ArticleMetaInfo {
  article: ArticleModel;

  constructor(article: ArticleModel) {
    super();
    this.article = article;
  }

  getArticle(): ArticleModel {
    return this.article;
  }

  getContent(): string {
    return this.article.content;
  }
}

export default Article;
