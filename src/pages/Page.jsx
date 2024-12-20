import React from 'react';
import { Box, Button, Flex, Link, useColorModeValue, Image, Heading, Icon, Divider, useBreakpointValue } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Extracted Resources
const texts = {
  leftLinkText: 'Devenir testeur de Sof.ia',
  buttonText: 'Tester la Version Bêta',
  buttonTextPhone: "Bêta",
  footerText: 'SUIVEZ-NOUS!', 
};

const links = {
  leftLink: '#',
  buttonLink: '#',
  footerLink: '/privacy-policy',
};

const icons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  // Add other icons here
};

const images = {
  logo_sofia: '/assets/logo/sofia-black.png',
  logo_hc: '/assets/logo/hc-black.svg',
};

const colors = {
  primary: 'black',
  secondary: '#1a202c',
  borderColor: 'gray.300',
  buttonColor: 'orange.500',
  buttonHoverColor: 'orange.800',
  textHoverColor: 'blue.700',
  footerTextColor: 'gray.500',
  footerLinkColor: 'blue.500',
  footerLinkHoverColor: 'blue.800',
};

const Header = () => {
  const textColor = useColorModeValue(colors.primary, 'white');
  const textHoverColor = useColorModeValue(colors.textHoverColor, 'blue.200');
  const buttonColor = useColorModeValue(colors.buttonColor, 'blue.300');
  const buttonHoverColor = useColorModeValue(colors.buttonHoverColor, 'blue.400');

  return (
    <Flex
      h="100%"
      align="center"
      justify={{ base: 'space-between', md: 'space-between' }}
      px={{ base: 4, md: 12 }}
      py={4}
    >
      {/* Left Link */}
      <Link
        display={{ base: 'none', md: 'block' }}
        href={links.leftLink}
        fontSize={{ base: 'xs', md: 'sm' }}
        fontWeight="bold"
        color={textColor}
        textDecoration="underline"
        _hover={{ color: textHoverColor }}
      >
        {texts.leftLinkText}
      </Link>

      {/* Logo */}
      <Image
        src={images.logo_sofia}
        alt="Sof.ia Logo"
        maxW={{ base: '120px', lg: '200px' }}
        mr={{ base: 0, md: 4 }}
      />

      {/* Right Button */}
      <Button
        as="a"
        href={links.buttonLink}
        size={{ base: 'xs', md: 'sm' }}
        colorScheme="blue"
        borderRadius="full"
        bg={buttonColor}
        color="white"
        _hover={{ bg: buttonHoverColor }}
        ml={{ base: 0, md: 4 }}
      >
        {useBreakpointValue({ base: texts.buttonTextPhone, md: texts.buttonText })}
      </Button>
    </Flex>
  );
};

const Footer = () => {
  const iconColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');

  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-between' }}
      px={{ base: 4, md: 8 }}
      direction={{ base: 'column', md: 'row' }}
      wrap="wrap"
    >
      <Image
        src={images.logo_hc}
        alt="Sof.ia Logo"
        w={{ base: '100px', lg: '160px' }}
        h={{ base: '40px', lg: '80px' }}
        objectFit="contain"
        mr={{ base: 0, md: 8 }}
      />
      <Box mt={{ base: 4, md: 0 }}>
        <Heading color={headingColor} fontSize={{ base: 'lg', md: 'xl' }}>
          {texts.footerText}
        </Heading>
        <Divider
          orientation="horizontal"
          my={2}
          borderColor={headingColor}
          borderWidth="1px"
        />
        <Flex align="center" mb="4">
          <Icon as={icons.facebook} boxSize={6} mr={4} color={iconColor} />
          <Icon as={icons.twitter} boxSize={6} mr={4} color={iconColor} />
          <Icon as={icons.instagram} boxSize={6} mr={4} color={iconColor} />
          <Icon as={icons.linkedin} boxSize={6} color={iconColor} />
        </Flex>
      </Box>
    </Flex>
  );
};


const PageWrapper = ({ children }) => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      flexDirection="column"
      w="full"
      h={{ base: 'none', lg: "none" }}
      marginX={{ base: 0, lg: 8 }}
      bg={bgColor}
      borderRadius="lg"
      shadow="lg"
    >
      <Box h="10%" flex="0 0 auto"><Header /></Box>
      <Box h="1px" bg="gray.300" mx="auto" my={2} w="90%" />
      <Box flex="1 1 auto" display="flex" alignItems="center" justifyContent="center">
        <Box>{children}</Box>
      </Box>
      <Box h="1px" bg="gray.300" mx="auto" my={2} w="90%" />
      <Box h="10%" flex="0 0 auto"><Footer /></Box>
    </Flex>
  );
};

export default PageWrapper;
export	{ PageWrapper };
