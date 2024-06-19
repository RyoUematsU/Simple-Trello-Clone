import React from 'react'
import {v4 as uuid} from 'uuid'


const AddTaskCardBottun = ({taskCardsList, setTaskCardsList}) => {
    const addTaskCard = () => {
      const taskCardId = uuid();
      // taskcardを追加する
      setTaskCardsList([...taskCardsList,
        {
          id:taskCardId,
          draggableId: `item${taskCardId}`
        },
       ])
       console.log(setTaskCardsList);
    }
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardBottun
