import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 32px;
  margin: 0 0 0 10px;
  /* padding: 12px 25px 11px; */
  border-radius: 6px;
  background-color: #fa5805;
  &:hover {
    background-color: rgba(250, 88, 5, 0.8);
  }
`
