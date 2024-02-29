import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  HStack,
  Button,
  Input,
  Select,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  faChampagneGlasses,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";

const BookingForm = () => {
  // use custom hook for submiting data
  const { submit } = useSubmit();
  // use formik for validation
  const formik = useFormik({
    initialValues: {
      occassion: "birthday",
      guests: "",
      date: "",
      time: "19:00",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    onSubmit: async (values) => {
      const data = JSON.stringify(values, null, 2);

      try {
        await submit(data);
      } catch (error) {
        console.error(error.message);
      }
    },
    //validate form inputs
    validationSchema: Yup.object({
      //occasion
      guests: Yup.string().min(1).required("Required"),
      date: Yup.date().min(new Date(), "The date entered is invalid.").required("Required"),
      //time
      firstName: Yup.string()
        .min(2, "You need at least 2 letters")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "You need to provide at least 2 letters")
        .required("Required"),
      phoneNumber: Yup.string()
        .min(9, "You need to enter at least 9 digits")
        .required("Required"),
    }),
  });

  return (
    <Flex
      maxW={"860px"}
      m={{ sm: "4rem 2rem 8rem 2rem", md: " 4rem auto" }}
      flexDir={"column"}
      alignItems={{ sm: "center" }}
    >
      <Heading
        as={"h2"}
        fontWeight={"regular"}
        fontSize={40}
        mb={16}
        maxW={"80%"}
        pl={{ sm: 4, md: 0 }}
      >
        Let's reserve your table
      </Heading>
      <HStack
        w={"100%"}
        alignItems={{ sm: "center", md: "flex-start" }}
        justifyContent={{ sm: "center", md: "space-between" }}
      >
        <Flex
          w={{sm:"70%", md: "100%"}}
          alignItems={{ sm: "center", md: "flex-start" }}
          justifyContent={{ sm: "center" }}
          m={{ sm: "0 auto", md: "0 auto" }}
        >
          <form
            autoComplete={"off"}
            className={"form"}
            onSubmit={formik.handleSubmit}
          >
            <HStack spacing={8} minW={"30rem"}>
              <FormControl
                isRequired
                isInvalid={!!formik.errors.guests && formik.touched.guests}
              >
                <FormLabel
                  htmlFor="guests"
                  fontWeight={"extrabold"}
                  fontSize={"20px"}
                >
                  Number of people
                </FormLabel>
                <Input
                  name="guests"
                  type="number"
                  placeholder="1"
                  id="guests"
                  mb={8}
                  {...formik.getFieldProps("guests")}
                />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>

              {/*Research about formik validation with options*/}
              <FormControl>
                <FormLabel
                  htmlFor="occasion"
                  backgroundColor={"White"}
                  py={2}
                  px={4}
                  borderRadius={16}
                  fontWeight={"extrabold"}
                  fontSize={"20px"}
                  color={"Green"}
                  mt={"1rem"}
                >
                  <FontAwesomeIcon
                    icon={faChampagneGlasses}
                    size="1x"
                    className={"icon"}
                  />
                  Occasion
                </FormLabel>
                <Select
                  name="occasion"
                  id="occasion"
                  backgroundColor={"White"}
                  fontSize={"20px"}
                  color={"Green"}
                  borderRadius={16}
                  {...formik.getFieldProps("occassion")}
                >
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </Select>{" "}
              </FormControl>
            </HStack>

            <FormControl
              isRequired
              isInvalid={!!formik.errors.date && formik.touched.date}
            >
              <FormLabel
                htmlFor="res-date"
                fontWeight={"extrabold"}
                fontSize={"20px"}
                mt={"1rem"}
              >
                Date
              </FormLabel>
              <Input
                name="date"
                {...formik.getFieldProps("date")}
                type="date"
                id="res-date"
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                htmlFor="time"
                fontWeight={"extrabold"}
                fontSize={"20px"}
                mt={"1rem"}
              >
                Time
              </FormLabel>
              <Select
                {...formik.getFieldProps("time")}
                id="time"
                mb={2}
                className={"input"}
                name="time"
              >
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </Select>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={!!formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel
                htmlFor="firstname"
                fontWeight={"extrabold"}
                fontSize={"20px"}
                mt={8}
              >
                First Name
              </FormLabel>
              <Input
                name="firstName"
                {...formik.getFieldProps("firstName")}
                type="text"
                placeholder="Your first name"
                id="firstName"
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={!!formik.errors.lastName && formik.touched.lastName}
            >
              <FormLabel
                htmlFor="lastName"
                fontWeight={"extrabold"}
                fontSize={"20px"}
                mt={"1rem"}
              >
                Last Name
              </FormLabel>
              <Input
                name="lastName"
                {...formik.getFieldProps("lastName")}
                type="text"
                placeholder="Your last name"
                id="lastName"
              />
              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={
                !!formik.errors.phoneNumber && formik.touched.phoneNumber
              }
            >
              <FormLabel
                htmlFor="phoneNumber"
                fontWeight={"extrabold"}
                fontSize={"20px"}
                mt={"1rem"}
              >
                Phone Number
              </FormLabel>
              <Input
                name="phoneNumber"
                {...formik.getFieldProps("phoneNumber")}
                type="text"
                placeholder="Your phone number"
                id="phoneNumber"
              />
              <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              value="Make Your reservation"
              width="full"
              bg={"Yellow"}
              fontSize={18}
              color={"Green"}
              border-radius={"16px"}
              fontWeight={"regular"}
              _hover={{ bg: "#FEE361" }}
              _active={{
                bg: "#DBB602",
                transform: "scale(0.98)",
                borderColor: "Green",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(251, 218, 187, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              mt={"1rem"}
            >
              Confirm reservation{" "}
              <FontAwesomeIcon
                icon={faUtensils}
                size={"1x"}
                className={"submit-icon"}
              />
            </Button>
          </form>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default BookingForm;
