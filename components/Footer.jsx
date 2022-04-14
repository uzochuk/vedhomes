import { Box } from "@chakra-ui/react";

const Footer = () =>(
    <Box textAlign='center' p='5' color='gray.900' borderTop='1px' bordercolor='black.200'>
        {new Date().getFullYear()} VedHomes&trade;, Inc
    </Box>
)

export default Footer