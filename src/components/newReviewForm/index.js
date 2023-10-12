import { useCallback, useReducer } from 'react'

export const newReviewForm = () => {
	const initialState = {
		name: 'Tema',
		text: 'awesome',
		rating: 9
	}
	// при сложном состоянии useState не подходит
	const [state, dispatch] = useReducer(reducer, initialState)

	const FORM_ACTIONS = {
		setName: 'setName',
		setText: 'setText',
		setRating: 'setRating'
	}

	const reducer = (state, action) => {
		switch (action?.type) {
			case FORM_ACTIONS.setName:
				return { name: action.payload.name, text: '', rating: 0 }
			case FORM_ACTIONS.setText:
				return { ...state, text: action.payload }
			case FORM_ACTIONS.setRating:
				return { ...state, rating: action.payload }
			default:
				return state
		}
	}

	const onNameChange = (event) => dispatch(
		{ type: FORM_ACTIONS.setName, payload: { name: event.target.value } }
	)

	// Взаимодействие с DOM
	const setFocus = useCallback((element) => {
		element.focus()
	}, [])

	return (
		<div>
			<label>Name: <input ref={setFocus} type='text' value={state.name} onChange={onNameChange} /></label>
			<label>Text: <input type='text' /></label>
			<label>Rating: <input type='number' /></label>
		</div>
	)
}
