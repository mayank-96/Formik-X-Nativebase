import { HStack, NativeBaseProvider } from "native-base";
import FormikFormExample from "./components/FormikFormExample";
import FormikFormUsingHookExample from "./components/FormikFormUsingHookExample";
import FormikValidFormExample from "./components/FormikValidFormExample";
import NativebaseFormExample from "./components/NativebaseFormExample";

export default function App() {
  return (
    <NativeBaseProvider>
      <HStack
        h="full"
        w="100%"
        justifyContent="center"
        p="32"
        bg="gray.300"
        alignItems="center"
        flexWrap="wrap"
      >
        {/* <NativebaseFormExample /> */}
        {/* <FormikFormExample /> */}
        <FormikValidFormExample />
        {/* <FormikFormUsingHookExample /> */}
      </HStack>
    </NativeBaseProvider>
  );
}
