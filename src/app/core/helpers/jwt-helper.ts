import {JwtUser, Token} from '../../shared/models/user.model';

export function parseJwt(token: string): Token | null {
  try {
    const base64Payload = token.split('.')[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload);
  } catch(e: unknown) {
    return null;
  }
}
