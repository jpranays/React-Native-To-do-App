import React from "react";
import { View, TouchableNativeFeedback, Text } from "react-native";

function Todos({ title, updateTodo }) {
	let myColors = ["red", "darkblue", "blue", "darkred"];

	return (
		<TouchableNativeFeedback
			onPress={() => {
				updateTodo((prev) => prev.filter(({ value }) => value != title));
			}}
			style={{
				zIndex: 1,
			}}
		>
			<View
				style={{
					backgroundColor:
						myColors[Math.floor(Math.random() * myColors.length)],
					marginHorizontal: 10,
					marginVertical: 30,
					borderRadius: 20,
				}}
			>
				<Text
					style={{
						padding: 20,
						color: "white",
						fontWeight: "bold",
						fontSize: 20,
					}}
				>
					{title}
				</Text>
			</View>
		</TouchableNativeFeedback>
	);
}
export default React.memo(Todos);
