export interface IPublicConfig {
  API_ENDPOINT: string;
}

export interface IIconProps {
  size?: number;
  color?: string;
}

export interface IWhoami {
  id?: string;
  active?: boolean;
  expires_at?: string;
  authenticated_at?: string;
  authenticator_assurance_level?: string;
  issued_at?: string;
}
