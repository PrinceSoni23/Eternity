export const getUser = async (id: string) => {
    // const token = localStorage?.getItem("accessToken")?.slice(1, -1);
    // if (token) {
    //     console.log("Token - ", token);
    // } else {
    //     console.log("Token not found in local storage.");
    //     return;
    // }
    console.log("Fetching user with id - ", id);
    if(!id)
        return;
    
    try {
        const response = await fetch(`http://localhost:8000/api/v1/users/get-user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "authorization": `Bearer ${token}`,
            },
            credentials: "include", 
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log("Error data - " , errorData)
            throw new Error(errorData?.message || "Error in fetching user details.");
            
        }

        const userData = await response.json();
        // console.log("User data - ", userData);
        return userData?.user;
    } catch (error) {
        console.error("Error in getUser:", error);
        return null;
    }
};
