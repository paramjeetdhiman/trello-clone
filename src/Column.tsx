import { useAppState } from "./state/AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./state/actions";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string; /// ?: make optional
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTaskByListId, dispatch } = useAppState();
  const tasks = getTaskByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>

      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
