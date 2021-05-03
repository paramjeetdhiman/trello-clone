import { useRef } from "react";
import { useDrop } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask, moveTask, moveList, setDraggedItem } from "./state/actions";
import { useItemDrag } from "./utils/useItemDrag";
import { isHidden } from "./utils/isHidden";
import { ColumnContainer, ColumnTitle } from "./styles";
import { DragItem } from "./DragItem";

type ColumnProps = {
  text: string; /// ?: make optional
  id: string;
  isPreview?: boolean;
};

export const Column = ({ text, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTaskByListId, dispatch } = useAppState();
  const tasks = getTaskByListId(id);
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],

    hover(item: DragItem) {
      if (!draggedItem) {
        return;
      }
      if (item.type === "COLUMN") {
        dispatch(moveList(draggedItem.id, id));
      } else {
        if (item.columnId === id) {
          return;
        }
        if (tasks.length) {
          return;
        }
        dispatch(moveTask(item.id, null, item.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    },
  });

  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  drag(drop(ref));

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}>
      <ColumnTitle>{text}</ColumnTitle>

      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} columnId={id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
