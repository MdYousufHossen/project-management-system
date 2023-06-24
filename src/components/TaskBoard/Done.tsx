import { useDrop } from "react-dnd";
import TaskCard from "~/container/TaskCard";
import { useTaskUpdateMutation } from "~/feautres/task/taskApi";
import Container from "../Container";
import TaskHeader from "../TaskHeader";

const Done = ({ data }: { data: taskTypeRes[] }) => {
    const [taskUpdate] = useTaskUpdateMutation();
    const [{ isOver }, drop] = useDrop({
        accept: "task",
        drop: (item: taskType) => {
            addDropData(item);
        },
        collect: (monitor) => {
            const itemVisible = data.find((p) => p._id === monitor.getItem()?._id);
            return {
                isOver: !!monitor.isOver() && !itemVisible,
            };
        },
    });

    const addDropData = (dropData: taskType) => {
        const projectVisiblety = data.find((p) => p._id === dropData._id);
        if (!projectVisiblety) {
            taskUpdate({
                id: dropData._id,
                data: { status: "Done" },
            });
        }
    };
    return (
        <div ref={drop} style={{ backgroundColor: isOver ? "gray" : "", borderRadius: "10px" }}>
            <TaskHeader name="Done" count={data.length} />
            <Container height="fit-content" width="330px" brb="10px" brt="10px" displayFlex flexCol gap="10px">
                {data.map((project) => (
                    <TaskCard key={project._id as unknown as number} project={project} />
                ))}
            </Container>
        </div>
    );
};

export default Done;
