import { ModelUser } from "@context/User/model/user.model";

export type Action = {
  type: 'SET_USER',
  payload: ModelUser
} | {
  type: 'SET_NAME',
  payload: string
} | {
  type: 'SET_EMAIL',
  payload: string
} | {
  type: 'SET_IMG',
  payload: string
} | {
  type: 'SET_PROFILE',
  payload: {
    name: string,
    email: string,
    photo: string
  }
}


export const reducerUser = (state: ModelUser, action: Action) => {
  switch (action.type) {

    case 'SET_USER':
      return {
        ...state,
        ...action.payload
      }
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }

    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'SET_IMG':
      return {
        ...state,
        photo: action.payload
      }
    case 'SET_PROFILE':
      return {
        ...state,
        ...action.payload
      }

    default:
      return {
        ...state
      }
  }
}