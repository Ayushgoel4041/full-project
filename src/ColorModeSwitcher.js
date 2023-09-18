import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
    // size={'40'}
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={'6'}
      right={'6'}
      w={'20'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon size={'30'}/>}
      borderRadius={'full'}
      {...props}
    />
  );
};

export default ColorModeSwitcher;