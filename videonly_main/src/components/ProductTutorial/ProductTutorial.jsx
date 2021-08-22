import React from 'react'
import PropTypes from 'prop-types'
import * as S from './productTutorial.style'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
ProductTutorial.propTypes = {}

function ProductTutorial() {
  return (
    <S.WrapperProduct>
      <Link to={path.notFound}>
        <S.ProductTutorial>
          <S.ProductImage src="images/thumbnail-01.png" alt="" />
          <S.SubTitle>두번째</S.SubTitle>
          <S.ImageArrow src="images/arrow-icon.png" alt="" />
          <S.ProductTitle>
            <span>내 브랜드에 맞는 </span> <span> 영상 만들기</span>{' '}
          </S.ProductTitle>
        </S.ProductTutorial>
      </Link>
    </S.WrapperProduct>
  )
}

export default ProductTutorial
