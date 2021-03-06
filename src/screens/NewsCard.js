import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';
import moment from 'moment';

function NewsCard({title, description, published_at, author, category, image}) {
  function shortDescription(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '....' : str;
  }

  return (
    <Box
      my={4}
      width={72}
      shadow={1}
      _light={{
        backgroundColor: 'gray.50',
      }}
      _dark={{
        backgroundColor: 'gray.700',
      }}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="red.500"
          _text={{
            color: 'white',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}>
          {category.toUpperCase()}
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            {title}
          </Heading>
          <Heading
            size="xs"
            _light={{
              color: 'red.500',
            }}
            _dark={{
              color: 'red.300',
            }}
            fontWeight="500"
            ml={-0.5}
            mt={-1}>
            {author}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          {shortDescription(description, 100)}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="flex-end">
          <HStack alignItems="center">
            <Icon name="calendar-times-o" size={25} color="#2d98da" />
            <Text ml={1} color="gray.500" fontWeight="500">
              {moment(published_at).format('MMM Do YY')}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

export default NewsCard;
