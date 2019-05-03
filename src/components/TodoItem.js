import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'lightgray',
      padding: '10px',
      borderBottom: '2px #000000 dotted',
      alignItems: 'left',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }
  render() {
    const { id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
         <p>
          <input type="checkbox" onChange={this.props.markComplete.bind
            (this,id)}/> {' '}
            { title }
          <button style={btnStyle} onClick= {this.props.delTodo.bind(this, id)}> X </button>
         </p>
      </div>
    );
  }
}
const btnStyle= {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px, 10px',
  curson: 'pointer',
  borderRadius: '50%',
  float: 'right'
}

// Proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
