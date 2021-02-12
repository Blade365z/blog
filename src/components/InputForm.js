import React, { Component } from 'react'

export default class InputForm extends Component {
    render() {
        return (
            <div>
                <div className="input-group mb-3" style={{ maxWidth: '30%' }}>
                    <label className="input-group-text text-muted"> <i class="fas fa-filter me-1 "></i> Filter by</label>
                    <select className="form-select"  style={{ maxWidth: '30%' }} onChange={(e)=>{
                         this.props.updateSearchParams(e.target.value)
                    }}>
                        <option value="Username">User Name</option>
                        <option value="Company">Company</option>
                    </select>
                    <input type="text" className="form-control" placeholder={`Search by ${this.props.searchBy}`} onChange={(e)=>{
                        this.props.filter(e.target.value)
                    }} />
                </div>

            </div>
        )
    }
}
