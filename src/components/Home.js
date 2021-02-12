import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsersWithBlogCount, searchByUser } from '../actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './InputForm';



class Home extends Component {
    componentDidMount() {
        this.props.fetchUsersWithBlogCount();
    }
    state = {
        filterParam: 'Username',
        filterKeyword: ''
    }
    onFilterApply = (data) => {
        this.setState({
            filterKeyword: data
        })
    }
    updateSearchParams = (params) => {
        this.setState({
            filterParam: params
        })
    }
    render() {
        return (
            <div className="p-5">
                <div className="card card-body">
                    <h4>Bloggers</h4>
                    <InputForm filter={this.onFilterApply}  searchBy={this.state.filterParam}   updateSearchParams={this.updateSearchParams}/>
                    <table className="table">
                        <thead className="table-dark">
                            <tr >
                                <th scope="col">User Name</th>
                                <th scope="col">Company</th>
                                <th scope="col">Blogs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.users.map((user) => {
                                    const num = this.props.numOfPosts.find(key => key.id === user.id ? key.num : 0)
                                    if (this.state.filterKeyword === '') {

                                    } else {
                                        if(this.state.filterParam==='Username'){
                                            if (!user.name.includes(this.state.filterKeyword)) 
                                                return false; // skip
                                        }else{
                                            if (!user.company.name.includes(this.state.filterKeyword)) 
                                            return false;
                                        }
                                    }
                                    return (<tr key={user.id}><td>{user.name}</td><td>{user.company.name}</td><td><a className="link-primary" href="#"> {
                                        num ? num.num : 0
                                    } blogs</a></td></tr>);
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, numOfPosts: state.numOfPosts }
}

export default connect(mapStateToProps, { fetchUsersWithBlogCount, searchByUser })(Home);
