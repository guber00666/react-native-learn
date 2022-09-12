import React, {FC, useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";


const AddTodo: FC<{onAdd: (e: string) => void }> = ({onAdd}) => {
    const [text, setText] = useState("")
    return <View style={styles.block}>
        <TextInput onChangeText={setText} value={text} style={styles.input}/>
        <Button title={"Добавить"} onPress={onPress} />
    </View>

    function onPress()  {
        if(text.trim()) {
            onAdd(text);
            setText('')
        } else {
            Alert.alert("Поле не должно быть пустым!!!")
        }
    }
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: '70%',
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3934ab",
        padding: 10
    },
    button: {

    }
})

export default AddTodo
