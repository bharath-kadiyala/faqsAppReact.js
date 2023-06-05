import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-main-con">
        <div className="app-con">
          <h1 className="title">FAQs</h1>

          <ul className="questions-con">
            {faqsList.map(eachList => (
              <FaqItem faqDetails={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
