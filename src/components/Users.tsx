import React from 'react';
import User from './User';

const Users = () => {
    const handleAddUser=(): void =>{

    }
    return (
        <div>
            <h2>user</h2>
            <User addUser={handleAddUser} name="alan" age={20}/>
        </div>
    );
};

export default Users;