import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

function App() {
  const [input, setInput] = useState({
    value: '',
    id: '',
    done: false
  })
  const [data, setData] = useState([])
  const submitH = () => {
    console.warn(input);
    let arr = [...data, input]
    setData(arr)
  }
  return (
    <ScrollView>
      <View >
        <Text style={styles.heading}> Todo App</Text>
        <Text style={{ textAlign: 'center' }}>By Ameen_Ansari</Text>
      </View>
      <View style={{ marginTop: 42, alignItems: 'center' }}>
        <TextInput value={input} onChangeText={(text) => setInput({
          ...input,
          value: text
        })} style={styles.input} placeholder='Enter Your Todo...' />
        <Text onPress={submitH} style={styles.addbtn}>Add Todo</Text>
      </View>
      <ScrollView >
        <TouchableOpacity style={styles.itemsP}>
          {
            data.map((todo, i) => {
              return (
                <View style={styles.itemsC}>
                  <Text key={i} style={styles.items}>{todo.value}
                  </Text>
                  <TouchableOpacity style={styles.items2}>
                    <Text style={styles.delete}>del</Text>
                    <Text style={styles.update}>update</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}


let styles = StyleSheet.create({
  heading: { marginTop: 16, fontWeight: 600, textAlign: 'center', fontSize: 32, color: 'black' },
  input: { width: '90%', borderRadius: 5, borderColor: 'black', borderWidth: 1, fontSize: 16 },
  addbtn: { backgroundColor: 'gray', borderColor: 'black', borderWidth: 1, padding: 5, textAlign: 'center', fontWeight: 600, color: 'white', width: '60%', fontSize: 16, borderRadius: 9, marginTop: 10 },
  itemsP: {
    width: '95%',
    display: 'flex',
    margin: '2.5%',
    gap: 5
  },
  itemsC: {
    flexDirection: 'row',
    borderColor: 'black',
    borderRadius: 6,
    borderWidth: 1,
  }
  ,
  items: {
    textAlign: 'left',
    padding: 5,
    flex: 2.5,
    color: 'black',
    fontWeight: 600,
    fontSize: 18
  },
  items2: {
    flexDirection: 'row',
    flex: 1.5,
    textAlign: 'left',
    padding: 5,
    color: 'black',
    fontWeight: 600,
    fontSize: 18,
    alignItems:"center",
    gap:2
  },
  delete:{
    flex:1,
    color: 'black',
    fontWeight: 600,
    fontSize: 18
  }
  ,update:{
    flex:1,
    color: 'black',
    fontWeight: 600,
    fontSize: 18
  }

})

export default App;
