import { HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} justify="center" mb={8}>
      <Link as={RouterLink} to="#header">
        Home
      </Link>
      <Link as={RouterLink} to="#skills">
        Skills
      </Link>
      <Link as={RouterLink} to="#contact">
        Contact
      </Link>
    </HStack>
  );
};

export default Navigation;
