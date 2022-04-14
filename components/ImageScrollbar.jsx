import { useContext } from "react";
import Image from 'next/image';
import {Box, Icon, Flex} from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

const LeftArrow = () =>{
    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowCircleLeft}
                onClick = {()=>scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
            />
          
        </Flex>
    )
}


const RightArrow = () =>{
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowCircleRight}
                onClick = {()=>scrollNext()}
                fontSize='2xl'
                cursor='pointer'
            />
          
        </Flex>
    )
}


const ImageScrollbar = ({data}) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overFlow: 'hidden'}}>
        {data.map((item)=>(
            <Box width='910px' itemId={item.id} overflow='hidden' p='1' key={item.id}>
                <Image
                 placeholder="blur" 
                 blurDataURL={item.url}
                 src={item.url}  
                 width='100%'
                 height='50vh' 
                 alt='property'
                 sizes = "(max-width:500px) 100px, (max-width): 1023px 400px, 1000px"
                />
            </Box>    
        ))}
    </ScrollMenu>
)

export default ImageScrollbar