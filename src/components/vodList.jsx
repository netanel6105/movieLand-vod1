import React from 'react'
import { Link } from "react-router-dom";

const VodList = (props) => {
    let item = props.item
    return (
        

        
            <div className='vod-list  mt-4 mb-3 col-lg-3 col-md-6 col-6'>
                <Link to={'/InfoList/' + item.imdbID}>
                    <img src={item.Poster} className="imageList " alt="" />
                </Link>

            </div>
           
        
    )
}

export default VodList