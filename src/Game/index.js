import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {
  RulesImageContainer,
  CloseLineButton,
  RulesImage,
  ScoreValue, // ✅ new styled component
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    isGameInProgress: true,
    yourChoice: null,
    opponentChoice: null,
    resultText: '',
  }

  getOpponentChoice = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    return choicesList[randomIndex]
  }

  onClickChoice = choice => {
    const opponentChoice = this.getOpponentChoice()

    let resultText = ''
    let scoreChange = 0

    if (choice.id === opponentChoice.id) {
      resultText = 'IT IS DRAW'
    } else if (
      (choice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (choice.id === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (choice.id === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      resultText = 'YOU WON'
      scoreChange = 1
    } else {
      resultText = 'YOU LOSE'
      scoreChange = -1
    }

    this.setState(prevState => ({
      isGameInProgress: false,
      yourChoice: choice,
      opponentChoice,
      resultText,
      score: prevState.score + scoreChange,
    }))
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameInProgress: true,
      yourChoice: null,
      opponentChoice: null,
      resultText: '',
    })
  }

  renderGameView = () => {
    const {score} = this.state

    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <p>Score</p>
        {/* ✅ Styled component ensures font-family Roboto */}
        <ScoreValue>{score}</ScoreValue>

        <div>
          {choicesList.map(choice => (
            <button
              key={choice.id}
              type="button"
              data-testid={`${choice.id.toLowerCase()}Button`}
              onClick={() => this.onClickChoice(choice)}
            >
              <img src={choice.imageUrl} alt={choice.id} />
            </button>
          ))}
        </div>

        <Popup modal trigger={<button type="button">Rules</button>}>
          {close => (
            <RulesImageContainer>
              <CloseLineButton type="button" onClick={close}>
                <RiCloseLine />
              </CloseLineButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesImageContainer>
          )}
        </Popup>
      </div>
    )
  }

  renderResultView = () => {
    const {yourChoice, opponentChoice, resultText, score} = this.state

    return (
      <div className="result-container">
        <h1 className="main-heading">Rock Paper Scissors</h1>
        <p className="score-text">Score</p>
        {/* ✅ Styled component ensures font-family Roboto */}
        <ScoreValue>{score}</ScoreValue>

        <div className="result-images">
          <div>
            <p>Your Choice</p>
            <img src={yourChoice.imageUrl} alt="your choice" />
          </div>
          <div>
            <p>Opponent Choice</p>
            <img src={opponentChoice.imageUrl} alt="opponent choice" />
          </div>
        </div>

        <p className="result-text">{resultText}</p>

        <button type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {isGameInProgress} = this.state
    return isGameInProgress ? this.renderGameView() : this.renderResultView()
  }
}

export default Game
