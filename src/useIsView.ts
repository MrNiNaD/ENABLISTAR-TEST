import { useLocation } from "react-router-dom";

export const useIsView = () => {
  const location = useLocation();

  return location?.pathname?.startsWith('/view')
}