import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../sass/globalStyles.scss';




function RepoCard(props) {

    return(
        <div className="box">
            <Link to={`comments/${props.repo.id}`}>
            <div className=' image '>
                <img className=' is-128x128' src={props.repo.description_image} alt='profile'/>
            </div>
            <div>
                <div className='content is-large'>
                    <h2>{props.repo.title}</h2>
                </div>
                <div className='content'>
                    <p>{props.repo.description}</p>

                </div>

            </div>
            
            </Link>
        </div>
        
//         <div className="card" style={{"max-height": "300px", "max-width": "300px"}}>
//   <div className="card-image">
//     <figure className="image is-4by3">
//       <img src={props.repo.description_image} alt="Placeholder image"/>
//     </figure>
//   </div>
//   <div className="card-content">
//     <div className="media">
//       <div className="media-left">
//         <figure className="image is-48x48">
//           <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
//         </figure>
//       </div>
//       <div className="media-content">
//         <p className="title is-4">John Smith</p>
//         <p className="subtitle is-6">@johnsmith</p>
//       </div>
//     </div>

//     <div className="content">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Phasellus nec iaculis mauris. <a>@bulmaio</a>.
//       <a href="#">#css</a> <a href="#">#responsive</a>
//       <br/>
//       <time >11:09 PM - 1 Jan 2016</time>
//     </div>
//   </div>
// </div>
      
    )
}


export default RepoCard;