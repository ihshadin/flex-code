import React, { useRef } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import errorFile from '../../../public/404 Eror.json';

const ErrorPage = () => {
  const { error, status } = useRouteError();
  const playerRef = useRef();

  return (
    <section className='flex items-center h-screen p-16 bg-secondary-color text-white'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div>
          <Player
            autoplay
            loop
            src={errorFile}
            style={{ height: "450px", width: "450px" }}
            className='primary-color'
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
        <div className='max-w-md text-center'>
          {/* <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2> */}
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='flexcode-button px-8 py-3 font-semibold rounded text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
