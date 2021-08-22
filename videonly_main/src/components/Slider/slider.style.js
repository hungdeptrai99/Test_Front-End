import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 120px;
`
export const SliderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #333;
`
export const More = styled(Link)`
  font-size: 12px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: normal;
  text-align: right;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
`
