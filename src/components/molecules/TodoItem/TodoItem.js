import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../atoms/CheckboxInput/Checkbox';
import RemoveButton from '../../atoms/RemoveButton/RemoveButton';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <Checkbox markComplete={ this.props.markComplete } id={id} /> {' '}
          { title }
          <RemoveButton id={id} delTodo={this.props.delTodo} />
        </p>
      </div>
    )
  }
}

TodoItem.propTyes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired 
}

export default TodoItem
