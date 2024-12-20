// Refactored Component
import React, { useState, useEffect } from "react";
import { Box, Button, Heading, Flex, Text, Link, IconButton, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

// import { useUser } from "../context/UserContext";

const logoSrc = "assets/logo/fox_simple_head.png";

const textContent = {
  logoAlt: logoSrc,
  appName: "Sof.IA",
  // header: "AI Powertools",
  // slogan: "Boostez vos idées, instantanément",
  logOffButtonText: "Se déconnecter",
  loginPrompt: "Veuillez vous connecter",
  coinsSymbol: "🪙",
  toggleSidebarLabel: "Open Sidebar",
  userPlaceholder: "User Info Placeholder"
};

const SidebarHeader = ({ slogan, isMobile, isSidebarOpen }) => {
  const borderBottomColor = useColorModeValue('border.default', 'border.default');
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX={6}
      mt="8"
      paddingY={2}
      borderBottom={1}
      w="250px"
      borderBottomColor={borderBottomColor}
      h={isMobile ? (isSidebarOpen ? "25vh" : "12vh") : "10vh"}
    >
      <Flex alignItems="center">
        <img src={logoSrc} alt={textContent.logoAlt} width="75px" />
        <Heading size="lg">{textContent.appName}</Heading>
      </Flex>
    </Box>
  );
};

const SidebarItem = ({ label, icon: Icon, path, isActive }) => {
  const bgColor = useColorModeValue("bg.subtle.light", "bg.subtle.dark");
  const hoverBgColor = useColorModeValue("action.sidebar.hover.light", "action.sidebar.hover.dark");
  const textColor = useColorModeValue("text.default", "text.default");

  return (
    <Link
      href={path}
      p={4}
      display="flex"
      alignItems="center"
      bg={isActive ? hoverBgColor : bgColor}
      borderRadius="lg"
      transition="all 0.2s ease"
      _hover={{
        bg: hoverBgColor,
      }}
    >
      <Icon />
      <Text ml={2} display={{ base: "block", sm: "block" }} color={textColor}>
        {label}
      </Text>
    </Link>
  );
};

const SidebarItems = ({ items, location, isMobile, isSidebarOpen }) => (
  <Flex
    paddingX={4}
    paddingY={2}
    flexDir="column"
    display={isMobile && !isSidebarOpen ? "none" : "flex"}
    gap={4}
    h={{ base: "60vh", lg: "70vh" }}
    overflow="auto"
    flex="1"
    overflowX="hidden"
    overflowY="auto"
  >
    {items.map((item) => (
      <SidebarItem
        key={item.path}
        label={item.label}
        icon={item.icon}
        path={item.path}
        isActive={location.pathname === item.path}
      />
    ))}
  </Flex>
);

const SidebarUserInfo = ({ user, isMobile, isSidebarOpen, setUserId }) => {
  const handleLogOff = () => {
    setUserId(""); // Assuming setUserId is a function that updates the user ID
  };

  return (
    <Box
      paddingX={4}
      paddingY={2}
      borderTop={1}
      display={isMobile && !isSidebarOpen ? "none" : "flex"}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h={isMobile ? (isSidebarOpen ? "15vh" : "0px") : "10vh"}
    >
      {user.id !== '' ? (
        <Flex gap="2" direction="column" alignItems="center" w="100%">
          <Flex direction="row" alignItems="center" justifyContent="space-between" w="100%">
            <Text fontWeight="bold">
              {`${user.first_name} ${user.last_name}`}
            </Text>
            <Text fontWeight="bold">
              {`${user.coins}${textContent.coinsSymbol}`}
            </Text>
          </Flex>

          <Button
            onClick={handleLogOff}
            size="sm"
            mt={2}
            w="full"
          >
            {textContent.logOffButtonText}
          </Button>
        </Flex>
      ) : (
        <Text>{textContent.loginPrompt}</Text>
      )}
    </Box>
  );
};


const Sidebar = ({ slogan = textContent.slogan, items, setUserId }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 960px)");
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const borderRadius = isMobile ? (isSidebarOpen ? "0" : "lg") : "lg";
  const transition = "width 0.3s ease";
  const shadow = "lg";
  const position = isMobile && isSidebarOpen ? "fixed" : "static";
  const top = 0;
  const left = 0;

  return (
    <Box>
      <Box
        w={isMobile ? (isSidebarOpen ? "100vw" : "0px") : "250px"}
        minH={isMobile ? (isSidebarOpen ? "100vh" : "0px") : "100%"}
        bg="white"
        borderRadius={borderRadius}
        zIndex={10}
        transition={transition}
        shadow={shadow}
        position={position}
        top={top}
        left={left}
      >
        <Flex direction="column" height="100%">
          <Box maxH={{ base: "none", lg: "80vh" }}>
            <SidebarHeader slogan={slogan} isMobile={isMobile} isSidebarOpen={isSidebarOpen} />
            <SidebarItems items={items} location={location} isMobile={isMobile} isSidebarOpen={isSidebarOpen} flex="1" />
          </Box>
          {/* <Box><SidebarUserInfo user={user} isMobile={isMobile} isSidebarOpen={isSidebarOpen} setUserId={setUserId} /></Box> */}
        </Flex>
      </Box>
      <Box p={4} display={isMobile ? "block" : "none"}>
        <IconButton
          icon={<FiMenu />}
          aria-label={textContent.toggleSidebarLabel}
          onClick={toggleSidebar}
          position="fixed"
          top="10px"
          right="10px"
          zIndex={20}
        />
      </Box>
    </Box>
  );
};


export default Sidebar;
