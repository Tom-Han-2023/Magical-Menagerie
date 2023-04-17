import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'

function SandyCove() {
  const [option, setOption] = useState(0)

  function rollChance(successChance: number) {
    if (Math.random() * 100 < successChance) {
      return true
    }
    return false
  }

  function handleClick(dialogOption: number) {
    switch (dialogOption) {
      case 0:
        setOption(0)
        break
      case 1:
        if (rollChance(40)) {
          setOption(1)
        } else {
          setOption(2)
        }
        break
      case 2:
        setOption(3)
        break
      case 3:
        if (rollChance(10)) {
          setOption(4)
        } else {
          setOption(5)
        }
        break
      default:
        setOption(0)
    }
  }

  //---------------------------------------------------------------------------------------------
  //OPTION SET 1: SEARCH TRESURE

  //OUTPUT 1: FIND IN SAND

  if (option === 1) {
    return (
      <div
        style={{
          backgroundImage: 'url(/Images/sandycove.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          height: '80vh',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>Sandy Cove</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`You search the sand for treasure when PETNAME spots something glinting in the sand! Gain 100 money!`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(0)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={'Images/creature.gif'}
          alt={''}
          style={{ position: 'absolute', bottom: '  0', width: '200px' }}
        />
      </div>
    )
  }

  //OUTPUT 2: FAIL TO FIND
  if (option === 2) {
    return (
      <div
        style={{
          backgroundImage: 'url(/Images/sandycove.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          height: '80vh',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>Sandy Cove</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`You spend hours combing the sand, but end up with nothing to show for it but a nasty sunburn.`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(0)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={'Images/creature.gif'}
          alt={''}
          style={{ position: 'absolute', bottom: '  0', width: '200px' }}
        />
      </div>
    )
  }

  //---------------------------------------------------------------------------------------------
  //OPTION SET 2: ICE CREAM

  //OUTPUT 3: BUY ICE CREAM
  if (option === 3) {
    return (
      <div
        style={{
          backgroundImage: 'url(/Images/sandycove.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          height: '80vh',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>Sandy Cove</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`Wandering up to a ramshackle hut on the edge of the sand, you hear a loud voice. "ICE CREAM? WANNA ICE CREAM?". There seems to be no-one there, but when you peer over the edge of the shop window, a tiny Fluttery with comically oversized spectacles grins up at you. "ICE CREAM?" he yells, not changing his volume despite being right in front of you. You nod, handing over the money. Almost too fast to see, he flits around the hut, and you hear the whirring of machines and the clinking of cookware, until you're handed a swirl of vanilla soft serve in a delicate-looking cone. You get a Vanilla Soft Serve!`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(0)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={'Images/creature.gif'}
          alt={''}
          style={{ position: 'absolute', bottom: '  0', width: '200px' }}
        />
      </div>
    )
  }

  //---------------------------------------------------------------------------------------------
  //OPTION SET 3: EXPLORE RUINS

  //OUTPUT 4: FIND A RARE TREASURE

  if (option === 4) {
    return (
      <div
        style={{
          backgroundImage: 'url(/Images/sandycove.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          height: '80vh',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>Sandy Cove</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`You clamber through the old ruins that skirt the edges of the beach. It looks like an ancient civilisation that worshipped the sun once lived here. As you venture deeper into the ruins, you stumble, almost falling... and PETNAME catches you from a spike pit. Phew! You keep walking, and you find some sort of ceremonial chamber. In the center is an altar, and a perfectly ripe fruit sits in the center. You warily take the fruit... but no traps or tricks are set off. Was it safe all along - or are you just lucky? You quickly walk away before you can find out. You gain a Rare Temple Fruit!`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(0)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={'Images/creature.gif'}
          alt={''}
          style={{ position: 'absolute', bottom: '  0', width: '200px' }}
        />
      </div>
    )
  }

  //OUTPUT 5: FIND A RARE TREASURE
  if (option === 5) {
    return (
      <div
        style={{
          backgroundImage: 'url(/Images/sandycove.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          height: '80vh',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>Sandy Cove</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`You step into the mysterious temple, and you see carved images around you. Although they've been worn away by time and the sand swirling in the air, you can faintly interpret the pictures... You see a figure, loowing over a great temple, one that looks suspiciously like the one you're in... You hear a faint growl behind you, and see an ominous shadow creep out from the door. PETNAME growls, and you grab your pet, scrabbling away. Whatever that was, you don't want to meet it.`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(0)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={'Images/creature.gif'}
          alt={''}
          style={{ position: 'absolute', bottom: '  0', width: '200px' }}
        />
      </div>
    )
  }

  //---------------------------------------------------------------------------------------------
  //DEFAULT: MAIN PAGE

  return (
    <div
      style={{
        backgroundImage: 'url(/Images/sandycove.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        width: '100%',
        height: '80vh',
      }}
    >
      <Box
        border="1px solid #E2E8F0"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
        p="4"
        borderRadius="md"
        width={200}
        style={{
          textAlign: 'center',
          fontSize: 'large',
          backgroundColor: 'rgba(255,255,255, 0.6)',
        }}
      >
        <strong>Sandy Cove</strong>
      </Box>
      <Center>
        <Flex direction="column" align="center">
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
            }}
          >
            {`As you arrive in Sandy Cove, you can smell the sea and feel the hot
            sun on your skin. You look down at PETNAME and they're playing in
            the sand. How cute!`}
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            onClick={() => handleClick(1)}
          >
            {`Search the sand for treasure`}
          </Box>

          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',

              fontSize: 'medium',

              backgroundColor: 'rgba(255,255,255, 0.6)',

              marginTop: '10px',

              fontStyle: 'italic',

              fontWeight: 'bold',
            }}
            onClick={() => handleClick(2)}
          >
            {`Buy some ice-cream (-$10)`}
          </Box>

          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            onClick={() => handleClick(3)}
          >
            {`Explore the strange ruins`}
          </Box>
        </Flex>
      </Center>

      <Image
        src={'Images/creature.gif'}
        alt={''}
        style={{ position: 'absolute', bottom: '  0', width: '200px' }}
      />
    </div>
  )
}

export default SandyCove
