import React, { Component } from 'react'

class Pages extends Component {

    getPages = () => {
        const total = this.props.totalPages;
        const limit = this.props.limit;
        const lastPage = Math.ceil(total / limit)
        const pagesArr = Array.from(Array(lastPage).keys())
        return pagesArr;
    }
    pageClicked = (page) => {
        this.props.updatePost(page);
    }
    render() {
        const pagesBtn = this.getPages().map(page => {
            return (<li className="page-item" key={page}><div className={"page-link page-nos " + (this.props.currentPage===page+1 ? 'active-page' : '')}  onClick={() => { this.pageClicked(page + 1) }}>{page + 1}</div></li>)
        })
        return (
            <div >
                <nav className="" saria-label="Page navigation example">
                    <div>{this.props.numOfPosts}</div>
                    <ul className="pagination pagesDiv">
                        {pagesBtn}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pages;