import { ButtonLink } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const BackgroundProductBrand = styled.div`
  width: 1920px;
  height: 750px;
  padding: 159px 343px 160px 495px;
  background-color: #fa5805;
`
export const WrapperBrandProduct = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BrandImage = styled.img``
export const BrandProductInfo = styled.div`
  width: 441px;
`
export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: #222;
  margin-bottom: 20px;
`
export const Title = styled.div`
  font-size: 35px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: left;
  color: #fafafc;
  margin-bottom: 30px;
`
export const Content = styled.div`
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #fafafc;
`
export const Button = styled(ButtonLink)`
  border-radius: 10px;
  background-color: #222;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.83;
  letter-spacing: -0.36px;
  text-align: center;
  color: #fff;
  width: 200px;
  height: 52px;
  margin-top: 78px;
`
export const BackgroundProductBrandWhite = styled.div`
  background-color: #f9fafb;
  width: 1920px;
  height: 750px;
  padding: 159px 343px 160px 495px;
`
export const SubTitleBottom = styled(SubTitle)`
  color: #fa5805;
  text-align: right;
`
export const TitleBottom = styled(Title)`
  color: #222;
  text-align: right;
`
export const ContentBottom = styled(Content)`
  color: #222;
  text-align: right;
`
export const ButtonBottom = styled(Button)`
  background-color: #fa5805;
  position: absolute;
  right: 0;
`
export const BrandProductInfoBottom = styled(BrandProductInfo)`
  position: relative;
`
