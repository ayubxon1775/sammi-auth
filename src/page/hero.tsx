import { Navbar } from "../components";
import { useAuthStore } from "../store/auth.store"

const hero = () => {
  const { isLoading, user, error } = useAuthStore();
  
  
  return (
  <>
    <Navbar />
  </>
   )
}

export default hero