import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const TaskInput = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setNewTask({ target }) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit} className="col-12 md:col-4">
        <div className="p-inputgroup">
          <InputText
            placeholder="Digite uma nova tarefa"
            onChange={setNewTask}
          />
          <Button type="submit" icon="pi pi-plus" />
        </div>
      </form>
    </div>
  )
};

export default TaskInput;