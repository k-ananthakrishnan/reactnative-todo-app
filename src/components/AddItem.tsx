import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig';

export interface MyItem {
  id: string;
  title: string;
  status: boolean;
}

const AddItem = ({ tasks, setTasks }: { tasks: MyItem[], setTasks: React.Dispatch<React.SetStateAction<MyItem[]>> }) => {
  const [title, setTitle] = useState('');

  const addItem = async () => {
    if (!title) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }
    const newTask = {
      title,
      status: false,
    };
    await addDoc(collection(FIREBASE_DB, 'tasks'), newTask);
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Task..."
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Button
        title="Add Task"
        onPress={addItem}
        disabled={!title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    padding: 8,
    marginVertical: 10,
    marginRight: 10,
    borderColor: '#6200EE',
    borderWidth: 2,
    borderRadius: 5,
  },
  button: {
    padding: 8
  }
});

export default AddItem;
