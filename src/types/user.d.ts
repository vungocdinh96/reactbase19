export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at?: string;
  updated_at?: string;
}

export type ICreateUserPayload = Omit<IUser, "id" | "created_at" | "updated_at">;

export type IUpdateUserPayload = Partial<ICreateUserPayload>;
