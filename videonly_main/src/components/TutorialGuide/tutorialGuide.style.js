import { colorPrimary, colorSecondary, colorThirdly } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${colorSecondary};
  padding: 81px 0;
`
export const TitleEnglish = styled.div`
  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: ${colorPrimary};
  margin-bottom: 20px;
  text-transform: uppercase;
`
export const Title = styled.div`
  font-size: 35px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: left;
  color: ${colorThirdly};
  margin-bottom: 26px;
`
export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: ${colorThirdly};
  margin-bottom: 39px;
`
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
