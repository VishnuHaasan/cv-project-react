import React from "react"

class Personal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit: true,
      name: "",
      email: "",
      phone: "",
      age: ""
    }
    this.HandleChange = this.HandleChange.bind(this)
    this.HandleSubmit = this.HandleSubmit.bind(this)
    this.HandleEdit = this.HandleEdit.bind(this)
  }

  HandleChange(event){
    const {name, value} = event.target
    this.setState({[name]: value})
    if(value !== ""){
      event.target.style.border = "2px solid greenyellow"
    }
    else{
      event.target.style.border = "2px solid red"
    }
  }

  HandleSubmit(event){
    event.preventDefault()
    if(!this.ValidateInput()){
      alert("Enter information correctly!!!")
      return
    }
    const res = !this.state.isEdit
    this.setState({isEdit: res})
    console.log(this.state.isEdit)
  }

  HandleEdit(event){
    const res = !this.state.isEdit
    this.setState({isEdit: res})
    console.log(this.state.isEdit)
  }

  ValidateInput(){
    if(this.state.name !== "" && this.state.email !== "" && this.state.phone !== 'number' && this.state.age !== "")
    return true
    else
    return false
  }
  render(){
    let result
    if(this.state.isEdit){
      result = <div className="section">
                  <h3>Personal Details </h3>
                  <form onSubmit={this.HandleSubmit}>
                    <label>Name: <input type= "text" name="name" onChange={this.HandleChange} value={this.state.name}/></label><br/>
                    <label>Age: <input type= "number" name="age" onChange={this.HandleChange} value={this.state.age}/></label><br/>
                    <label>Email: <input type= "text" name="email" onChange={this.HandleChange} value={this.state.email} /></label><br/>
                    <label>Phone: <input type= "number" name="phone" onChange={this.HandleChange} value={this.state.phone}/></label><br/>
                    <button>Submit</button>
                  </form>
              </div>
    }
    else{  

      result =<div className="section">
                <h3>Personal Details </h3>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <button onClick={this.HandleEdit}>Edit</button>
              </div>
    }
    return(
      result
    )
  }
}

export default Personal