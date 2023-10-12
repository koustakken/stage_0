import { useState, useCallback } from 'react'

export function useCount(initialValue) {
	const [count, setCount] = useState(initialValue)
	// ссылка на функцию и она с нами одна 
	// если что-то идет из вне (не создано внутри функции) это зависимость
	const decrement = useCallback(() => { setCount((currentCount) => currentCount - 1) }, [])
	const increment = useCallback(() => { setCount((currentCount) => currentCount + 1) }, [])

	return { count, decrement, increment }
}