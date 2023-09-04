export interface ResponseAuth {
  status: boolean;
  message: string;

}

export interface ResponseUserCredential {
  status: boolean;
  userUid?: string;
  userEmail?: string;
  userDisplayName?: string;
  userPhoto?: string | null;
  message?: string;
}

export interface ModelLogin {
  email: string;
  password: string;
}