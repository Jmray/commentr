import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CommentContainer, CommentForm} from '../../index';
import { updateRepo } from '../../../actions/Actions';
import { getComments, conditionalRender, getRepo } from '../../../_utils';



class CommentView extends Component{

    constructor(props){
        super(props);
        props.updateRepo(props.match.params.id);

        this.state = {
            repo: {},
            comments: [],
            replies: [1],
            
        }
        
    }
    componentDidMount(){
        this.setComments();
        this.getAllReplies();
        this.setRepo();
        
    }
    setComments(){
        getComments(this.props.match.params.id).then(response => {
            this.setState({
                comments: response.data,
            })
        })
    }
    setRepo(){
        getRepo(this.props.match.params.id).then(response => {
            this.setState({
                repo: response.data[0],
            })
        })
    }
    
    getAllReplies(){
        axios.get(`/api/replies/${this.props.match.params.id}`).then(replies => {
            this.setState({
                replies: replies.data
            })
        })
    }

    

    hasReplies(commentId){
         return(this.state.replies.filter( comment => {
           return comment.reply_id === commentId;
        }).length !== 0
        )
        

    }
    
   

    render(){
        


        console.log(this.state);
        const comments = this.state.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <CommentContainer
                        comment={comment} 
                        hasReplies={this.hasReplies(comment.id)} 
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
                            <img className='is-rounded' style={{"minHeight": "48px"}} src={this.props.image_url} alt="Placeholder"/>
                            </figure>
                        </div>
                        <div className="media-content level">
                            <p className="title is-4  level-item level-left">{this.state.repo.title}</p>
                        <time >{this.state.repo.time_stamp}</time>
                        </div>
                    </div>

                    <div className="content">
                        {this.state.repo.description}
                        <br/>
                    </div>
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={this.state.repo.description_image} alt="Placeholder"/>
                    </figure>
                </div>
                </div>
            </div>
                </div>
            
                
            <div>
                <CommentForm/>
                {conditionalRender(comments, 'loading replies', this.state.replies[0] !== 1)}
            </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    const {
        image_url
    } = reduxState.userReducer;
    const {} = reduxState.repoReducer;
    return{
        image_url,
    }
}


export default connect(mapStateToProps, { updateRepo })(CommentView);