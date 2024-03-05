import { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div>
        <h1>Sign Up:</h1>
        <form action="" method="post">
          <div>
            <label> Name: </label>
            <input type="text" name="nama" id="nama" required />
          </div>
          <div>
            <label> E-mail Address: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label>Password: </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              id="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="check">Show Password</label>
            <input
              type="checkbox"
              id="check"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <div>
            <button formTarget="#">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
