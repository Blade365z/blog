import React, { Component } from 'react'
import { fetchUserDetails } from '../actions';
import { connect } from 'react-redux';


class UserPost extends Component {
    componentDidMount() {
        this.props.fetchUserDetails(this.props.match.params.id)
        //this.props.match.params.id
    }
    render() {
        return (
            <div className="card card-body userCard">
                <div className="d-flex">
                    <div className="me-3 text-center pt-3">
                        <div><i className="fa fa-user userPhoto" aria-hidden="true"></i></div>
                    </div>
                    <div className="">
                        <div><h4>{this.props.userDetail.name ? this.props.userDetail.name : null}</h4></div>
                        <div><p className="m-0">E-mail: {this.props.userDetail.email ? this.props.userDetail.email : null}</p></div>
                        <div><p className="m-0">Company: {this.props.userDetail.company ? this.props.userDetail.company.name : null}</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userDetail: state.userDetail
    }
}
export default connect(mapStateToProps, { fetchUserDetails })(UserPost);
