import { createContext, useContext, FC, Dispatch } from "react";
import { appStateReducer, AppState, List, Task } from "./appStateReducere";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

/// dummy state for showcase
const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn TypeScript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],

  draggedItem: null,
};

/// types for create context
type AppStateContextProps = {
  draggedItem: DragItem | null;
  lists: List[];
  getTaskByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

/// create context
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

/// make provider
export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { draggedItem, lists } = state;

  const getTaskByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ draggedItem, lists, getTaskByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
