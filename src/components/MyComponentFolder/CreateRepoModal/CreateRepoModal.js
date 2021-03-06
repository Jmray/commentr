import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';





class CreateRepoModal extends Component {


    constructor(){
        super();

        this.state = {
            title: '',
            description: '',
            descriptionImage: '',
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
            title,
            description,
            descriptionImage,
        } = this.state;
        const ownerId = this.props.id;

        if(title&& description&& descriptionImage){

            axios.post('/api/newrepo', {title, ownerId, description, descriptionImage}).then(res => console.log(res.data));
            this.props.getRepos();
            this.toggleModal();
        }else{
            this.setState({
                title: 'required input',
                description: 'required input',
                descriptionImage: 'required input'
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
                <button onClick={() => this.toggleModal() }>
                    New Repo
                </button>

                <div className={modalToggle}>
                <div onClick={() => this.toggleModal()} className="modal-background"></div>
                <div className="modal-content">
                    <div className='box'>
                        <form className='field has-background-white'>
                            <div>
                                <label>
                                    Title
                                    <input className='input' type='text' value={this.state.title} onChange={event => this.handleInputChange(event.target.value, 'title')}/>
                                </label>

                            </div>
                            <br/>
                            <div>
                                <label>
                                    Description
                                    <input className='input' type='text' value={this.state.description} onChange={event => this.handleInputChange(event.target.value, 'description')}/>
                                </label>
                                
                            </div>
                            <br/>
                            <div>
                                <label>
                                    Image
                                    <input className='input' type='text' value={this.state.descriptionImage} onChange={event => this.handleInputChange(event.target.value, 'descriptionImage')}/>
                                </label>
                                
                            </div>
                            <button className=' button is-pink' onClick={(event) => {this.handleSubmit(event)}}>
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




export default connect(mapStateToProps)(CreateRepoModal);