import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Box, Flex, Heading, Link, List, ListItem } from "@chakra-ui/react";
import "./App.css";
import { Home, About, Contact, UniqInfo } from "./pages";

function App() {
  const { pathname } = useLocation();

  const navLinkList = [
    { path: "/", title: "Home" },
    { path: "/films", title: "Kinolar" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <Box className="App" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Filmlar Asri
      </Heading>
      <Flex as="nav" justify="center" mb={6}>
        <List display="flex" gap={4}>
          {navLinkList.map((item) => (
            <ListItem key={item.path}>
              <Link
                as={NavLink}
                to={item.path}
                fontWeight="bold"
                color={item.path === pathname ? "red.500" : "blue.500"}
                _hover={{ textDecoration: "underline" }}
                _activeLink={{ color: "red.700" }}
              >
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Box>
        <Routes>
          <Route
            path="/"
            element={
              <Box className="page home" p={4} bg="gray.100" borderRadius="md">
                <Home />
              </Box>
            }
          />
          <Route
            path="/films"
            element={
              <Box className="page about" p={4} bg="gray.100" borderRadius="md">
                <About />
              </Box>
            }
          />
          <Route path="/films/:filmID" element={<UniqInfo />} />
          <Route
            path="/contact"
            element={
              <Box
                className="page contact"
                p={4}
                bg="gray.100"
                borderRadius="md"
              >
                <Contact />
              </Box>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
