import React from 'react'
import ProductTutorial from '../ProductTutorial/ProductTutorial'
import * as S from './tutorialGuide.style'
export default function TutorialGuide() {
  return (
    <S.Container>
      <div className="wide">
        <S.TitleEnglish>Tutorial Guide</S.TitleEnglish>
        <S.Title>영상 만들기, 어렵지 않아요</S.Title>
        <S.SubTitle>
          <span>나에게 맞는 템플릿,</span> <span> 망설이지 말고 지금 직접 체험해보세요! </span>
        </S.SubTitle>
        <S.ProductList>
          <ProductTutorial/>
          <ProductTutorial/>
          <ProductTutorial/>
        </S.ProductList>
      </div>
    </S.Container>
  )
}
