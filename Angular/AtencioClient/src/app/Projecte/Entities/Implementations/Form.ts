import { ICriteria } from '../Interfaces/ICriteria';
import { IForm } from '../Interfaces/IForm';

export class Form implements IForm {
  id!: number;
  criteris!: ICriteria[];
}
