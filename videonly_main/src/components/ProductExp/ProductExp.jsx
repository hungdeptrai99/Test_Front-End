import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import * as S from './productExp.style'
ProductExp.propTypes = {}

function ProductExp() {
  return (
    <S.WrapperProduct>
      <Link to={path.notFound}>
        <S.ProductExp>
          <S.ProductImage>
            <img src="images/icon-01.png" alt="" />
          </S.ProductImage>
          <S.SubProduct> 사용중인 기업 </S.SubProduct>
          <S.Quantity>41</S.Quantity>
        </S.ProductExp>
      </Link>
    </S.WrapperProduct>
  )
}

export default ProductExp
