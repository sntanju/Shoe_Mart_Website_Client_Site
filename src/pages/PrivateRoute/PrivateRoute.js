import React from 'react';
import { Redirect, Route } from 'react-router';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    console.log(user);

    if(isLoading) {
        return <Spinner animation="border" varient='success' />
    }

    return (
        <Route 
            {...rest}
                render = {({location}) => user.email ? ( children ) : ( <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect> )
        
            }
        ></Route>
    );
};

export default PrivateRoute;