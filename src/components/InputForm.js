import React, { Component } from 'react'

export default class InputForm extends Component {
    //Input form for filtering 
    render() {
        return (
          
                <div className="input-group mb-2 ms-auto filter-form" >
                    
                    <label className="input-group-text text-muted"> <i className="fas fa-filter me-1 "></i> Filter by</label>
                   {
                   //Select dropdown would only be rendered when updateSearchParams props would be provided. The prop defines wheather a user wants to filter by some a,b,c,d... where a,b,c,d.. is any attribute like username , company
                   this.props.updateSearchParams &&  <select className="form-select"  style={{ maxWidth: '30%' }} onChange={(e)=>{
                         this.props.updateSearchParams(e.target.value)
                   
                   
                   }}>
                        <option value="Username">User Name</option>
                        <option value="Company">Company</option>
                    </select>}
                    <input type="text" className="form-control" placeholder={`Type ${this.props.searchBy}`} onChange={(e)=>{
                        this.props.filter(e.target.value)
                        //On change property
                    }} /> 
                </div>

          
        )
    }
}
