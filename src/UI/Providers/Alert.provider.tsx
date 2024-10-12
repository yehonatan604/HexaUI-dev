import { useState } from "react";
import HexaAlert from "../Components/Common/Alert/Alert";
import { AlertStackContext } from "../../Core/Context/AlertStack.context";
import generateRandomId from "../../Core/Helpers/IdHelper";

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (alert: JSX.Element) => {
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      {
        id: generateRandomId(),
        alert,
      },
    ]);
  };

  const removeAlert = (id: string) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <AlertStackContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
      {alerts.map((alert) => (
        <HexaAlert key={alert.id} {...alert} />
      ))}
    </AlertStackContext.Provider>
  );
};

export default AlertProvider;
