import React from 'react';
import { View, StyleSheet } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <View style={styles.listContainer}>
      {todos.map(({ id, text, ...rest }) => (
        <Todo
          key={id || text}
          todo={{ id, text, ...rest }}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    gap: 10, // or use margin inside <Todo /> if unsupported
  },
});

export default TodoList;
