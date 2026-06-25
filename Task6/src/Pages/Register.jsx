import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "../assets/style/RegisterStylings.css";

function Register() {
  const [validated, setValidated] = useState(false);
  const [details, setDetails] = useState({
    Username: "",
    Email: "",
    Password: "",
    PhoneNo: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      event.stopPropagation();
      toast.success("Registered successfully!");
      setDetails({ Username: "", Email: "", Password: "", PhoneNo: "" });
    } else {
      toast.error("Please fill all required fields to register.");
    }
    setValidated(true);
  };

  return (
    <div className="auth-page auth-register-page">
      <div className="auth-card shadow-sm">
        <div className="mb-4">
          <h2>Create your account</h2>
          <p className="text-muted">Enter the details below to get started.</p>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                required
                name="Username"
                value={details.Username}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustomEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                required
                name="Email"
                value={details.Email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create password"
                required
                name="Password"
                value={details.Password}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="validationCustomPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone number"
                required
                name="PhoneNo"
                value={details.PhoneNo}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" className="w-100 mb-3">
            Register
          </Button>

          <div className="text-center text-muted small">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </Form>

        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}

export default Register;