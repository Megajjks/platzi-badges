import React from 'react';
//import { emit } from 'cluster';

class BadgeForm extends React.Component {
    //state ={}; // declaramos el state
  /* handleChange = (e) =>{
      //console.log({name: e.target.name, value: e.target.value});
      this.setState({
          [e.target.name]: e.target.value,  //aquí guardamos los datos que escucha el evento en los nombres de los campos correspondientes.
      });
  }; */

  handleClick = (e) =>{
    console.log("Button was click");
  };

  render() {
    return (
      <div>
          <h1>New Attendant</h1>
          <form onSubmit={this.props.onSubmit}>
              <div className="form-group">
                  <label htmlFor="">FirtsName</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">LastName</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Job title</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Twitter</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
              </div>
              <button onClick={this.handleClick} className="btn btn-primary">Save</button>
            {this.props.error && (
                <div className="alert alert-danger my-2" role="alert">
                    {this.props.error.message}
                </div>
            )}
          </form>
      </div>
    )
  }
}

export default BadgeForm
