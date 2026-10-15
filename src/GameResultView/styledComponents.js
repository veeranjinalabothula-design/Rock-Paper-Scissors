import styled from 'styled-components'

export const ShowResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const ResultImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0;
`

export const ResultTextImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const ResultImageItem = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`
