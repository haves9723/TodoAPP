import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import SubTaskItem from './SubTaskItem';

const TaskItem = ({ index, task, onUpdateTask, isSelected, handleSelectedTask }) => {
    return (
        <Pressable key={index} style={[styles.taskContainer, { backgroundColor: isSelected ? '#222222' : '#111111'}]} onPress={() => handleSelectedTask(task)}>
            {!task.completed
                ?
                <Pressable onPress={() => onUpdateTask(!task.completed)}>
                    <FontAwesome name="square" size={24} color="#555555" />
                </Pressable>
                :
                <Pressable onPress={() => onUpdateTask(!task.completed)}>
                    <FontAwesome name="check-square" size={24} color="#FF5A60" />
                </Pressable>
            }
            <Text style={styles.taskText}>{task.text}</Text>
            <Text style={styles.taskText}>{task.subTaskList[0].text}</Text>
            {   
                task.subTaskList.map((item, index) => {
                    return (
                    <SubTaskItem
                        index={index}
                        subTask={item}>
                    </SubTaskItem>
                    )
                })
            }
        </Pressable>
    )
}

export default TaskItem

const styles = StyleSheet.create({
    taskContainer: {
        paddingVertical: 18,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    taskText: {
        marginLeft: 15,
        color: 'white',
        fontSize: 20
    },
})