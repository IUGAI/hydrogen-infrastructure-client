import { json } from "react-router-dom";

export const getStations = async () => {
    const resStation = await fetch("http://172.30.1.86:8080/api/stations");
    const responseData = await resStation.json();
    return responseData;
}


export const getStationsDetail = async (id) => {
    const resStation = await fetch(`http://localhost:8080/api/stations/${id}`);
    const responseData = await resStation.json();
    return responseData;
}


export const addStation = async (station) => {
    try {
      const resStation = await fetch("http://localhost:8080/api/stations", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // You can add other headers if needed
        },
        body: JSON.stringify(station)
      });
  
      if (!resStation.ok) {
        const errorResponse = await resStation.json();
        throw new Error(`Failed to add station. Server responded with status ${resStation.status}: ${errorResponse.message}`);
      }
  
      const response = await resStation.json();
      return response;
    } catch (error) {
   
      console.error("Error adding station:", error.message);
      throw error; // Re-throw the error to allow the calling code to handle it
    }
  };

export const deleteStation = async (id) => {
    try {
        const resStation = await fetch(`http://localhost:8080/api/stations/${id}`, {
            method: 'DELETE'
        });

        if (!resStation.ok) {
            throw new Error(`Failed to delete station with ID ${id}`);
        }

        return { success: true };
    } catch (error) {
        console.error('Error deleting station:', error.message);
        return { success: false, error: error.message };
    }
};


