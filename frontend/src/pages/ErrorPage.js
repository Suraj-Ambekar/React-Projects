import React from 'react';
import PageContent from './PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {

    const error = useRouteError();
    let title = "an error occurred!";
    let message = "something went wrong!";

    if( error.status === 500){
        message = error.data.message;
    }

    if ( error.status === 404) {
        title = 'Not Found!';
        message = 'Could not find resource or page.'
    }
  return (
    <>
        <MainNavigation />
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </>
  );
}

export default ErrorPage