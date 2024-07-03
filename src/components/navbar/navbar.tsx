import { image } from "../assets"


const navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
    <img src={image} alt="" className="pt-2" width="70" height="70"/>
     

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Features</a>
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Enterprise</a>
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Support</a>
        <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a>
      </nav>
    </div>
  )
  
}

export default navbar