import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdModeComment, MdFavorite } from 'react-icons/md';
import { getFeedBack } from '../../actions';
import Rating from '../Rating';
import styles from './styles';
import Image from '../Image';
import StatisticCount from '../StatisticCount';
import {DEFAULT_ITEM_COUNT} from '../../constants';


class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      limit: DEFAULT_ITEM_COUNT
    };

    this.getMoreItems = this.getMoreItems.bind(this);
  }

  componentDidMount() {
    this.props.getFeedBack(this.state.page, this.state.limit);
  }

  getMoreItems() {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.props.getFeedBack(this.state.page, this.state.limit);
    });
  }

  render() {
    return (
      <div style={styles.container}>

        {this.props.feedback.map((feedback, key) => (
          <div key={key} style={styles.row}>

            <div style={styles.usernameContainer}>

              {feedback.attachments[0] && feedback.attachments[0].variants && feedback.attachments[0].variants.stream_avatar

                && (
                <Image
                  image={feedback.attachments[0].variants.stream_avatar}
                  style={styles.usernameContainerImg}
                />
                )

              }

              <div style={styles.username}>{feedback.author.username}</div>

            </div>

            <div style={styles.bodyContainer}>

              {feedback.attachments[0] && feedback.attachments[0].variants && feedback.attachments[0].variants.profile

                && (
                <Image
                  image={feedback.attachments[0].variants.profile}
                  style={styles.bodyContainerImg}
                />
                )

              }

              <div style={styles.wrapperTitle}>
                <div style={styles.title}>
                  {feedback.title}
                  {' '}
                  <Rating rating={feedback.rating} />
                </div>
                <div style={styles.body} dangerouslySetInnerHTML={{ __html: feedback.body }} />
              </div>

            </div>

            <div style={styles.statisticContainer}>
              <StatisticCount count={feedback.statistics.vote_count} icon={<MdFavorite />} />
              <StatisticCount count={feedback.statistics.answer_count} icon={<MdModeComment />} />
            </div>

          </div>
        ))}

        {this.props.feedback.length < this.props.total
        && <button style={styles.loadMoreButton} onClick={this.getMoreItems}>Show more</button>}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedbacksReducer.feedback,
  total: state.feedbacksReducer.total
});

export default connect(mapStateToProps, { getFeedBack })(Feedback);
