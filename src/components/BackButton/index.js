import React from 'react'
import { ReactComponent as Chevron } from '../../images/icons/chevron.svg'
import { StyledLink } from './style'

const BackButton = () => <StyledLink to="/"><Chevron />Back</StyledLink>

export default BackButton