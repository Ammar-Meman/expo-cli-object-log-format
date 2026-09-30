import { Text, View } from "react-native";

export default function App() {
  const student = {
    name: "Ammar",
    age: 39,
    course: "React-Native",
  };

  const jsonData = JSON.stringify(student);
  const parsedData = JSON.parse(jsonData);

  console.log("Original object:", student);
  console.log("Original type:", typeof student);

  console.log("Stringified value:", jsonData);
  console.log("Stringified type:", typeof jsonData);

  console.log("Parsed object:", parsedData);
  console.log("Parsed type:", typeof parsedData);

  return (
    <View>
      <Text>Check the Expo CLI terminal logs.</Text>
    </View>
  );
}
