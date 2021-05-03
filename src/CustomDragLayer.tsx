import { useDragLayer } from "react-dnd";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { Card } from "./Card";
import { DragPreviewWrapper, CustomDragLayerContainer } from "./styles";

// useDragLayer - will provide us the information about the dragged item.

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "COLUMN" ? (
          <Column id={draggedItem.id} text={draggedItem.text} isPreview />
        ) : (
          <Card
            text={draggedItem.text}
            id={draggedItem.id}
            isPreview
            columnId={draggedItem.columnId}
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
