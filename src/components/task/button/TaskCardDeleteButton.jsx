import React from 'react'

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard}) => {

  const taskCardDeleteButton = (id)=>{
    // taskCardを削除する
    setTaskCardsList(taskCardsList.filter((e)=>e.id !== id))
  } 
  return (
    <div>
      <button 
      className='taskcardDeleteButton'
      onClick={() => taskCardDeleteButton(taskCard.id)}>x</button>
    </div>
  )
}

export default TaskCardDeleteButton
