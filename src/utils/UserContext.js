import { createContext } from "react";

export const UserContext = createContext({
  loggedInUser: {
    name: "Anshul Bhardwaj",
    deliveryData: {
      eta: "30 - 45 min",
      address: "Govind Sarovar, Mangalam City",
      contact: "+91 XXX-XXX-XXXX",
    },
  },
});

export default UserContext;
