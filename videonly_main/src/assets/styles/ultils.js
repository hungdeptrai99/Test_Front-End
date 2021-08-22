import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 10px;
  border-radius: 6px;
  background-color: #fa5805;
  &:hover {
    background-color: rgba(250, 88, 5, 0.8);
  }
`
