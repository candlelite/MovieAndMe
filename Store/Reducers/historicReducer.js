// Store/Reducers/historicReducer.js

const initialState = {
  historicFilms: []
}

function manageHistoricFilms(state = initialState, action) {
  let nextState
  const viewedFilmIndex
  switch (action.type) {
    case 'TOGGLE_FILMDETAIL':
      viewedFilmIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
      if (viewedFilmIndex == -1) {
        // Le film n'est pas dans l'historique, on L'ajoute à la liste
        nextState = {
          ...state,
          historicFilms: [...state.historicFilms, action.value]
        }
      }
      return nextState || state
    case 'REMOVE_HISTORIC_FILM':
      viewedFilmIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
      if (viewedFilmIndex !== -1) {
        // Le film est déjà dans les l'historique, on le supprime de la liste
        nextState = {
          ...state,
          historicFilms: state.historicFilms.filter( (item, index) => index !== viewedFilmIndex)
        }
      }
      return nextState || state
    case 'RESET_HISTORIC':
        // Reset de L'historique
        nextState = {
          ...state,
          historicFilms: state.historicFilms
        }


    default:
      return state
  }
}

export default manageHistoricFilms
