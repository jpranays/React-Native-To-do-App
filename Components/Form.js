import React from "react";
import { View, TextInput, Button, Alert, Keyboard } from "react-native";
export default function Form({ todo, updateTodo, setTodos }) {
	return (
		<View
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: 10,
				flexDirection: "row",
			}}
		>
			<TextInput
				placeholder="Add To-Do"
				style={{
					borderBottomWidth: 2,
					textAlign: "center",
					width: "65%",
					fontSize: 20,
					paddingBottom: 10,
					marginRight: 10,
					borderColor: "gray",
				}}
				onChangeText={(e) => {
					updateTodo(e);
				}}
				value={todo}
			/>
			<Button
				title="Update"
				color="orange"
				onPress={() => {
					if (todo.length < 3) {
						Alert.alert("Oops!", "Todos must be over 3 chars long", [
							{
								text: "UnderStood",
								onPress: () => {
									console.log("Alert Closed ");
								},
							},
							// {
							// 	text: "Nope",
							// 	onPress: () => {
							// 		console.log("Alert Closed ");
							// 	},
							// },
							// {
							// 	text: "Don't know",
							// 	onPress: () => {
							// 		console.log("Alert Closed ");
							// 	},
							// },
						]);
					} else {
						setTodos((prev) => [...prev, { id: prev.length + 1, value: todo }]);
					}
					updateTodo("");
					Keyboard.dismiss();
				}}
			/>
		</View>
	);
}
