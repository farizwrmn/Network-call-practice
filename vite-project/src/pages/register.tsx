import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Register() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Navbar />
      <div>
        <Heading as="h2"> Page Register </Heading>
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
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <div>
            <button type="submit" className="tombol">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
