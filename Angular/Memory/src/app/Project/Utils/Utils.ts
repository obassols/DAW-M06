import { Card } from '../Model/Entites/Implemetations/Card';

export class Utils {
  public static getRandom(max: number): number {
    return Math.round(Math.random() * max);
  }
}
