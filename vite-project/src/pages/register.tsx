import { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div>
        <h1>Page Register</h1>
        <form action="" method="post">
          <div>
            <label htmlFor="name"> Name: </label>
            <input type="text" name="nama" id="nama" required autoFocus />
          </div>
          <div>
            <label htmlFor="email"> E-mail Address: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              id="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="check" className="showpass">
              Show Password
            </label>
            <input
              type="checkbox"
              id="check"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
