import {
    FormControl,
    FormLabel,
    FormErrorMessage, VStack, HStack, Button, Input, Select, Heading, Box
} from '@chakra-ui/react'
import {faChampagneGlasses, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const BookingForm = () => {

    const { isLoading, response, submit } = useSubmit({});

    // Set alert for submission
    const { onOpen } = useAlertContext();

    // use formik for validation
    const formik = useFormik({
        initialValues: {
            occassion: "birthday" | "engagement" | "anniversary",
            guests: "",
            date: "",
            time: "19:00" | "20:00" | "21:00" | "22:00",
            firstName: "",
            lastName: "",
            phoneNumber: "",
        },
        onSubmit: (values) => {
            submit.isLoading = true;
            if(response == "success"){
                onOpen(true, "Success", "Your reservations is confirmed! See you at dinner.");
            }
            onOpen();
            return false;
        },
        //validate form inputs
        validationSchema: Yup.object({
            //occasion
            guests: Yup.string().min(1).required("Required"),
            date: Yup.date().min(new Date(), "Invalid date").required("Required"),
            //time
            firstName: Yup.string().min(2, "You need at least 2 letters").required("Required"),
            lastName: Yup.string().min(2, "You need to provide at least 2 letters").required("Required"),
            phoneNumber: Yup.string().min(9, "You need to enter at least 9 digits").required("Required"),
        }),
    })

    return (
        <Box w={"860px"} m={"4rem auto 8rem auto"}>
            <Heading as={'h2'} fontWeight={'regular'} fontSize={40} mb={16}>
                Let's reserve your table
            </Heading>
            <HStack w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}>
                <VStack w={'100%'} alignItems={'flex-start'}>

                    <form autoComplete={'off'} className={'form'} onSubmit={formik.handleSubmit}>

                        <HStack spacing={8}>
                            <FormControl isInvalid={formik.touched.guests && formik.errors.guests}  >
                                <FormLabel htmlFor="guests" fontWeight={'extrabold'} fontSize={'20px'}>Number of people</FormLabel>
                                <Input name="guests" type="number" placeholder="1" id="guests" mb={8}
                                       {...formik.getFieldProps("guests")}/>
                                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                            </FormControl>

                            {/*Research about formik validation with options*/}
                            <FormControl isInvalid={formik.touched.occassion && formik.errors.occassion}>
                                <FormLabel htmlFor="occasion"  backgroundColor={'White'} py={2} px={4} borderRadius={16}
                                           fontWeight={'extrabold'} fontSize={'20px'} color={'Green'} mt={'1rem'}>
                                    <FontAwesomeIcon icon={faChampagneGlasses} size='1x' className={'icon'}/>Occasion</FormLabel>
                                <Select name={'occasion'} id="occasion"
                                        backgroundColor={'White'} fontSize={'20px'} color={'Green'}
                                        borderRadius={16}  {...formik.getFieldProps("occassion")}>
                                    <option value={"birthday"}>Birthday</option>
                                    <option value={"engagement"}>Engagement</option>
                                    <option value={"anniversary"}>Anniversary</option>
                                </Select>
                                <FormErrorMessage>{formik.errors.occassion}</FormErrorMessage>
                            </FormControl>
                        </HStack>


                        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                        <FormLabel htmlFor="res-date" fontWeight={'extrabold'} fontSize={'20px'} mt={'1rem'}>Date</FormLabel>
                            <Input name={'date'}  {...formik.getFieldProps("date")}  type="date"
                                   id="res-date"/>
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                            <FormLabel htmlFor="res-time" fontWeight={'extrabold'} fontSize={'20px'} mt={'1rem'}>Time</FormLabel>
                            <Select  {...formik.getFieldProps("time")}  id="res-time" mb={2}
                                    className={'input'} name={'time'} required>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </Select>
                            <FormErrorMessage >formik.errors.time</FormErrorMessage>
                        </FormControl>


                        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                            <FormLabel htmlFor="firstname" fontWeight={'extrabold'} fontSize={'20px'} mt={8}>First Name</FormLabel>
                            <Input name={'firstName'}  {...formik.getFieldProps("firstName")}
                                   type="text" placeholder="Your first name" id="firstname" />
                            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName}>
                            <FormLabel htmlFor="lastname" fontWeight={'extrabold'} fontSize={'20px'} mt={'1rem'}>Last Name</FormLabel>
                            <Input name={'lastName'}  {...formik.getFieldProps("lastName")}
                                   type="text" placeholder="Your last name" id="lastname"  />
                            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                        </FormControl>

                           <FormControl isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}>
                               <FormLabel htmlFor="phonenumber" fontWeight={'extrabold'} fontSize={'20px'} mt={'1rem'}>Phone Number</FormLabel>
                               <Input name={'phoneNumber'}  {...formik.getFieldProps("phoneNumber")}
                                      type="text" placeholder="Your phone number"  id="phonenumber"  />
                               <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                           </FormControl>

                            <Button type="submit" value="Make Your reservation" width="full" bg={"Yellow"}
                                    fontSize={18}
                                    color={"Green"}
                                    border-radius={'16px'}
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
                                    }}  mt={'1rem'}>
                                Confirm reservation <FontAwesomeIcon icon={faUtensils} size={'1x'} className={'submit-icon'}/>
                            </Button>
                    </form>
                </VStack>
            </HStack>
        </Box>
    )
}

export default BookingForm;