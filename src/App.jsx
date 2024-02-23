import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  // Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { validation } from "./schema";
import {
  AtSignIcon,
  EmailIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
function App() {
  //modal states
  const { isOpen, onOpen, onClose } = useDisclosure();
  //password abstraction states
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  // active form states
  const [activeForm, setActiveform] = useState("");
  const signupInitialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signinInitialValues = {
    username: "",
    password: "",
  };
  const formType = (formtype) => {
    setActiveform(formtype);
    onOpen()
  };
  const handleSubmit = async (actions) => {
    actions.resetForm({
      values: activeForm === "signup" ? signupInitialValues : signinInitialValues,
    });
  };
  return (
    <Flex
      minH={"100vh"}
      w={"100vw"}
      padding={'20px'}
      alignItems={"top"}
      justify={"end"}
      bgImage="url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}    
    >
      <ButtonGroup>
        <Button  bg="#FFF8AC" onClick={()=> formType("signup")}>
          sign up
        </Button>
        <Button bg="#FFF8AC" onClick={()=> formType("signin")} >
          login
        </Button>
      </ButtonGroup>

      <Modal isOpen={isOpen} onClose={onClose} alignItems={"center"}>
        <ModalOverlay />
        <ModalContent bg={"#111"} color={"#e4e4e4"} minH={{base:"auto",md:"400px"}} display={'flex'} justify={"center"}>
           {activeForm ==="signup"?<ModalHeader textAlign={"center"} color={"#fff8ac"}> Signup</ModalHeader>:<ModalHeader textAlign={"center"} color={"#fff8ac"}>Login</ModalHeader>}
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={activeForm === "signup" ? signupInitialValues: signinInitialValues}
              validationSchema={validation}
              onSubmit={(values, actions) => {
                handleSubmit(values, actions);
                console.log(values);
                actions.setSubmitting(false);
              }}
            >
              { activeForm === "signup" ?(<Form>
                <Stack direction={"column"} spacing={8}>
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.username && form.touched.username
                        }
                      >
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <AtSignIcon color="gray.400" />
                          </InputLeftElement>
                          <Input
                            errorBorderColor="crimson"
                            focusBorderColor={"#fff8ac"}
                            placeholder="username"
                            _placeholder={{ color: "gray.400" }}
                            {...field}
                            type="text"
                            id="username"
                          />
                        </InputGroup>

                        <FormErrorMessage color="crimson">
                          {form.errors.username &&
                            form.touched.username &&
                            form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <EmailIcon color="gray.400" />
                          </InputLeftElement>
                          <Input
                            errorBorderColor="crimson"
                            focusBorderColor={"#fff8ac"}
                            placeholder="email"
                            _placeholder={{ color: "gray.400" }}
                            {...field}
                            type="email"
                            id="email"
                          />
                        </InputGroup>

                        <FormErrorMessage color="crimson">
                          {form.errors.email &&
                            form.touched.email &&
                            form.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <LockIcon color="gray.400" />
                          </InputLeftElement>
                          <Input
                            errorBorderColor="crimson"
                            focusBorderColor={"#fff8ac"}
                            placeholder="password"
                            _placeholder={{ color: "gray.400" }}
                            {...field}
                            type={show ? "text" : "password"}
                            id="password"
                          />
                          <InputRightElement width="4.5rem">
                            <Box h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? <ViewOffIcon /> : <ViewIcon />}
                            </Box>
                          </InputRightElement>
                        </InputGroup>

                        <FormErrorMessage color="crimson">
                          {form.errors.password &&
                            form.touched.password &&
                            form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="confirmPassword">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.confirmPassword &&
                          form.touched.confirmPassword
                        }
                      >
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <LockIcon color="gray.400" />
                          </InputLeftElement>
                          <Input
                            errorBorderColor="crimson"
                            focusBorderColor={"#fff8ac"}
                            placeholder="confirm password"
                            _placeholder={{ color: "gray.400" }}
                            {...field}
                            type={show ? "text" : "password"}
                            id="confirmPassword"
                          />
                          <InputRightElement width="4.5rem">
                            <Box h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? <ViewOffIcon /> : <ViewIcon />}
                            </Box>
                          </InputRightElement>
                        </InputGroup>

                        <FormErrorMessage color="crimson">
                          {form.errors.confirmPassword &&
                            form.touched.confirmPassword &&
                            form.errors.confirmPassword}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Text fontSize="sm">Already have an account?</Text>
                  <Button
                    alignSelf={"center"}
                    w={"150px"}
                    bg={"#fff8ac"}
                    type="submit"
                    variant={"ghost"}
                    _hover={{ background: "#fff8ac" }}
                  >
                    Signup
                  </Button>
                </Stack>
              </Form>):(<Form>
                <Stack direction={"column"} spacing={8}>
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.username && form.touched.username
                        }
                      >
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <AtSignIcon color="gray.400" />
                          </InputLeftElement>
                          <Input
                            errorBorderColor="crimson"
                            focusBorderColor={"#fff8ac"}
                            placeholder="username"
                            _placeholder={{ color: "gray.400" }}
                            {...field}
                            type="text"
                            id="username"
                          />
                        </InputGroup>

                        <FormErrorMessage color="crimson">
                          {form.errors.username &&
                            form.touched.username &&
                            form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <LockIcon color="gray.400" />
                          </InputLeftElement>
                          <Input
                            errorBorderColor="crimson"
                            focusBorderColor={"#fff8ac"}
                            placeholder="password"
                            _placeholder={{ color: "gray.400" }}
                            {...field}
                            type={show ? "text" : "password"}
                            id="password"
                          />
                          <InputRightElement width="4.5rem">
                            <Box h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? <ViewOffIcon /> : <ViewIcon />}
                            </Box>
                          </InputRightElement>
                        </InputGroup>

                        <FormErrorMessage color="crimson">
                          {form.errors.password &&
                            form.touched.password &&
                            form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Text fontSize="sm">Forgot Password?</Text>
                  <Button
                    alignSelf={"center"}
                    w={"150px"}
                    bg={"#fff8ac"}
                    type="submit"
                    variant={"ghost"}
                    _hover={{ background: "#fff8ac" }}
                  >
                    login
                  </Button>
                </Stack>
              </Form>)}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default App;
