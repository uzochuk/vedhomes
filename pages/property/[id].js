import {Box, Flex, Spacer, Text, Avatar} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'
import {baseUrl, fetchApi} from '../../utils/fetchapi'
import ImageScrollbar from '../../components/ImageScrollbar'


const PropertyDetails = ({propertyDetails: {
    price, 
    rooms,
    rentFrequency, 
    title, 
    baths, 
    area, 
    agency, 
    isVerified, 
    description, 
    amenities,
    type, 
    purpose, 
    furnishingStatus, 
    photos }}) => (
    <Box maxWidth='1000px' margin='auto' p='4'>
        {photos && <ImageScrollbar data={photos} /> }
        <Box w='full' p='6'>
            <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center'>
                    <Box paddingRight='3' color='green.400'>{ isVerified && <GoVerified/> }</Box>
                    <Text fontWeight='bold' fontSize='lg'> $ {millify(price)}{rentFrequency && `/${rentFrequency}` }</Text>
                </Flex>
                <Box>
                    <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                </Box>
            </Flex>
            <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='orange.400' textTransform='capitalize'>
                {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill />
            </Flex>
            <Box >
                <Text fontSize='sm'  textTransform='capitalize'>
                    {title}
                </Text>
                <Text fontSize='sm' paddingTop='10px'  borderTop='1px solid orange'>
                    {description}
                </Text>
            </Box>
            <Box>
                {amenities.length && <Text fontSize='2xl' fontWeight='bold' marginTop='5'>Extras</Text>}
                <Flex flexWrap='wrap'>
                    {amenities.map((item)=>(
                        item.amenities.map((amenity)=>(
                            <Text 
                            key={amenity.text} 
                            fontFamily='serif' 
                            fontweight='small' 
                            m='1'
                            color='white' 
                            p='1' 
                            bg='blue.500' 
                            borderRadius='1'
                            >{amenity.text}
                            </Text>
                        ))
                    ))}
                </Flex>
            </Box>
           
        </Box>
    </Box>
)

export async function getServerSideProps ({params: {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return{
        props: {
            propertyDetails: data
        }
    }
}

export default PropertyDetails