import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";
import Todo from "./src/Todo/Todo";
import {useState} from "react";

type Todo = {
    id: string,
    title: string
}

export default function App() {
    const [list, setList] = useState<Todo[]>([]);

    return (
        <View>
        <Navbar title={"Todo App"} />
            <View style={styles.container}>
             <AddTodo onAdd={handleAdd} />
                <View>
                    {list.map((l, i) => (<Todo onDelete={handleDelete} idx={i} key={l.id} title={l.title}/>))}
                </View>
            </View>
        </View>
    );

    function handleDelete(i: number){
        list.splice(i, 1)
        setList(prevState => [...list])
    }

    function handleAdd(title: string) {
        setList((prevState) => [...prevState, {
            id: Date.now().toString(),
            title
        }])
    }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
      paddingVertical: 20
  }
});
