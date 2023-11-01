import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import SubTaskItem from './SubTaskItem';

const TaskItem = ({ index, task, onUpdateTask, isSelected, handleSelectedTask }) => {

    return (
        <Pressable key={index} style={[styles.taskContainer, { backgroundColor: isSelected ? '#222222' : '#111111' }]} onPress={() => handleSelectedTask(task)}>
            <View style={styles.mainTask}>
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
            </View>
            <View>
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
            </View>
        </Pressable>
    )
}

export default TaskItem

const styles = StyleSheet.create({
    taskContainer: {
        paddingVertical: 18,
        paddingLeft: 20,
        flexDirection: 'column',
        alignSelf: 'stretch',
    },

    mainTask: {
        alignItems: 'center',
        flexDirection: 'row'
    },

    taskText: {
        marginLeft: 15,
        color: 'white',
        fontSize: 20
    },
})