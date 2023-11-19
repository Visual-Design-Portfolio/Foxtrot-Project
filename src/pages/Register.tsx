import { Formik, Form, Field, ErrorMessage } from 'formik'
import { RegisterDTO } from '../types/dto'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

interface RegisterFormValues {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { username, email, password } = formData

  const initialValues: RegisterFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  const validationSchema = yup.object({
    username: yup.string().min(3, 'Username must be at least 3 characters').required('username is required!'),
    email: yup.string().email('Please enter a valid email address').required(),
    password: yup.string().matches(PASSWORD_REGEX, 'Please enter a strong password').required(),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })

  const handleSubmit = async () => {
    try {
      const registerData: RegisterDTO = {
        username,
        password,
        email,
      }

      const response = await axios.post('http://localhost:5000/api/v1/register', registerData)

      console.log('Registration successful:', response.data)

      setFormData({
        username: '',
        email: '',
        password: '',
      })
      setError(null)
      setSuccess(response.data.message)
      navigate('/login')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) setError(err.response.data.message)
        setSuccess(null)
      } else {
        console.error('Registration error:', error)
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
              <label htmlFor="confirmPassword">รหัสผ่าน</label>
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
