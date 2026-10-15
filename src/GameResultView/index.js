import {
  ResultTextImgContainer,
  ResultText,
  ResultImageItem,
  ResultImagesContainer,
  ShowResultContainer,
} from './styledComponents'

const GameResultView = ({myChoice}) => (
  <ShowResultContainer>
    <ResultImagesContainer>
      <ResultTextImgContainer>
        <ResultText>YOU</ResultText>
        <ResultImageItem src={myChoice[1]} alt="your choice" />
      </ResultTextImgContainer>
    </ResultImagesContainer>
  </ShowResultContainer>
)

export default GameResultView
