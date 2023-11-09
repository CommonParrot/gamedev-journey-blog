import ArticleMetaInfoModel from './ArticleMetaInfoModel.js';

interface ArticleModel extends ArticleMetaInfoModel {
  content: string;
}

export default ArticleModel;
