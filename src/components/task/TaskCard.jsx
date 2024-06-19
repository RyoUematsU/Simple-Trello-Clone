import React, { useState } from 'react'
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";
import { Draggable } from 'react-beautiful-dnd';


const TaskCard = ({taskCardsList,setTaskCardsList,taskCard,index}) => {
  const [inputText,setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.draggableId} index={index}>
      {(provided) => (
        <div 
          className='TaskCard'
          {...provided.draggableProps}
          ref={provided.innerRef}
          >
          <div className='taskCardTitleAndTaskCardDeleteButton' {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton 
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
              />
          </div> 
        <TaskAddInput
          inputText={inputText}
          setInputText={setInputText}
          setTaskList={setTaskList}
          taskList={taskList}/>
        <Tasks 
          inputText={inputText}
          taskList={taskList}
          setTaskList={setTaskList}
          />
      </div>
      )}
      
    </Draggable>
  );
};

export default TaskCard
