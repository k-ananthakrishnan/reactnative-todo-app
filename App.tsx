import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AddItem, { MyItem } from './src/components/AddItem';
import Item from './src/components/Item';

const App = () => {
  const [tasks, setTasks] = useState<MyItem[]>([]);

  const toggleTaskStatus = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header title='ToDo App' />
      </View>
      <AddItem tasks={tasks} setTasks={setTasks} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Item 
            task={item} 
            toggleTaskStatus={toggleTaskStatus} 
            deleteTask={deleteTask} 
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1ecff',
  },
  headerContainer: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default App;
