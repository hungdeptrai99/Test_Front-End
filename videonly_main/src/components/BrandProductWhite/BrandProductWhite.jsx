import React from 'react'
import PropTypes from 'prop-types'
import * as S from '../BrandProductOrange/brandProductOrange.style'
BrandProductWhite.propTypes = {}

function BrandProductWhite() {
  return (
    <S.BackgroundProductBrandWhite>
      <S.WrapperBrandProduct>
        <S.BrandProductInfoBottom>
          <S.SubTitleBottom>What is the videonly</S.SubTitleBottom>
          <S.TitleBottom>비디온리는 무엇인가요?</S.TitleBottom>
          <S.ContentBottom>
            세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다.
            우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록
            컨설팅을 해줄 수 있습니다. 세계에서 하나 뿐인 템플릿, 직접 경험해보세요.
          </S.ContentBottom>
          <S.ButtonBottom>시작하기</S.ButtonBottom>
        </S.BrandProductInfoBottom>
        <S.BrandImage src="images/img-02.png" alt="" />
      </S.WrapperBrandProduct>
    </S.BackgroundProductBrandWhite>
  )
}

export default BrandProductWhite
