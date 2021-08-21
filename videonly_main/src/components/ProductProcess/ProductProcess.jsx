import React from 'react'
import PropTypes from 'prop-types'
import * as S from './productProcess.style'
import { path } from 'src/constants/path'
import { Link } from 'react-router-dom'
ProductProcess.propTypes = {}

function ProductProcess() {
  return (
    <S.WrapperProduct>
      <Link to={path.notFound}>
        <S.ProductProcess>
          <S.ProductImage>
            <img src="images/big-icon-01.png" alt="" />
          </S.ProductImage>
          <S.TitleProduct>이미지 찾기</S.TitleProduct>
          <S.SubProduct>내 회사에 맞는 이미지를 찾아 정합니다.</S.SubProduct>
        </S.ProductProcess>
      </Link>
    </S.WrapperProduct>
  )
}

export default ProductProcess
