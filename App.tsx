import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AddItem, { MyItem } from './src/components/AddItem';
import Item from './src/components/Item';
import { FIREBASE_DB } from './FirebaseConfig';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const App = () => {
  const [tasks, setTasks] = useState<MyItem[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIREBASE_DB, 'tasks'), (snapshot) => {
      const tasksArray: MyItem[] = [];
      snapshot.forEach((doc) => {
        tasksArray.push({ id: doc.id, title: doc.data().title, status: doc.data().status });
      });
      setTasks(tasksArray);
    });

    return () => unsubscribe();
  }, []);

  const toggleTaskStatus = async (id: string) => {
    const taskRef = doc(FIREBASE_DB, 'tasks', id);
    const task = tasks.find(task => task.id === id);
    if (task) {
      await updateDoc(taskRef, { status: !task.status });
    }
  };

  const deleteTask = async (id: string) => {
    const taskRef = doc(FIREBASE_DB, 'tasks', id);
    await deleteDoc(taskRef);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header title='ToDo App' />
      </View>
      <AddItem tasks={tasks} setTasks={setTasks} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
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
