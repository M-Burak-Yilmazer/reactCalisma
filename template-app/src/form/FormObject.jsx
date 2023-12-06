import { useState } from "react";

const FormObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

//   const handleFormData = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
    username:${username} 
    email: ${email}
    password: ${password}`);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="mt-4 p-2">
      <h2 className="text-center text-primary">FormObject In React</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            value={username}
            name="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-success">{email}</span>
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            name="password"
            type="password"
            className="form-control"
            id="password"
            value={password}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormObject;
