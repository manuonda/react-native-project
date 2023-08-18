import { API_URL } from "./config"

export const login = async (data) => {
    try {
         const resp  =  await fetch(`${API_URL}/login` ,{
            method: 'POST',
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify(data)
         });
    } catch (error) {
        console.error(error);
        throw new Error('Error during login process : ')
    }
}