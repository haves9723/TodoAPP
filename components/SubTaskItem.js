import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const SubTaskItem = ({ index, subTask }) => {
  return (
    <View key={index} style={styles.container}>
      <Pressable>
        <FontAwesome name="square" size={24} color="#555555" />
      </Pressable>
      <Text style={styles.subTaskText}>{subTask}</Text>
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