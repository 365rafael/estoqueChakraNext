import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 "
      color="blue.50"
      fontWeight="bold"
      backgroundColor="blue.700"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      <Link href="/">
        <Text fontSize="md" color="blue.50">
          Estoque
        </Text>
      </Link>
      <Flex ml="auto">
        <HStack>
          <Text fontSize="md" color="blue.50">
            Consultor Sumup
          </Text>
          <Avatar size="md" name="" color="white" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
