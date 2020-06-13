import styled from 'styled-components'

const Board = styled.div`
  width: 96%;
  margin: auto;
  padding-top: 30px;  
`
const BackgroundWhite = styled.div`
  background-color: #FFF;
  min-height: calc(100vh - 244px);
  margin-bottom: 20px;
`

const BoardHeader = styled.div`
  background: #145E43;
  color: #FFF;
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
`

const BoardTitle = styled.h2`
  margin-left: 16px;
  font-weight: normal;
  svg {
    color: #FFF;
    padding-right: 5px;
    &:hover{
      color: #cccccc;
    }
  }
`

const Actions = styled.div`
  display: flex;
  margin: 10px;
  * {
    width: 80px;
    height: 30px;
    margin-right: 10px;
    text-align: center;
    padding-top: 5px;
  }
  a {
    color: #FFF;
    text-decoration: none;
    &:hover{
      color: #cccccc;
    }
  }
`

const SaveButton = styled.div`
  background-color: #1A6B4D;
  cursor: pointer;
  &:hover{
    filter: brightness(120%);
  }
`

const Separator = styled.div`
  width: 50px;
  height: 50px;
`

export {
  Board,
  BackgroundWhite,
  BoardHeader,
  BoardTitle,
  Actions,
  SaveButton,
  Separator
}
