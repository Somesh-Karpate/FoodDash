import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Footer() {
//     return (
//         <div><footer className="py-3 my-4">
//             <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//                 <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
//                 <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Features</Link></li>
//                 <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Pricing</Link></li>
//                 <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">FAQs</Link></li>
//                 <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">About</Link></li>
//             </ul>
//             <p className="text-center text-muted">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2001-2023 © FoodDash™ Ltd. All rights reserved.</p>
//         </footer></div>
//     )
// }

export default function Footer() {
    return (
        <div><div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="text-muted">© 2023 <i>FoodDash</i>, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
                </ul>
            </footer>
        </div>
        </div>
    )
}
