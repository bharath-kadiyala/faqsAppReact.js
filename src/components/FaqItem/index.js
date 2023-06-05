import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  onToggleOf = () => {
    this.setState(prev => ({
      isClicked: !prev.isClicked,
    }))
  }

  renderAnswer = () => {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isClicked) {
      return (
        <div className="ans-con">
          <hr className="hr-sty" />
          <p className="ans-sty">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    const plusImg =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const minusImg =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

    const getImg = isClicked ? minusImg : plusImg
    const altImg = isClicked ? 'minus' : 'plus'

    return (
      <li className="each-list-con">
        <div className="each-que-con">
          <h1 className="question-sty">{questionText}</h1>
          <button type="button" className="btn-sty" onClick={this.onToggleOf}>
            <img className="img-sty" src={getImg} alt={altImg} />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
