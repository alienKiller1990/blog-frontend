import React from 'react';
import { Redirect } from 'react-router';

function NotFound() {
    return (
        <div>
            <Redirect to="/"/>
            {/* <h1>Ничего не найдено :(</h1>
            <p>К сожалению, по этому адресу ничего не найдено</p> */}
            
        </div>
    )
}

export default NotFound
