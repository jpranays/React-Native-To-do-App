import React from "react";
import { Text, View } from "react-native";
export default function Header() {
	return (
		<View
			style={{
				backgroundColor: "orange",
				height: 100,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text
				style={{
					fontSize: 30,
					marginTop: 30,
					fontWeight: "bold",
					fontFamily: "monospace",
					color: "white",
				}}
			>
				Todos
			</Text>
		</View>
	);
}
