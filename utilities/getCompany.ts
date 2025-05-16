export const getCompany = async (id: string) => {
    console.log("Fetching company with id - ", id);
    try {
        const response = await fetch(`http://localhost:8000/api/v1/companies/get-company/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", 
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log("Error data - " , errorData)
            throw new Error(errorData?.message || "Error in fetching company details.");
            
        }

        const companyData = await response.json();
        // console.log("company data - ", companyData);
        return companyData?.company;
    } catch (error) {
        console.error("Error in getCompany:", error);
        return null;
    }
};
