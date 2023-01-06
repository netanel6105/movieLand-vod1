

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const inputRef = useRef(); 
    const nav = useNavigate();

    return (
        <div>
            <div className="navTop container-fluid  ">
                <div className='container-md'>
                    <div className="row ">

                        <nav class="navbar navbar-light  justify-content-between">
                            <Link class="navbar-brand col-lg-3 col-md-6 col-12" to={'/'}> 
                            <h1  className='animate-charcter  my-1 p-3' >MovieLand</h1> 
                            </Link>

                            <form class="form-inline d-flex">
                                <input onKeyDown={(e) => { if (e.key === "Enter")  { nav("/" + inputRef.current.value) }}} ref={inputRef} class="inp-1 form-control appearance-none   mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                               
                                <button onClick={() => {nav("/" + inputRef.current.value)}} class="bot-1 btn btn-warning   my-0 mx-0 my-sm-0" type="submit">Search</button>
                            </form>
                        </nav>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NavBar 


// VECTOR.TV