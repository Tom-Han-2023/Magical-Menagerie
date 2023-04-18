import { useParams } from 'react-router-dom'

import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Progress,
  Button,
} from '@chakra-ui/react'
import { fetchInventory, spendInventoryItem } from '../actions/inventory'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect, useState } from 'react'
import WaitIndicator from './WaitIndicator'
import { fetchOtherPetData, updatePet } from '../actions/otherPetActions'

function OtherPetInteraction() {
  const inventory = useAppSelector((state) => state.inventory)
  const otherPet = useAppSelector((state) => state.otherPet)
  const { accessToken } = useAppSelector((state) => state.token)
  const [selectItem, setSelectItem] = useState<number>(1)
  const dispatch = useAppDispatch()

  const { petId } = useParams<{ petId: string }>()

  useEffect(() => {
    if (petId && accessToken) {
      dispatch(fetchOtherPetData(parseInt(petId)))
      dispatch(fetchInventory(accessToken))
    }
  }, [dispatch, petId, accessToken])

  function handleSubmit() {
    const itemId = selectItem
    if (
      otherPet.data &&
      inventory.data &&
      inventory.data.length > 0 &&
      accessToken
    ) {
      const item = inventory.data.find((item) => item.id === itemId)
      const hungerFill = item ? item.hungerFill : 0
      const updatedHunger =
        otherPet.data.hungerCurrent + hungerFill > 100
          ? 100
          : otherPet.data.hungerCurrent + hungerFill < 0
          ? 0
          : otherPet.data.hungerCurrent + hungerFill
      const updatedPet = {
        ...otherPet.data,
        hungerCurrent: updatedHunger,
      }

      dispatch(updatePet(updatedPet))
      dispatch(spendInventoryItem(itemId, accessToken))
    }
  }

  return (
    <div>
      {(otherPet.loading || inventory.loading) && <WaitIndicator />}
      {otherPet.error && <></>}
      {inventory.error && <></>}

      {otherPet.data && inventory.data ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80lvh',
          }}
        >
          <Box p={4} maxW="1200px" mx="auto" minHeight="50lvh" minWidth="50lvw">
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 4, md: 8 }}
              justifyContent="center"
            >
              <Stack
                w="100%"
                h="100%"
                bg="white"
                boxShadow="lg"
                borderRadius="md"
                p={4}
                maxW="500px"
              >
                <Box w="100%" h="60%">
                  <Text align={'center'} fontWeight={600} fontSize="2xl">
                    {otherPet.data.petName}
                  </Text>
                  <Image
                    src={otherPet.data.image}
                    alt="gif"
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    borderRadius="md"
                    p={6}
                  />
                </Box>
                <Box h="40%" mb={4} position="relative">
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                    h="100%"
                  >
                    <Box>
                      <Text fontWeight={600}>Level: {otherPet.data.level}</Text>
                      <Progress
                        value={otherPet.data.level}
                        size="xs"
                        colorScheme="green"
                      />
                    </Box>
                    <Box>
                      <Text color={'gray.600'}>
                        Exp: {`${otherPet.data.xpCurrent} / 100`}
                      </Text>
                      <Progress value={otherPet.data.xpCurrent} size="xs" />
                    </Box>
                    <Box>
                      <Text fontWeight={600}>
                        Health:
                        {`${otherPet.data.hpCurrent} / ${otherPet.data.hpMax}`}
                      </Text>
                      <Progress
                        value={otherPet.data.hpCurrent}
                        size="xs"
                        colorScheme="red"
                      />
                    </Box>
                    <Box>
                      <Text color={'gray.600'}>
                        Hunger:
                        {`${otherPet.data.hungerCurrent} / ${otherPet.data.hungerMax}`}
                      </Text>
                      <Progress
                        value={otherPet.data.hungerCurrent}
                        size="xs"
                        colorScheme="orange"
                      />
                    </Box>
                  </Flex>
                </Box>
              </Stack>
              <Stack
                w="100%"
                h="100%"
                bg="white"
                boxShadow="lg"
                borderRadius="md"
                p={4}
                maxW="500px"
              >
                <SimpleGrid columns={3} spacing={4} w="100%" h="100%">
                  {inventory.data.map((elem) => (
                    <Popover key={elem.id} placement="right">
                      <PopoverTrigger>
                        <Box
                          key={elem.id}
                          w="125px"
                          h="125px"
                          borderRadius="md"
                          onClick={() => setSelectItem(elem.id)}
                          borderWidth={selectItem === elem.id ? 2 : 0}
                          borderColor="blue.500"
                        >
                          <Image
                            src={elem.image}
                            alt="image"
                            w="100%"
                            h="100%"
                            objectFit="cover"
                          />
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent maxW="sm">
                        <PopoverHeader
                          fontWeight="bold"
                          border="0"
                          textAlign="center"
                        >
                          {elem.name}
                        </PopoverHeader>
                        <Text mb={2}>{elem.description}</Text>
                        <Text fontWeight="bold">Type:</Text>
                        <Text mb={2}>{elem.type}</Text>
                        <Text fontWeight="bold">Hunger Fill:</Text>
                        <Text mb={2}>{elem.hungerFill}</Text>
                      </PopoverContent>
                    </Popover>
                  ))}
                </SimpleGrid>
                <Box textAlign="center" mt={4}>
                  <Button
                    colorScheme="blue"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Feed your pet
                  </Button>
                </Box>
              </Stack>
            </SimpleGrid>
            <Box
              w="50%"
              mx="auto"
              my={4}
              h="4px"
              bg="gray.300"
              borderRadius="full"
            />
          </Box>
        </div>
      ) : (
        <div>
          <p>No data!</p>
        </div>
      )}
    </div>
  )
}

export default OtherPetInteraction
