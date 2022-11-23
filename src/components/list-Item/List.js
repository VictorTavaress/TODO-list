import './List.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ConfirmDialog } from 'primereact/confirmdialog';
import React, { useState } from 'react';

const ListItem = ({ onChange, onDelete, value, checked, handleCheck }) => {
  const [visible, setVisible] = useState('');

  return (
    <div className="Item-container">
      <InputText disabled={checked}
        value={value}
        onChange={onChange}
      />
      <Button icon="pi pi-trash" className="p-button-danger" onClick={() => setVisible(true)} />
      <Button icon="pi pi-check" className="p-button-success" onClick={handleCheck} />
      <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Deseja mesmo excluir esta tarefa?"
        header="Tem Certeza?" icon="pi pi-exclamation-triangle" accept={onDelete} reject={false} />
    </div>

  );
};


export default ListItem;