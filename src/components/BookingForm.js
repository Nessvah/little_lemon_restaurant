import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, VStack, HStack, Button, Input, Select, Heading, Box
} from '@chakra-ui/react'
import {faChampagneGlasses, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const BookingForm = () => {
    return (
        <Box w={"860px"} m={"4rem auto 8rem auto"}>
            <Heading as={'h2'} fontWeight={'regular'} fontSize={40} mb={16}>
                Let's reserve your table
            </Heading>
            <HStack w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}>
                <VStack>
                    <form autoComplete={'off'} className={'form'}>
                        <FormControl display={'grid'} w={'100%'} >
                            <FormLabel htmlFor="guests" fontWeight={'extrabold'} fontSize={'20px'}>Number of people</FormLabel>
                            <Input type="number" placeholder="1" min="1" max="10" id="guests" mb={8}/>

                            <FormLabel htmlFor="res-date" fontWeight={'extrabold'} fontSize={'20px'}>Date</FormLabel>
                            <Input type="date" id="res-date" mb={8}/>

                            <FormLabel htmlFor="res-time" fontWeight={'extrabold'} fontSize={'20px'}>Time</FormLabel>
                            <Select id="res-time" mb={2}  className={'input'}>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </Select>
                            <FormErrorMessage mb={8}></FormErrorMessage>

                            <FormLabel htmlFor="firstname" fontWeight={'extrabold'} fontSize={'20px'} mt={8}>First Name</FormLabel>
                            <Input type="text" placeholder="Your first name" id="firstname" mb={8}/>

                            <FormLabel htmlFor="lastname" fontWeight={'extrabold'} fontSize={'20px'}>Last Name</FormLabel>
                            <Input type="text" placeholder="Your last name" id="lastname" mb={8}/>

                            <FormLabel htmlFor="phonenumber" fontWeight={'extrabold'} fontSize={'20px'}>Phone Number</FormLabel>
                            <Input type="text" placeholder="Your phone number"  id="phonenumber" mb={8}/>

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
                    <Select id="occasion" backgroundColor={'White'} fontSize={'20px'} color={'Green'} borderRadius={16}>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                    </Select>
                    <FormErrorMessage></FormErrorMessage>
                </Box>

            </HStack>
        </Box>
    )
}

export default BookingForm;