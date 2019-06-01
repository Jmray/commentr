import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CommentContainer, CommentForm} from '../../index';
import { updateRepo, updateComments, updateReplies } from '../../../actions/Actions';
import { getComments, conditionalRender, getRepo } from '../../../_utils';



class CommentView extends Component{

    constructor(props){
        super(props);
        props.updateRepo(props.match.params.id);

        this.state = {
            
        }
        
    }
    componentDidMount(){
        this.setup();
        
    }
    setup(){
        this.setComments();
        this.getAllReplies();
        this.setRepo();
    }
    setComments(){
        getComments(this.props.match.params.id).then(response => {
            this.props.updateComments(response.data);
        })
    }
    setRepo(){
        getRepo(this.props.match.params.id).then(response => {
            this.props.updateRepo(response.data[0]);
        })
    }
    
    getAllReplies(){
        axios.get(`/api/replies/${this.props.match.params.id}`).then(replies => {
            this.props.updateReplies(replies.data);
        })
    }

    

    hasReplies(commentId){
         return(this.props.replies.filter( comment => {
           return comment.reply_id === commentId;
        }).length !== 0
        )
        

    }
    
   

    render(){
        


        const comments = this.props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <CommentContainer
                        comment={comment} 
                        hasReplies={this.hasReplies(comment.id)} 
                        setup={() => this.setup()}
                        />
                </div>
            )
        });

        
        return(

            
            <div>
                <div className=''>
                <div className="" >
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48 is-rounded">
                            <img className='is-rounded' style={{"minHeight": "48px"}} src={this.props.currentRepo.image_url} alt="Placeholder"/>
                            </figure>
                        </div>
                        <div className="media-content level">
                            <p className="title is-4  level-item level-left">{this.props.currentRepo.title}</p>
                        <time >{this.props.currentRepo.time_stamp}</time>
                        </div>
                    </div>

                    <div className="content">
                        {this.props.currentRepo.description}
                        <br/>
                    </div>
                <div className="card-image">
                    <figure className="image is-4by3 columns">
                    <img className='repoImage column' src={this.props.currentRepo.description_image} alt="Placeholder"/>
                    </figure>
                </div>
                </div>
            </div>
                </div>
            
                
            <div>
                <CommentForm setup={() => this.setup()}/>
                {conditionalRender(comments, 'loading replies', this.props.replies[0] !== 1)}
            </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    const {
        image_url
    } = reduxState.userReducer;
    const { 
        comments,
        replies,
        currentRepo
     } = reduxState.repoReducer;
    return{
        image_url,
        comments,
        replies,
        currentRepo
    }
}


export default connect(mapStateToProps, { updateRepo, updateComments, updateReplies })(CommentView);