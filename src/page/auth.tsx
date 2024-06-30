import { useState } from "react";

const auth = () => {
    const [auth, setAuth] = useState< 'signup' | 'signin' >('signin')

    const toggleAuth = (state:'signup' | 'signin') => {
        setAuth(state)
    };

  return (
  <main className=" container form-signin text-center mt-4">
  <form className="m-auto w-50">
    <img className="mb-4" src="https://media.graphassets.com/BldVa3tyRDy2QkoyQq9R" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal text-start"> Sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mt-2">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    
    <button className="btn btn-lg btn-primary mt-2 w-100 py-2" type="submit">Sign in</button>
    
    <p className="mt-2 fw-bold">Not account yet <span className="fw-normal text-primary pointer" style={{cursor: 'pointer'}}>Sign up now</span></p>
  </form>
</main> 
  );
};

export default auth