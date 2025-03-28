import { Flex, Image, Text, Link, Icon, Box } from "@chakra-ui/react";
import { Linkedin, Github, MessageCircle } from "lucide-react"; // Biblioteca de ícones

export function Navbar() {
  return (
    <Flex 
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding="1rem 2rem"
      bg="#301c3f"
      color="white"
    >
      <Flex align="center" gap="16"> {/* Espaçamento aumentado */}
        {/* Logo */}
        <Image src="LogoRedonda.png" alt="Ícone JT" boxSize="50px" />

        {/* Links de Navegação */}
        <Flex align="center" gap="6">
          <Text cursor="pointer" _hover={{ color: "gray.400" }}>INÍCIO</Text>
          <Text cursor="pointer" _hover={{ color: "gray.400" }}>SOBRE</Text>
          <Text cursor="pointer" _hover={{ color: "gray.400" }}>PORTFÓLIO</Text>
          <Text cursor="pointer" _hover={{ color: "gray.400" }}>PERGUNTAS</Text>
          <Text cursor="pointer" _hover={{ color: "gray.400" }}>CONTATO</Text>
          <Text cursor="pointer" _hover={{ color: "gray.400" }}>FAQ</Text>
        </Flex>

        {/* Ícones das redes sociais */}
        <Flex align="center" gap="6">
          <Link href="https://www.linkedin.com/in/seu-perfil" isExternal>
            <Box 
              p="3" 
              bg="whiteAlpha.200" 
              borderRadius="full" 
              height="40px" 
              width="40px"  
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <Icon as={Linkedin} boxSize={5} /> {/* Ícone dentro do círculo */}
            </Box>
          </Link>

          <Link href="https://github.com/seu-usuario" isExternal>
            <Box 
              p="3" 
              bg="whiteAlpha.200" 
              borderRadius="full" 
              height="40px"
              width="40px"
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <Icon as={Github} boxSize={5} />
            </Box>
          </Link>

          <Link href="https://wa.me/seu-numero" isExternal>
            <Box 
              p="3" 
              bg="whiteAlpha.200" 
              borderRadius="full" 
              height="40px"
              width="40px"
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <Icon as={MessageCircle} boxSize={5} />
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
