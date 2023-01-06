import React from 'react'
// import SelectYear from '../../components/selectYear'
import NavBar from './navBar'


const Header = () => {



    return (

        <div className='top '>



            <NavBar />


            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="top-carousel carousel-item active">
                        <div className='bg-carousel1'></div>
                        {/* <img src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." /> */}
                    </div>
                    <div class="top-carousel carousel-item">
                        <div className='bg-carousel2'></div>
                        {/* <img src="https://images.pexels.com/photos/8273631/pexels-photo-8273631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." /> */}
                    </div>
                    <div class="top-carousel carousel-item">
                        <div className='bg-carousel3'></div>
                        {/* <img src="https://images.pexels.com/photos/7991142/pexels-photo-7991142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." /> */}
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

              

        </div>
    )
}

export default Header
















