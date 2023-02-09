import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, VStack, HStack, Button, Input, Select, Heading, Box
} from '@chakra-ui/react'
import {faChampagneGlasses, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";


const BookingForm = () => {

    // Create a state object to store the form data. React uses the useState hook to handle the form state.
    const [contactInfo, setContactInfo] = useState({
        guests: "",
        date: "",
        time: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        occasion: "birthday" | "engagement" | "anniversary",
    })

    //Update the input fields
    const handleChange = (e) => {
        setContactInfo({
                ...contactInfo,
                [e.target.name]: e.target.value
            }
            )
    }

    // Retrieving form data from controlled input field
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(contactInfo);
    }

    return (
        <Box w={"860px"} m={"4rem auto 8rem auto"}>
            <Heading as={'h2'} fontWeight={'regular'} fontSize={40} mb={16}>
                Let's reserve your table
            </Heading>
            <HStack w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}>
                <VStack>
                    <form autoComplete={'off'} className={'form'} onSubmit={handleSubmit}>
                        <FormControl display={'grid'} w={'100%'} >
                            <FormLabel htmlFor="guests" fontWeight={'extrabold'} fontSize={'20px'}>Number of people</FormLabel>
                            <Input name="guests" value={contactInfo.guests} type="number" onChange={handleChange}
                                   placeholder="1" min="1" max="10" id="guests" mb={8}/>

                            <FormLabel htmlFor="res-date" fontWeight={'extrabold'} fontSize={'20px'}>Date</FormLabel>
                            <Input name={'date'} value={contactInfo.date} onChange={handleChange}  type="date" id="res-date" mb={8}/>

                            <FormLabel htmlFor="res-time" fontWeight={'extrabold'} fontSize={'20px'}>Time</FormLabel>
                            <Select value={contactInfo.time} onChange={handleChange}  id="res-time" mb={2}  className={'input'} name={'time'}>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </Select>
                            <FormErrorMessage mb={8}></FormErrorMessage>

                            <FormLabel htmlFor="firstname" fontWeight={'extrabold'} fontSize={'20px'} mt={8}>First Name</FormLabel>
                            <Input name={'firstName'} value={contactInfo.firstName} onChange={handleChange}
                                   type="text" placeholder="Your first name" id="firstname" mb={8}/>

                            <FormLabel htmlFor="lastname" fontWeight={'extrabold'} fontSize={'20px'}>Last Name</FormLabel>
                            <Input name={'lastName'} value={contactInfo.lastName} onChange={handleChange}
                                   type="text" placeholder="Your last name" id="lastname" mb={8}/>

                            <FormLabel htmlFor="phonenumber" fontWeight={'extrabold'} fontSize={'20px'}>Phone Number</FormLabel>
                            <Input name={'phoneNumber'} value={contactInfo.phoneNumber} onChange={handleChange}
                                   type="text" placeholder="Your phone number"  id="phonenumber" mb={8}/>

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
                                    }}>
                                Confirm reservation <FontAwesomeIcon icon={faUtensils} size={'1x'} className={'submit-icon'}/>
                            </Button>

                        </FormControl>
                    </form>
                </VStack>
                <Box>
                    <FormLabel htmlFor="occasion"  backgroundColor={'White'} py={2} px={4} borderRadius={16}
                               fontWeight={'extrabold'} fontSize={'20px'} color={'Green'}>
                        <FontAwesomeIcon icon={faChampagneGlasses} size='1x' className={'icon'}/>Occasion</FormLabel>
                    <Select name={'occasion'} onChange={handleChange}  id="occasion"
                            backgroundColor={'White'} fontSize={'20px'} color={'Green'}
                            borderRadius={16}>
                        <option value={"birthday"}>Birthday</option>
                        <option value={"engagement"}>Engagement</option>
                        <option value={"anniversary"}>Anniversary</option>
                    </Select>
                    <FormErrorMessage></FormErrorMessage>
                </Box>

            </HStack>
        </Box>
    )
}

export default BookingForm;