export interface JwtUser {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponse {
  message: string;
  token: string;
}

export interface Token {
  iss:  string;
  aud:  string;
  iat:  number;
  exp:  number;
  user: JwtUser;
}

