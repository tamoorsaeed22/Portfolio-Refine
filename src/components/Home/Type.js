import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Front-End Developer',
          'Back-End Developer',
          'Open Source Contributor',
          'Database Administrator (DBA)',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
