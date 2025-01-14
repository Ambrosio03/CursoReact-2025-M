import React from 'react'

const UserCard = (props) => {
    const { user } = props;
    return (
        <div className="flex flex-col bg-white shadow-lg p-6 justify-center items-center w-64 h-64 ">
            <div className="flex flex-col justify-center items-center bg-yellow-200 p-4 h-full w-full">
                <h2 className="text-xl font-bold mb-4">
                    User name: {user.username}
                </h2>
                <p className="text-gray-600 mb-4">Email: {user.email}</p>
                <p className="text-gray-600 mb-4">Password: {user.password}</p>
            </div>
        </div>
    );
};


export default UserCard