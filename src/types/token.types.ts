export interface IAccessToken {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
}

export interface IAuthorizationToken {
  authorization: string;
}