import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { RegisterDTO } from '../types/dto'

interface RegisterFormValues {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const initialValues: RegisterFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  const validationSchema = yup.object({
    username: yup.string().min(3, 'Username must be at least 3 characters').required('Username is required!'),
    email: yup.string().email('Please enter a valid email address').required('Email is required!'),
    password: yup.string().matches(PASSWORD_REGEX, 'Please enter a strong password').required('Password is required!'),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      const registerData: RegisterDTO = {
        username: values.username,
        password: values.password,
        email: values.email,
      }

      const response = await axios.post('http://localhost:8080/user/', registerData)

      console.log('Registration successful:', response.data)
      setSuccess(response.data.message)
      setError(null)
      // Clear form values after successful registration
      // navigate('/login');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) setError(err.response.data.message)
        setSuccess(null)
      } else {
        console.error('Registration error:', err)
        setError('Internal Server Error')
      }
    }
  }

  return (
    <div>
      {!error && <p>{success ? success : ''}</p>}
      {!success && <p>{error ? error : ''}</p>}
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">ชื่อผู้ใช้</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>

            <div>
              <label htmlFor="email">อีเมล</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">รหัสผ่าน</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              ลงทะเบียน
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
