import { Input, VStack, Button, Heading } from "native-base";
import React, { useState } from "react";

// Without Validation
function NativebaseFormExample() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateState = (name) => (text) => {
    setState({ ...state, [name]: text });
  };

  const handleSubmit = () => {
    console.log(state);
    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <VStack
      space="4"
      bg="white"
      minW="350px"
      p="12"
      borderRadius="lg"
      alignItems="center"
      justifyContent="center"
      mt="12"
    >
      <Heading fontSize="lg" mb="8">
        NativeBase
      </Heading>
      <Input
        type="text"
        placeholder="Name"
        onChangeText={updateState("name")}
        value={state.name}
        w="full"
      />
      <Input
        type="email"
        placeholder="Email"
        onChangeText={updateState("email")}
        value={state.email}
        w="full"
      />
      <Input
        type="password"
        placeholder="Password"
        onChangeText={updateState("password")}
        value={state.password}
        w="full"
      />
      <Button mt="4" size="sm" w="full" onPress={handleSubmit} type="submit">
        SUBMIT
      </Button>
    </VStack>
  );
}

export default NativebaseFormExample;
