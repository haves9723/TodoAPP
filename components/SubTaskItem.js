import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubTaskItem = (props) => {
  console.log('sub',props);
  return (
    <View key={props.index} style={styles.container}>
      <Text style={styles.subTaskText}>{props.subTask}</Text>
    </View>
  )
}

export default SubTaskItem

const styles = StyleSheet.create({
  container: {
  },

  subTaskText: {
    marginLeft: 15,
    fontSize: 20,
    color: 'white'
  }
})