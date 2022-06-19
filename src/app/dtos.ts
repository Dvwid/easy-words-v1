export interface AuthDto {
  jwt: string;
  user: UserDto;
}

export interface UserDto {
  id: number;
  name: string;
  avatar: string;
}

export interface AvailableLanguages {
  name: string;
  imageSrc: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface WordDto {
  en: string;
  pl: string;
  de: string;
}
