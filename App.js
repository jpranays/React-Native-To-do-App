import React, { useState } from "react";
import {
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
	View,
} from "react-native";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Todo from "./Components/Todos";
export default function App() {
	const [todoValue, setTodoValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
			style={{
				zIndex: 2,
			}}
		>
			<View>
				<Header />
				<Form
					todo={todoValue}
					updateTodo={setTodoValue}
					todos={todos}
					setTodos={setTodos}
				/>
				<ScrollView
					style={{
						marginHorizontal: 20,
						marginVertical: 20,
					}}
				>
					{todos.map(({ id, value }) => (
						<Todo key={id.toString(2)} title={value} updateTodo={setTodos} />
					))}
				</ScrollView>
			</View>
		</TouchableWithoutFeedback>
	);
}
