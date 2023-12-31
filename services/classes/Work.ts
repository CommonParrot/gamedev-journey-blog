import WorkModel from '../models/WorkModel.js';
import WorkMetaInfo from './WorkMetaInfo.js';

class Work extends WorkMetaInfo {
  work: WorkModel;

  constructor(work: WorkModel) {
    super();
    this.work = work;
  }

  getWork(): WorkModel {
    return this.work;
  }

  getContent(): string {
    return this.work.content;
  }
}

export default Work;
