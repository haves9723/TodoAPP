import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubTaskItem = ({ index, subTask }) => {
  console.log("sub",subTask);
  return (
    <View key={index} style={styles.container}>
      <Text style={styles.subTaskText}>{subTask.text}</Text>
    </View>
  )
}

export default SubTaskItem

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  subTaskText: {
    marginLeft: 15,
    fontSize: 20,
    color: 'white'
  }
})