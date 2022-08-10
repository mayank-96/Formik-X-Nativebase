import { Input, VStack, Heading, Button } from "native-base";
import React from "react";
import { Formik } from "formik";

// Without Validation
function FormikFormExample() {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <VStack
          space="4"
          bg="white"
          minW="350px"
          p="12"
          borderRadius="lg"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="lg" mb="8">
            NativeBase X Formik
          </Heading>
          <Input
            type="text"
            placeholder="Name"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            w="full"
          />
          <Input
            type="email"
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            w="full"
          />
          <Input
            type="password"
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            w="full"
          />
          <Button
            mt="4"
            size="sm"
            w="full"
            onPress={handleSubmit}
            type="submit"
          >
            SUBMIT
          </Button>
        </VStack>
      )}
    </Formik>
  );
}

export default FormikFormExample;
