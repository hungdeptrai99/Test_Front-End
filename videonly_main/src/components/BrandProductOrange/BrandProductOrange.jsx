import React from 'react'
import PropTypes from 'prop-types'
import * as S from './brandProductOrange.style'
BrandProductOrange.propTypes = {}

function BrandProductOrange() {
  return (
    <S.BackgroundProductBrand>
      <S.WrapperBrandProduct>
        <S.BrandImage src="images/img-01.png" alt="" />
        <S.BrandProductInfo>
          <S.SubTitle>What is the videonly</S.SubTitle>
          <S.Title>비디온리는 무엇인가요?</S.Title>
          <S.Content>
            세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다.
            우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록
            컨설팅을 해줄 수 있습니다. 세계에서 하나 뿐인 템플릿, 직접 경험해보세요.
          </S.Content>
          <S.Button>시작하기</S.Button>
        </S.BrandProductInfo>
      </S.WrapperBrandProduct>
    </S.BackgroundProductBrand>
  )
}

export default BrandProductOrange
