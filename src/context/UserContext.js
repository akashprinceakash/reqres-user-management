// import { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [editedUsers, setEditedUsers] = useState({});

//   const updateUserLocally = (userId, updatedData) => {
//     setEditedUsers(prev => ({
//       ...prev,
//       [userId]: updatedData
//     }));
//   };

//   return (
//     <UserContext.Provider value={{ users, setUsers, editedUsers, updateUserLocally }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUsers = () => useContext(UserContext);