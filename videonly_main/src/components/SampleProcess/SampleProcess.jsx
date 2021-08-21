import React from 'react'
import ProductProcess from '../ProductProcess/ProductProcess'
import * as S from './sampleProcess.style'
export default function SampleProcess() {
  return (
    <div className="wide">
      <S.Container>
        <S.TitleSample>한 눈에 보는 템플릿 절차</S.TitleSample>
        <S.SubSample>
          <span>비디온리가 아직 고민되시나요?</span>
          <span>비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.</span>
        </S.SubSample>
        <S.ProductList>
          <ProductProcess />
          <ProductProcess />
          <ProductProcess />
          <ProductProcess />
        </S.ProductList>
      </S.Container>
    </div>
  )
}
