import React from 'react';
import { Image, usePrefersReducedMotion } from '@chakra-ui/react';
import logo from '../logo.svg';

// const spin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return <Image src={logo} {...props} />;
};
