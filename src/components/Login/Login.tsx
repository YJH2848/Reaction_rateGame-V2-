import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useState } from "react";

interface DecodedToken {
  name: string;
}

export const Login = () => {
  const [profile, setProfile] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  return profile ? (
    <div>{name}</div>
  ) : (
    <GoogleLogin
      onSuccess={(credentialResponse: any) => {
        console.log(credentialResponse);
        const decodeding = jwtDecode<DecodedToken>(
          credentialResponse.credential || ""
        );
        console.log(decodeding?.name);
        setProfile(true);
        setName(decodeding?.name || ""); // name 변수에는 decodeding?.name 값이 할당됩니다.
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
