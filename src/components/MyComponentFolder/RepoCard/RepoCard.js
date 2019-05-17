import React from 'react';
import { Link } from 'react-router-dom';




function RepoCard(props) {

    return(
        <div>
            <Link to={`comments/${props.repo.id}`}>
            <div>
                <img src={props.repo.description_image} alt='profile'/>
            </div>
            <div>
                <div>
                    <h2>{props.repo.title}</h2>
                </div>
                <div>
                    <h3>{props.repo.description}</h3>

                </div>

            </div>
            
            </Link>
        </div>
        
      
    )
}


export default RepoCard;