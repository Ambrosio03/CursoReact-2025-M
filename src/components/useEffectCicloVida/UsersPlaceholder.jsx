import { useEffect, useState } from "react";

const UsersPlaceholder = () => {

    const [users, setUsers] = useState([])
    const fetchDataPlaceholder = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(await response.json());
        } catch (error) {
            console.log("Error", error);
        }


    };

    useEffect(() => {
        fetchDataPlaceholder()
    }, [])

    return (
        <div className="bg-gray-200 shadow-lg p-6 flex-col justify-center items-center">
            {users.map((user) => {
                return (
                    <div key={user.id} className="flex items-center justify-center">
                        <h2 className="text-xl font-bold mb-4">
                            User name:{user.name}
                        </h2>
                        <p className="text-gray-600 mb-4">City: {user.address.city}</p>
                    </div>
                )
            })}

        </div>
    )
};

export default UsersPlaceholder;
