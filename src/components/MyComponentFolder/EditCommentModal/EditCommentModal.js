import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateComment } from '../../../actions/Actions';
import axios from 'axios';





class EditCommentModal extends Component {


    constructor(){
        super();

        this.state = {
            commentContent: '',
            modalIsActive: null,
        }
    }

    toggleModal(){
        if(this.state.modalIsActive){
            this.setState({
                modalIsActive: false,
            });
        }else{
            this.setState({
                modalIsActive: true,
            })
        }
    }

    handleSubmit(event){

        event.preventDefault();

        const {
            commentContent
        } = this.state;

        
        if(commentContent){

            axios.patch('/api/editcomment/' + this.props.comment_id, {commentContent}).then(response => {
                console.log(response);
                this.props.setup();
                this.toggleModal();
            });
        }else{
            this.setState({
                commentContent: 'required input'
            })
        }


    }
    handleInputChange(value, type){
        this.setState({
            [type]: value,
        })

    }


    render(){
        console.log(this.state);
        const modalToggle = this.state.modalIsActive ? 'modal is-active' : 'modal';
        


        return(
            <div>
                <i className='far fa-edit' onClick={() => this.toggleModal() }>
                    
                </i>

                <div className={modalToggle}>
                <div className="modal-background" onClick={() => this.toggleModal()}></div>
                <div className="modal-content">
                    <div className='box'>
                        <form className='field has-background-white'>
                            <div>
                                <label>
                                    
                                    <input className='input' type='textarea' placeholder='Edit...' value={this.state.commentContent} onChange={event => this.handleInputChange(event.target.value, 'commentContent')}/>
                                </label>

                            </div>
                            
                            <button className=' button is-primary' onClick={(event) => {this.handleSubmit(event)}}>
                                Submit
                            </button>

                        </form>

                    </div>
                    
                </div>
                <button onClick={() => this.toggleModal()} className="modal-close is-large" aria-label="close"></button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    const {
        id,
    } = reduxState.userReducer;
    return{
        id,
    }
}




export default connect(mapStateToProps, { updateComment })(EditCommentModal);