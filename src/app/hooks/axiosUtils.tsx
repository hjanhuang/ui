// utils/axiosHelper.js
import axios from "axios";

export const axiosRequest = async ({ url = "", method = "GET", data = null, params = null as Record<string, any> | null, headers = {} }) => {
    const finalHeaders = {
        "Content-Type": "application/json",
        ...headers,
    };
    if (!url) {
        console.log("URL is required");
        return;
    }

    console.log({
        url,
        method,
        data,
        params,
        headers: finalHeaders,
    });
    
    try {
        const response = await axios({
            url,
            method,
            data,
            params,
            headers: finalHeaders,
        });

        console.log("Response from server:", response);
        return response;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};
