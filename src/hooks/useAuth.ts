import { User } from "firebase/auth";
import { useState } from "react"

const useAuth = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState<User>({} as User);
};

export default useAuth