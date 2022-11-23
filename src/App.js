import './App.css';
import List from './components/list-Item/List';
import TaskInput from './components/task-input/TaskInput';
import React, { useState } from 'react';
import FilterItems from './components/filter-list/Filter';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState('');

  function addNewTask(task) {
    const itemsCopy = Array.from(tasks);
    itemsCopy.push({ id: tasks.length, value: task, check: false });
    setTasks(itemsCopy);
  }

  function deleteTask(index) {
    const itemsCopy = Array.from(tasks);
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  }

  function updateTask({ target }, index) {
    const itemsCopy = Array.from(tasks);
    itemsCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itemsCopy);
  }

  function checkTask(index) {
    const itemsCopy = Array.from(tasks);
    itemsCopy[index].check = !itemsCopy[index].check
    setTasks(itemsCopy);
  }

  function filteredTasks() {
    if (filter === 'pending') {
      return tasks.filter(task => !task.check)
    } else if (filter === 'completed') {
      return tasks.filter(task => task.check)
    }
    return tasks
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className='Header'>
          <TaskInput onSubmit={addNewTask} />
          <FilterItems
            handleSelect={(value) => setFilter(value)}
            filter={filter}
          />
        </div>
        <div className='List'>
          {
            filteredTasks().length ?
              filteredTasks().map(({ id, value, check }, index) => (
                <List
                  key={id}
                  value={value}
                  checked={check}
                  onChange={(event) => updateTask(event, index)}
                  onDelete={() => deleteTask(index)}
                  handleCheck={() => checkTask(index)}
                />
              ))
              : <h4 className='Empty'>Nenhuma tarefa encontrada!</h4>
          }
        </div>
      </div>
    </div>
  )
}

export default App;