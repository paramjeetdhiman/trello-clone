export type CardDragItem = {
  id: string;
  columnId: string;
  text: string;
  type: "CARD";
};

export type ColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
  columnId?: string;
};

export type DragItem = CardDragItem | ColumnDragItem;
