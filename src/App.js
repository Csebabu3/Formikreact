import React,{useState} from 'react';
import './App.css';
import { useFormik } from 'formik';
import Popup from './Components/Popup';

const validate = values => {
  const errors = {};
  if(!values.firstname){
    errors.firstname = "*Required";
  }
  else if(values.firstname.length > 8){
    errors.firstname = "*must be 8 characters or less";
  }
  if(!values.lastname){
    errors.lastname = "*Required";
  }
  else if(values.lastname.length > 8){
    errors.lastname = "*must be 8 characters or less";
  }
  if(!values.email){
    errors.email = "*Required";
  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
  errors.email = "*Invalid email address";
  }
  if(!values.password){
    errors.password = "*Required";
  }
  else if(values.password.length > 8){
    errors.password = "*maximum 8 characters";
  }
  else if(values.password.length < 4){
    errors.length = "*minimum 4 chracters";
  }
  if(!values.confirmpassword){
    errors.confirmpassword = "*required";
  }
  else if(values.password !== values.confirmpassword){
    errors.confirmpassword = "*password must match";
  }
  return errors;

}
const App = () =>{
  const [bool,setbool] = useState(0);
  const formik = useFormik({
    initialValues : {
      firstname : '',
      lastname : '',
      email : '',
      password : '',
      confirmpassword : '',
    },
    validate,
    onSubmit : (values ,{resetForm}) =>{
         if(bool){
          setbool(0);
          resetForm({values : ''})
      }
      else{
        setbool(1);
        console.log(values); 
      }
    }
  }); 
  console.log(formik.values);
  return(
    <div className='main'>
      <div className='Signup-form'>
        <h2>Signup here</h2>
        <form onSubmit={formik.handleSubmit}>
          <input type='text' placeholder='First Name...' name='firstname' autoComplete='of' onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} />
          {
            formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span> : null
          }
          <input type='text' placeholder='Last Name...' name='lastname' autoComplete='of'  onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} />
          {
            formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null
          }
          <input type='text' placeholder='Email...' name='email' autoComplete='of'  onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {
            formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null
          }
          <input type='text' placeholder='password...' name='password' autoComplete='of'  onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
          {
             formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null
          }
          <input type='text' placeholder='confirm password...' name='confirmpassword' autoComplete='of'  onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur}/>
          {
            formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null
          }
          <input type='submit' value='submit' />
        </form>
      </div>
      <div className='message-box'>
        {
          bool ? (<Popup onClick = {formik.handleSubmit}/>) : null
        }
      </div>
    </div>
  )
}
export default App;