import React from 'react';
import './App.scss';
import Title from './Components/Title'
import Task from './Components/Task'
import AddBtn from './Components/AddBtn';
import {useSelector} from 'react-redux'
import ContentTask from './Components/TaskContent/ContentTask';
import CreateContentTask from './Components/TaskContent/CreateContentTask';

const App = () => {

  const tasks = useSelector(state => state.taskReducer.tasks);
  const taskContents = useSelector(state => state.contentTaskReducer.tasksContents);
  const bgColours = ['blue', 'orange', 'yellow', 'purple', 'green', 'red', 'pink', 'blue_green', 'blue_pink',]
  
  return (
    <div className="App">
      <div className="todo">
        <div className="todo__leftSide">
          <Title name="react" secondname="todo"> </Title>
          <div className="todo__leftSide-tasks">
           {tasks.length > 0 ? <Task items={tasks} />: ''}
          </div>
          <AddBtn tasks={tasks} bgColours={bgColours} name={'ADD TASK'} />
        </div>
        <div className="todo__rightSide">
          {tasks.length !== taskContents.length ? <CreateContentTask /> : <ContentTask />}
       </div>
      </div>

    </div>
  );
}

export default App;
