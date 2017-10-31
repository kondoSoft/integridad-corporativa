import React, {Component} from 'react'
import {
  SectionBanner,
  Row,
  RankingInfo,
  StudyInfo,
  Footer,
  AxisInfo,
  ScoreInfo
} from '../../components'

class Methodology extends Component {
  render () {
    return (
      <div>
        <header>
          <SectionBanner title='Metodologia' image='/assets/img/metodologia_background.jpg' withBar />
        </header>
        <Row>
          <RankingInfo />
        </Row>
        <Row>
          <StudyInfo />
        </Row>
        <Row>
          <AxisInfo backgroundImage='/assets/img/metodologia_img2.jpg' />
        </Row>
        <Row>
          <ScoreInfo />
        </Row>
        <Footer />
      </div>
    )
  }
}

export default Methodology
