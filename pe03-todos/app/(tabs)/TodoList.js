import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <View>
      {todos.map((todo) => (
        <Todo
          key={todo.id || todo.text} // use a unique ID if available
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </View>
  );
};

export default TodoList;
