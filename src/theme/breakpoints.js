import { css } from 'styled-components'

export const breakpoints = {
	xs: 575,
	sm: 767,
	md: 991,
	lg: 1200
}

export default Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (first, ...interpolations) => css`
		@media (max-width: ${breakpoints[label]}px) {
			${css(first, ...interpolations)}
		}
	`
	return acc
}, {})
