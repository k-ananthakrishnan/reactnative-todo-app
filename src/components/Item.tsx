import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MyItem } from './AddItem';

const Item = ({ task, toggleTaskStatus, deleteTask }: { task: MyItem, toggleTaskStatus: (id: number) => void, deleteTask: (id: number) => void }) => {
  return (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={{ ...styles.title, textDecorationLine: task.status ? 'line-through' : 'none' }}>
          {task.title}
        </Text>
        <Text style={styles.status}>
          {task.status ? 'Done' : 'Due'}
        </Text>
      </View>
      <Switch
        value={task.status}
        onValueChange={() => toggleTaskStatus(task.id)}
      />
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
      <MaterialIcons name="delete-forever" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    shadowColor: 'black',
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  status: {
    fontSize: 14,
    color: 'grey',
  }
});

export default Item;
