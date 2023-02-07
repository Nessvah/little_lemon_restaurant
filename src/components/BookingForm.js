import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, VStack, HStack, Button, Input, Select, Heading, Box
} from '@chakra-ui/react'


const BookingForm = () => {
    return (
        <VStack >
            <Heading as={'h2'}>
                Let's reserve your table
            </Heading>
            <Box p={6}>
                <form autoComplete={'off'}>
                    <FormControl display={'grid'} maxW={'200px'} gap={20}>
                        <FormLabel htmlFor="res-date">Date</FormLabel>
                        <Input type="date" id="res-date"/>
                        <FormLabel htmlFor="res-time">Time</FormLabel>
                        <Select id="res-time ">
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </Select>
                        <FormErrorMessage></FormErrorMessage>
                        <FormLabel htmlFor="guests">Number of people</FormLabel>
                        <Input type="number" placeholder="1" min="1" max="10" id="guests"/>
                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                        <Select id="occasion">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Select>
                        <FormErrorMessage></FormErrorMessage>
                        <Button type="submit" value="Make Your reservation" colorScheme="purple" width="full">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </VStack>
    )
}

export default BookingForm;