import {
  ALLPETS_PENDING,
  ALLPETS_SUCCESS,
  SET_ERROR,
  AllPetsAction,
} from '../actions/allpetActions'
import { AllPets } from '../../Model/pet'

interface AllPetsState {
  loading: boolean
  error: string | null
  data: AllPets[] | null
}

const initialState: AllPetsState = {
  loading: false,
  error: null,
  data: null,
}

const allPetsReducer = (
  state = initialState,
  action: AllPetsAction
): AllPetsState => {
  switch (action.type) {
    case ALLPETS_PENDING:
      return {
        loading: true,
        error: null,
        data: null,
      }
    case ALLPETS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: null,
      }
    default:
      return state
  }
}

export default allPetsReducer
