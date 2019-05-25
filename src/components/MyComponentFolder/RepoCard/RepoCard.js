import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import '../../../sass/globalStyles.scss';




function RepoCard(props) {

    return(
        
        <Link  to={`comments/${props.repo.id}`}>

            <div className="card" >
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={props.repo.description_image} alt="Placeholder"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48 is-rounded">
                            <img className='is-rounded' style={{"minHeight": "48px"}} src={props.image_url} alt="Placeholder"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{props.repo.title}</p>
                        </div>
                    </div>

                    <div className="content">
                        {props.repo.description}
                        <br/>
                        <time >{props.repo.time_stamp}</time>
                    </div>
                </div>
            </div>
        </Link>
      
    )
}

const mapStateToProps = (reduxState) => {
    const {
        image_url,
    } = reduxState.userReducer;
    return{
        image_url,
    }
}




export default connect(mapStateToProps)(RepoCard);