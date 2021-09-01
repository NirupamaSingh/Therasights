import React from 'react';
import { styled } from '@material-ui/core/styles';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  '& div': {
    width: '2px',
    border: '1px solid black',
    boxSizing: 'content-box',
    '&:not(:last-child)': {
      borderRight: 'none',
    },
  },
});

const STEP = 3;

export default function NetworkQualityLevel({ qualityLevel }) {
  if (qualityLevel === null) return null;
  return (
    <Container>
      {[0, 1, 2, 3, 4].map(level => (
        <div
          key={level}
          style={{
            height: `${STEP * (level + 1)}px`,
            background: qualityLevel > level ? '#a3cef1' : '#7bdff2',
          }}
        />
      ))}
    </Container>
  );
}
