import { Card } from './card.model';

export interface List {
  id: string;
  title: string;
  position: string;
  cards: Card[];
}
