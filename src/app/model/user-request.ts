export class UserRequest {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  telephone?: number;
  roles: string[];
}
