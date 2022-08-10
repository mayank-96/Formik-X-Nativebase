import {
  Input,
  VStack,
  Heading,
  Button,
  Text,
  Select,
  CheckIcon,
  Radio,
} from "native-base";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// Validation Object
const LoginpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Too Short! - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain letters."),
});

// With Validation
function FormikValidFormExample() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        remember: true,
        service: "ux",
        myRadioGroup: "one",
      }}
      validationSchema={LoginpSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <VStack
          space="4"
          bg="white"
          minW="350px"
          p="12"
          borderRadius="lg"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Heading fontSize="lg" mb="8" alignSelf="center">
            NativeBase X Formik X Yup
          </Heading>
          <Input
            type="text"
            placeholder="Name"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            w="full"
          />
          {errors.name && touched.name ? (
            <Text fontSize="xs" color="danger.500">
              {errors.name}
            </Text>
          ) : null}
          <Input
            type="email"
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            w="full"
          />
          {errors.email && touched.email ? (
            <Text fontSize="xs" color="danger.500">
              {errors.email}
            </Text>
          ) : null}
          <Input
            type="password"
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            w="full"
          />
          {errors.password && touched.password ? (
            <Text fontSize="xs" color="danger.500">
              {errors.password}
            </Text>
          ) : null}
          <Select
            selectedValue={values.service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={handleChange("service")}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={values.myRadioGroup}
            onChange={handleChange("myRadioGroup")}
          >
            <Radio value="one" my={1}>
              One
            </Radio>
            <Radio value="two" my={1}>
              Two
            </Radio>
          </Radio.Group>

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

export default FormikValidFormExample;
