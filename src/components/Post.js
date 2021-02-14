import React, { Component } from 'react'
import { getPostDetails } from '../actions';
import { connect } from 'react-redux';
import InputForm from './InputForm';


class Post extends Component {
    componentDidMount() {
        this.props.getPostDetails(this.props.match.params.id)
    }
    constructor(props) {
        super(props);
        this.state = {
            filterParams: 'dol',
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.postDetail !== this.props.postDetail) {
            this.setState({
                data: this.props.postDetail
            })
        }
    }
    render() {
        let string = 'dol';
        var postBody = this.state.data.body ? this.state.data.body.replace(new RegExp(string, 'gi'), ` ~${string}~`).split("~") : '';
        for (var i = 1; i < postBody.length; i++) {
            if (postBody[i].includes(string)) {
                console.log('fountat : ', i)
                postBody[i] = <span className="text-primary" key={i}>{postBody[i]}</span>;
            }
        }
        return (
            <div>
                <InputForm searchBy="Text" />
                <div className="card card-body">
                    <div>
                        <h3 >{this.state.data.title}</h3>
                    </div>
                    <div>
                        {postBody}
                //TODO::Loader
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.postDetails)
    return {
        postDetail: state.postDetails
    }
}


export default connect(mapStateToProps, {
    getPostDetails
})(Post);