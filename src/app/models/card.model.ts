import { List } from 'postcss/lib/list';

export interface Card {
  id: string;
  title: string;
  description: string;
  position: string;
  list: List;
}
