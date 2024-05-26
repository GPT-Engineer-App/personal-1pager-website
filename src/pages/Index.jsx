import { Container, VStack, Heading, Text, Box, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Full Stack Developer
          </Text>
        </Box>

        {/* Introduction Section */}
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTY3MzgwMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" mb={4} />
          <Text fontSize="md">Hi, I'm John Doe, a passionate Full Stack Developer with experience in building web applications using modern technologies like React, Node.js, and more. I love to create efficient and scalable solutions.</Text>
        </Box>

        {/* Skills Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Skills
          </Heading>
          <Text fontSize="md">JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, Git, Docker</Text>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as="a" href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" />
            <IconButton as="a" href="https://twitter.com/johndoe" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
