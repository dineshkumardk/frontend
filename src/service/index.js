// import axios from "axios";

// // const API_URL = "http://localhost:8082/tasks";
// const API_URL = "https://mern-task-manager-b5br.onrender.com/tasks";
// export const fetchTasks = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };

// export const createTask = async (formData) => {
//   await axios.post(API_URL, formData);
// };

// export const updateTask = async (taskId, taskData) => {
//   await axios.patch(`${API_URL}/${taskId}`, taskData);
// };

// export const deleteTask = async (taskId) => {
//   await axios.delete(`${API_URL}/${taskId}`);
// };

// export const markTaskAsDone = async (taskId) => {
//   await axios.patch(`${API_URL}/${taskId}`, { status: "DONE" });
// };
import axios from "axios";

// const API_URL = "http://localhost:8082/tasks";
const API_URL = "https://mern-task-manager-b5br.onrender.com/tasks";

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Use this if you're sending files
      },
    });
    return response.data; // Return the created task data
  } catch (error) {
    console.error("Error creating task:", error.response?.data || error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const updateTask = async (taskId, taskData) => {
  await axios.patch(`${API_URL}/${taskId}`, taskData);
};

export const deleteTask = async (taskId) => {
  await axios.delete(`${API_URL}/${taskId}`);
};

export const markTaskAsDone = async (taskId) => {
  await axios.patch(`${API_URL}/${taskId}`, { status: "DONE" });
};
