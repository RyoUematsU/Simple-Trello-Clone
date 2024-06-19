import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
import { useState } from 'react';

function Dragdrop() {
  const [items] = useState([
    {id:0 ,text: 'item0'},
    {id:1 ,text: 'item1'},
    {id:2 ,text: 'item2'}
  ]);

  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1);
    console.log(remove);
    items.splice(result.destination.index, 0, remove[0])  //itemsに格納される値が変更される。items.splice()自体は、取り除いた値を返す。今回は値を取り除いていないのでコンソールで中身を見ると[]になる。 
    
  }

  return (
    <div className='dragDroparea'>
      <p>dragdrop練習用ファイル</p>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>  
            {(provided) => 
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((items, index) => (
                <Draggable draggableId={items.text} index={index} key={items.id}>
                  {(provided) => (
                    <div className='item' 
                      ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {items.text}
                    </div>
                    )
                  }
                </Draggable>
                ))}

                {provided.placeholder}
              </div>
            }
          </Droppable>
        </DragDropContext>

    </div>
  );
}

export default Dragdrop;
