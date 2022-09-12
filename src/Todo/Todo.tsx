import React, {FC} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

const Todo: FC<{title: string, onDelete: (i: number) => void; idx: number}> = ({title, onDelete, idx}) => {
    return <TouchableOpacity onLongPress={() => onDelete(idx)}>
        <View style={styles.todo}>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>

}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 10
    }
})

export default Todo
