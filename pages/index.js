import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button} from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchapi'
import Property from '../components/Property'



const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => {
return <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
            <Image src={imageUrl} width={500} height={300} alt='banner' objectFit='cover'/>
            <Box p={5}>
                <Text color='grayText.400' fontSize='sm' fontWeight='medium'>{purpose}</Text>
                <Text fontSize='3xl' fontWeight='bold'>{title1} <br/> {title2} </Text>
                <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='grayText.400'>{desc1} <br/> {desc2} </Text>
                <Button fontSize='xl'>
                    <Link href={linkName}>{buttonText}</Link> 
                </Button>
            </Box>
        </Flex>
}

function Home({propertiesForRent, propertiesForSale}){
  
    return (
        <Box>
      
            <Banner 
                purpose='RENT A HOME'
                title1='Rent homes for'
                title2='Everyone'
                desc1='Explore Apartments, villas, Homes'
                desc2='and more'
                buttonText='Explore Renting'
                linkName='/search?purpose=for-rent'
                imageUrl='/images/image1.jpg'
            />
           
           <Flex flexWrap='wrap'>
                {propertiesForRent?.map((data)=><Property propertyData={data} key={data.id}/>)}
           </Flex>
           
            <Banner 
                purpose='BUY A HOME'
                title1='Find, Buy and own your'
                title2='Dream Home'
                desc1='Explore Apartments, villas, Homes'
                desc2='and more'
                buttonText='Explore buying'
                linkName='/search?purpose=for-rent'
                imageUrl='/images/image2.jpg'
            />
            
            <Flex flexWrap='wrap'>
              {propertiesForSale?.map((data)=><Property propertyData={data} key={data.id}/>)}
            </Flex>  
        </Box>
    )
}

export async function getStaticProps(){
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
    const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

    return{
        props:{
            propertiesForSale: propertyForSale?.hits,
            propertiesForRent: propertyForRent?.hits,
        }
    
    }

}




export default Home