import React, { Fragment,useState } from 'react'
import PropertyDetail from "../Detail/PropertyDetail"
import "../CSS/Property.css"

const Property = () => {
    const [Detail, setDetail] = useState(PropertyDetail);
  return (
    <Fragment>
        <section className="property" id="property">
            <div className="center">
                <h1>Popular Properties</h1>
            </div>
            <div className="row">
                {
                    Detail.map(detail => {
                        return(
                            <div className="column">
                             <div className="single-property">
                               <div className="card">
    
                                <div className="property-thumb">
                                    <div className="property-tag">For Sale</div>
                                    <img src={detail.Image} alt="Palace" />
                                </div>
    
                                <div className="property-content">
                                    <h3>{detail.heading}</h3>
                                    <div className="mark">
                                        <i className='fa-solid fa-location-dot'></i>
                                        <span>{detail.span}</span>
                                    </div>
                                    <span className="amount">{detail.amount}</span>
                                </div>
    
                                <div className="property-footer">
                                    <ul>
                                        <li>
                                            <span>{detail.size}</span>
                                        </li>
                                        <li>
                                            <img src={detail.bedImage} alt="" />
                                            <span>{detail.bed}</span>
                                        </li>
                                        <li>
                                            <img src={detail.bathImage} alt="" />
                                            <span>{detail.bath}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          </div>
                        </div>  
                        )
                    })
                }
               
            </div>
            <div className="more-property">
                <a href="#" className='property-btn'>More Properties</a>
            </div>
        </section>
    </Fragment>
  )
}

export default Property