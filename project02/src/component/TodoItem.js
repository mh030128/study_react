import React, { useContext } from 'react';
import { TodoContext } from '../App';
import { TodoDispatchContext } from '../App';
import './TodoItem.css';

const TodoItem = ({ id, content, isDone, createDate }) => {
    console.log(`${id} TodoItem Update`);
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        alert("삭제하시겠습니까?");
        onDelete(id);
    };
    
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default React.memo(TodoItem) ;