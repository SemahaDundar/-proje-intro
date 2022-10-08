import { Component } from "react";
import { Button, Form, FormGrup, Label, Input } from "reactstrap";
import alertify from 'alertifyjs';


export default class FormDemo2 extends Component {
  render() {
    state = { email: "", password: "", city: "", description: "" };
    handleChange = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      alertify.succes(this.state.email + "added to db!");
      alertify.succes(this.state.password + "added to db!");
      alertify.succes(this.state.city + "added to db!");
      alertify.succes(this.state.description + "added to db!");
    };
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGrup>
          <Label form="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={this.handleChange}

          ></Input>
          </FormGrup>


          <FormGrup>
          <Label form="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={this.handleChange}


          ></Input>
</FormGrup>
<FormGrup>
          <Label form="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="email"
            placeholder="Enter description"
            onChange={this.handleChange}

          ></Input>
          
          </FormGrup>
          <FormGrup>
        <Label form="city">City</Label>
        <Label type="select" name="city" id="city" onChange={this.handleChange}></Label>
<option>Ankara</option>
<option>İzmir</option>
<option>Ağrı</option>
<option>Antalya</option>
<option>Amasya</option>
          </FormGrup>
          <Button type="submit"> Save</Button>
        </Form>
      </div>
    );
  }
}
