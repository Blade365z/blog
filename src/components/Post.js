import React, { Component } from 'react'
import { getPostDetails, fetchUserDetails, getPostComments } from '../actions';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import { deletePostAPI } from './helper';

class Post extends Component {
    componentDidMount() {
        this.props.getPostDetails(this.props.match.params.id);
        this.props.fetchUserDetails(this.props.match.params.userID);
        this.props.getPostComments(this.props.match.params.id)
    }
    constructor(props) {
        super(props);
        this.state = {
            filterParams: '',
            data: [],
            isShowingComment: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.postDetail !== this.props.postDetail) {
            this.setState({
                data: this.props.postDetail
            })
        }
    }
    handleFilter = (keyword) => {
        this.setState({
            filterParams: keyword
        })
    }
    deletePost = () => {
        const id = this.state.data.id;
        deletePostAPI(id).then(() => {
            this.props.history.push(`/posts/${this.props.userDetail.id}`);
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        const commentsBody = this.props.comments.map(comment => {
            return <li className="comment"><div className="card card-body"><div><small className="text-muted"><i className="fa fa-user me-1" aria-hidden="true"></i> {comment.email}</small></div>{comment.body}</div></li>
        })
        var postTitle = this.state.filterParams === '' ? this.state.data.title : this.state.data.title.replace(new RegExp(this.state.filterParams, 'g'), `~${this.state.filterParams}~`).split("~").map((item, i = 0) => {
            return item.includes(this.state.filterParams) ? <span className="text-primary" key={i++}>{item}</span> : item
        });
        var postBody = this.state.filterParams === '' ? this.state.data.body : this.state.data.body.replace(new RegExp(this.state.filterParams, 'g'), `~${this.state.filterParams}~`).split("~").map((item, i = 0) => {
            return item.includes(this.state.filterParams) ? <span className="text-primary" key={i++}>{item}</span> : item
        });
        return (
            <div>
                <InputForm searchBy="Text" filter={this.handleFilter} />
                <div className="card card-body">

                    <div>

                        <h3 style={{ margin: '0px' }} >{postTitle}</h3>
                        <small className="text-muted mt-2">Posted by: {this.props.userDetail.name ? this.props.userDetail.name : null}</small>
                    </div>
                    <div className="mt-3">
                        {postBody}
                    </div>
                    <div className="mt-3" >
                        <div className="d-flex">
                            <div className="text-primary" id="show-comments" onClick={() => {
                                this.state.isShowingComment === false ? this.setState({ isShowingComment: true }) : this.setState({ isShowingComment: false })
                            }} ><i className="fas fa-comment me-1"></i><span>{this.state.isShowingComment === true ? 'Hide' : 'Show'} comments</span></div>
                            <div className="text-danger " id="delete-post" onClick={this.deletePost}>
                                <i class="fas fa-trash-alt me-1"></i> Delete post
                        </div>

                        </div>

                        <div className={this.state.isShowingComment === true ? 'collapse show' : 'collapse'} >
                            <div >
                                <ul style={{ margin: '0px', padding: '0px' }}> {commentsBody} </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userDetail: state.userDetail,
        postDetail: state.postDetails,
        comments: state.comments
    }
}


export default connect(mapStateToProps, {
    getPostDetails,
    fetchUserDetails,
    getPostComments
})(Post);