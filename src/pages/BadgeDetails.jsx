import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import '../pages/style/BadgeDetails.css'



export default function BadgeDetails(props){
    const badge = props.badge
    return(
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={Logo} alt="logo"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter}/>
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center ">
                            <h2>Actions</h2>
                            <div className="d-flex flex-column justify-content-center">
                                <Link className="btn rounder btn-primary my-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                                <button  onClick={props.onOpenModal} className="btn rounder btn-danger">Delete</button>
                                <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge}/>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}