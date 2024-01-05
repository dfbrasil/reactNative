
import React, { ReactNode } from 'react';

interface IfProps {
  teste: boolean;
  children: ReactNode;
}

export default function If(props: IfProps) {
  if (props.teste) {
    return <>
      {props.children}
      </>;
  } else {
    return null;
  }
}
