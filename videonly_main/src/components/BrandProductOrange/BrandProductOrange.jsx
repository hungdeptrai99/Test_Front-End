import React from 'react'
import PropTypes from 'prop-types'
import * as S from './brandProductOrange.style'
BrandProductOrange.propTypes = {
  product: PropTypes.object
}

function BrandProductOrange({ product }) {
  return (
    <S.BackgroundProductBrand>
      <S.WrapperBrandProduct>
        <S.BrandImage src={product.image} alt="" />
        <S.BrandProductInfo>
          <S.SubTitle>{product.sub}</S.SubTitle>
          <S.Title>{product.title}</S.Title>
          <S.Content>{product.content}</S.Content>
          <S.Button>시작하기</S.Button>
        </S.BrandProductInfo>
      </S.WrapperBrandProduct>
    </S.BackgroundProductBrand>
  )
}

export default BrandProductOrange
