import { ICriteria } from '../Interfaces/ICriteria';
import { IValoration } from '../Interfaces/IValoration';

export class Criteria implements ICriteria {
  label!: string;
  valorations!: IValoration[];
}
