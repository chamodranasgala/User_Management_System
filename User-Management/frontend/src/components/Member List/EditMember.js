import React, { Component } from 'react';
import axios from 'axios';

export default class EditMember extends Component {

  constructor(props) {
    super(props);
    this.state = {
      memberName: "",
      address: "",
      email: "",
      phoneNumber: "",
      gender: "",
      weight: "",
      height: "",
      otherDetails: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  }

  validate = () => {

    let memberNameError = "";
    let addressError = "";
    let emailError = "";
    let phoneNumberError = "";
    let genderError = "";
    let weightError = "";
    let heightError = "";



    if (!this.state.memberName) {
      memberNameError = 'This field cannot be Empty!';
    }
    if (!this.state.address) {
      addressError = 'This field cannot be Empty!';
    }
    if (!this.state.email) {
      emailError = 'This field cannot be Empty!';
    }
    if (!this.state.phoneNumber) {
      phoneNumberError = 'This field cannot be Empty!';
    }
    if (!this.state.gender) {
      genderError = 'This field cannot be Empty!';
    }
    if (!this.state.weight) {
      weightError = 'This field cannot be Empty!';
    }
    if (!this.state.height) {
      heightError = 'This field cannot be Empty!';
    }


    if (memberNameError || addressError || emailError || phoneNumberError || genderError || weightError || heightError) {
      this.setState({ memberNameError, addressError, emailError, phoneNumberError, genderError, weightError, heightError });
      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const { memberName, address, email, phoneNumber, gender, weight, height, otherDetails } = this.state;

    const isValid = this.validate();
    if (isValid) {

      const data = {
        memberName: memberName,
        address: address,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
        weight: weight,
        height: height,
        otherDetails: otherDetails
      }
      console.log(data)

      axios.put(`/member/update/${id}`, data).then((res) => {
        if (res.data.success) {
          alert("Updated Successfully");
          this.setState(
            {
              memberName: "",
              address: "",
              email: "",
              phoneNumber: "",
              gender: "",
              weight: "",
              height: "",
              otherDetails: ""
            }
          )
        }
      });
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/member/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          memberName: res.data.member.memberName,
          address: res.data.member.address,
          email: res.data.member.email,
          phoneNumber: res.data.member.phoneNumber,
          gender: res.data.member.gender,
          weight: res.data.member.weight,
          height: res.data.member.height,
          otherDetails: res.data.member.otherDetails
        });
        console.log(this.state.member);
      }
    });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='col-md-8 mt-4 mx-auto'>
            <center><h1 className='h3 mb-3 font-weight-normal'>Edit Member Details</h1></center>

            <form className='needs-validation' noValidate>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Name</label>
                <input type='text' className='form-control' name='memberName' placeholder='Enter Name' value={this.state.memberName} onChange={this.handleInputChange}></input>

                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.memberNameError}
                </div>
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Address</label>
                <input type='text' className='form-control' name='address' placeholder='Enter Address' value={this.state.address} onChange={this.handleInputChange}></input>

                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.addressError}
                </div>
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input type='text' className='form-control' name='email' placeholder='Enter Email' value={this.state.email} onChange={this.handleInputChange}></input>

                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.emailError}
                </div>
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Phone Number</label>
                <input type='text' className='form-control' name='phoneNumber' placeholder='Enter Phone Number' value={this.state.phoneNumber} onChange={this.handleInputChange}></input>

                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.phoneNumberError}
                </div>
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Gender</label>
                <input type='text' className='form-control' name='gender' placeholder='Enter Gender' value={this.state.gender} onChange={this.handleInputChange}></input>

                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.genderError}
                </div>
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Weight</label>
                <input type='text' className='form-control' name='weight' placeholder='Enter Weight' value={this.state.weight} onChange={this.handleInputChange}></input>

                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.weightError}
                </div>
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Height</label>
                <input type='text' className='form-control' name='height' placeholder='Enter Height' value={this.state.height} onChange={this.handleInputChange}></input>

                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.heightError}
                </div>
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Other Details</label>
                <input type='text' className='form-control' name='otherDetails' placeholder='Enter Other Details' value={this.state.otherDetails} onChange={this.handleInputChange}></input>
              </div>

              <button className='btn btn-warning' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                <i className='far fa-check-square'></i>
                &nbsp; Edit
              </button>

            </form>
          </div>
        </div>

        <br /><br />
      </>
    )
  }
}