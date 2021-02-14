import React, { Component } from 'react'
import { fetchUserDetails, getPostsForAUserWithPagination,getPostsForAUser } from '../actions';
import { connect } from 'react-redux';
import Pages from './Pages';
import InputForm from './InputForm';


class UserPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID:null,
            limit: 3,
            pageOffset: 1,
            totalPostsByUser: 10,  //could be directly acheived from a API req and count length
            filterParams:'',
            isFetched:false
        }
    }
    componentDidMount() {
        this.setState({
            userID : this.props.match.params.id
        })
        this.props.fetchUserDetails(this.props.match.params.id)
        this.props.getPostsForAUserWithPagination(this.props.match.params.id, this.state.pageOffset, this.state.limit);
    }
    updatePosts = (pageNo) => {
        this.setState({
            pageOffset: pageNo
        });
        this.props.getPostsForAUserWithPagination(this.props.match.params.id, pageNo, this.state.limit);
    }
    filterPosts = (keyword) => {
        this.setState({
            filterParams:keyword
        });
        this.props.getPostsForAUser(this.state.userID);
    }
    render() {
        const posts = this.state.filterParams ==='' ?  this.props.paginatedPosts.map(post => {
            return <li className="posts-card" key={post.id+'-'+post.title}><div ><h4>{post.title}</h4></div></li>
        }) : this.props.posts.map(post=>{
            if(post.title.includes(this.state.filterParams)){
                return <li className="posts-card" key={post.id+'-'+post.title}><div ><h4>{post.title}</h4></div></li>
            }
        })
        return (<div>
            <div className="card card-body userCard">
                <div className="d-flex">
                    <div className="me-3 text-center pt-3">
                        <div><i className="fa fa-user userPhoto" aria-hidden="true"></i></div>
                    </div>
                    <div className="">
                        <div><h4 >{this.props.userDetail.name ? this.props.userDetail.name : null}</h4>  </div>
                      
                        <div><p className="m-0">E-mail: {this.props.userDetail.email ? this.props.userDetail.email : null}</p></div>
                        <div><p className="m-0">Company: {this.props.userDetail.company ? this.props.userDetail.company.name : null}</p></div>
                    </div>
                </div>
            </div>
            <div className="card card-body postsOfuserCard">
                <div><h6 style={{ marginLeft: '6px' }}>Blogs posted by {this.props.userDetail.name ? this.props.userDetail.name : null}</h6></div>
                <div>
                <div className="mx-1">
                            <InputForm searchBy="Blog title" filter={this.filterPosts}/>
                        </div>
                    <div className="posts">
                        <ul style={{ padding: '0px' }}>{posts.length > 0 ? posts : <div className="loader"><h4><span className="donutSpinner me-2 "></span>Loading...</h4></div>}</ul>
                    </div>
                </div>
                <div>
                  { this.state.filterParams==='' && <Pages 
                    totalPages={this.state.totalPostsByUser} 
                    currentPage = {this.state.pageOffset} 
                    limit={this.state.limit}
                    updatePost={this.updatePosts} />}
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.posts);
    return {
        userDetail: state.userDetail,
        paginatedPosts: state.paginatedPosts,
        posts:state.posts
    }
}
export default connect(mapStateToProps, { 
    fetchUserDetails, 
    getPostsForAUserWithPagination,
    getPostsForAUser
 })(UserPost);
