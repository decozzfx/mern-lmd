import {
  Alert,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { update } from "../lib/api";
import toast from "react-hot-toast";

const Profile = () => {
  const { data: user, refetch } = useAuth();

  const [email, setEmail] = useState(user?.email);
  const [userName, setUserName] = useState(user?.userName);
  const [realName, setRealName] = useState(user?.realName);
  const [phone, setPhone] = useState(user?.phone);
  const [isEdit, setIsEdit] = useState(false);

  const { mutate: updateAccount, isPending } = useMutation({
    mutationFn: update,
    onSuccess: () => {
      toast("Update account is successfully 😊");
      refetch();
      toggleEdit();
    },
    onError: () => {
      toast("Failed to update account 😔");
    },
  });

  const toggleEdit = () => {
    setIsEdit((p) => !p);
  };

  return (
    <Center mt={16} flexDir="column">
      <Heading mb={4}>My Account</Heading>
      {!isEdit ? (
        <Stack spacing={4}>
          <Text color="white" mb={2}>
            User Name:{" "}
            <Text as="span" color="gray.300">
              {userName}
            </Text>
          </Text>
          <Text color="white" mb={2}>
            Real Name:{" "}
            <Text as="span" color="gray.300">
              {realName}
            </Text>
          </Text>
          <Text color="white" mb={2}>
            Email:{" "}
            <Text as="span" color="gray.300">
              {email}
            </Text>
          </Text>
          <Text color="white" mb={2}>
            Phone Number:{" "}
            <Text as="span" color="gray.300">
              {phone}
            </Text>
          </Text>
          <Text color="white">
            Created on{" "}
            <Text as="span" color="gray.300">
              {user?.createdAt
                ? new Date(user?.createdAt).toLocaleDateString("en-US")
                : "-"}
            </Text>
          </Text>
          <Button onClick={toggleEdit}>Edit Account</Button>
        </Stack>
      ) : (
        <>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>User Name</FormLabel>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
              />
            </FormControl>
            <FormControl id="realname">
              <FormLabel>Real Name</FormLabel>
              <Input
                type="text"
                value={realName}
                onChange={(e) => setRealName(e.target.value)}
                autoFocus
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
              />
            </FormControl>
            <Button
              my={2}
              isLoading={isPending}
              onClick={() =>
                updateAccount({
                  _id: user._id,
                  email,
                  userName,
                  realName,
                  phone,
                })
              }
            >
              Update Account
            </Button>
          </Stack>
        </>
      )}
    </Center>
  );
};
export default Profile;
