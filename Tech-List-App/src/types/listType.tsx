export interface ListItem {
  index: number,
  title: String;
  isChecked: boolean;
  removeItem: (index: number) => void;
  checkItem: (index: number) => void;
}