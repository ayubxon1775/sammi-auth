import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState<User>({} as User);
  const navigate = useNavigate();

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
  await createUserWithEmailAndPassword(auth, email, password).then(res => {
    setUser(res.user);
    setIsLoading(false)
    navigate('/')
  }).catch(error => {
    const result = error as Error;
    setError(result.message);
  })
  .finally(() => setIsLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password).then(res => {
      setUser(res.user);
      setIsLoading(false)
      navigate('/')
    }).catch(error => {
      const result = error as Error;
      setError(result.message);
    })
    .finally(() => setIsLoading(false));
  };

  const logout = () => {
    
  };

  return { signIn, signUp, logout,  isloading, error }
};

export default useAuth