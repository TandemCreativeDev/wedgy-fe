export async function fetchData (api: string, query: string, method: string = 'GET'): Promise<any> {
    try {
        const response = await fetch(`https://${api}/${query}`, {
            method: `${method}`,
            headers: {
            "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};