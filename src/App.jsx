// Refactored Component
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { Box, Flex, Text, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";

// icons
import { FiHome, FiUser, FiSettings } from "react-icons/fi"; // Importing icons from react-icons

// sidebar
import Sidebar from "./Sidebar/Sidebar";
import Placeholder from "./pages/Placeholder";


// pages
import { PageWrapper } from "./pages/Page";


const sidebarItems = [
  {
    path: "/placeholder",
    label: "Placeholder",
    icon: FiHome,
  },
];

const App = () => {
  const [userId, setUserIdFunc] = React.useState(null);
  const [initialUserIdCheckComplete, setInitialUserIdCheckComplete] = React.useState(false);

  useEffect(() => {
    // Check for userId in local storage and set it if found
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserIdFunc(storedUserId);
    }
    // Set a timeout to wait 0.3s before marking the initial check as complete
    const timeoutId = setTimeout(() => {
      setInitialUserIdCheckComplete(true);
    }, 5);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  const setUserId = (userId) => {
    setUserIdFunc(userId);
    localStorage.setItem('userId', userId);
  };

  // Use semantic tokens for background color
  const bgColor = useColorModeValue('bg.canvas.light', 'bg.canvas.dark');

  return (
    <Router>
      <Box
        p={{ base: "4", lg: "8" }}
        minH="100vh"
        maxH={{ base: "none", lg: "100vh" }}
        w="full"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        overflow="hidden"
        bg={bgColor}
      >
        <Sidebar
          slogan="Boostez vos idées, instantanément"
          items={sidebarItems}
          setUserId={setUserId}
        />
        <PageWrapper>
            <Routes>
              <Route path="/" element={<Placeholder />} />
              <Route path="/placeholder" element={<Placeholder />} />
            </Routes>
        </PageWrapper>
      </Box>
    </Router>
  );
};



export default App;
