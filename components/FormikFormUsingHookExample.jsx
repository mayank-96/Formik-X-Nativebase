import { Input, VStack, Heading, Button, Text } from "native-base";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// With Validation
function FormikFormUsingHookExample() {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Too Short! - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain letters."),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });
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
        NativeBase X Formik X Yup
      </Heading>
      <Input
        type="text"
        placeholder="Name"
        onChangeText={formik.handleChange("name")}
        onBlur={formik.handleBlur("name")}
        value={formik.values.name}
        w="full"
      />
      {formik.errors.name && formik.touched.name ? (
        <Text fontSize="xs" color="danger.500" alignSelf="flex-start">
          {formik.errors.name}
        </Text>
      ) : null}
      <Input
        type="email"
        placeholder="Email"
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        value={formik.values.email}
        w="full"
      />
      {formik.errors.email && formik.touched.email ? (
        <Text fontSize="xs" color="danger.500" alignSelf="flex-start">
          {formik.errors.email}
        </Text>
      ) : null}
      <Input
        type="password"
        placeholder="Password"
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        value={formik.values.password}
        w="full"
      />
      {formik.errors.password && formik.touched.password ? (
        <Text fontSize="xs" color="danger.500" alignSelf="flex-start">
          {formik.errors.password}
        </Text>
      ) : null}
      <Button
        mt="4"
        size="sm"
        w="full"
        onPress={formik.handleSubmit}
        type="submit"
      >
        SUBMIT
      </Button>
    </VStack>
  );
}

export default FormikFormUsingHookExample;
