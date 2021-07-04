import React from "react"

class Work extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit: true,
      name: "",
      title: "",
      joining: "",
      leaving: "",
      description: ""
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
    if(this.state.name !== "" && this.state.title !== "" && this.state.joining !== 'number' && this.state.leaving !== "" && this.state.description !== "")
    return true
    else
    return false
  }
  render(){
    let result
    if(this.state.isEdit){
      result = <div className="section">
                  <h3>Work Experience </h3>
                  <form onSubmit={this.HandleSubmit}>
                    <label>Name: <input type= "text" name="name" onChange={this.HandleChange} value={this.state.name}/></label><br/>
                    <label>Title of position: <input type= "text" name="title" onChange={this.HandleChange} value={this.state.title}/></label><br/>
                    <label>Joining date: <input type= "date" name="joining" onChange={this.HandleChange} value={this.state.joining} /></label><br/>
                    <label>Leaving date: <input type= "date" name="leaving" onChange={this.HandleChange} value={this.state.leaving}/></label><br/>
                    <label>Job description: <input type="text" name="description" onChange={this.HandleChange} value={this.state.description}/></label>
                    <button>Submit</button>
                  </form>
              </div>
    }
    else{  

      result =<div className="section">
                <h3>Work Experience </h3>
                <p>Name: {this.state.name}</p>
                <p>Position: {this.state.title}</p>
                <p>Joining date: {this.state.joining}</p>
                <p>Leaving date: {this.state.leaving}</p>
                <p>Job description: {this.state.description}</p>
                <button onClick={this.HandleEdit}>Edit</button>
              </div>
    }
    return(
      result
    )
  }
}

export default Work