import React from 'react'
import BrandProductOrange from '../BrandProductOrange/BrandProductOrange'
import BrandProductWhite from '../BrandProductWhite/BrandProductWhite'
import * as S from './brand.style'
export default function Brand() {
  return (
    <div>
      <S.ContainerIntroBrand>
        <S.ImageBrand src="images/longbanner-01.png" alt="" />
        <S.TitleBrand>퀄리티있는 브랜딩, 비디온리 하세요</S.TitleBrand>
        <S.SubTitleBrand>나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요!</S.SubTitleBrand>
        <S.ButtonBrand>시작하기</S.ButtonBrand>
      </S.ContainerIntroBrand>
      <S.ContainerBrandProduct>
        <BrandProductOrange />
        <BrandProductWhite />
      </S.ContainerBrandProduct>
    </div>
  )
}
