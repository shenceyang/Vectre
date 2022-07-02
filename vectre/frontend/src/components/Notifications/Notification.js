import React from 'react'
import { 
  Flex, 
  Spacer, 
  Box, 
  chakra,
  Avatar
 } from '@chakra-ui/react'
import './Notification.css'
import { FaCommentAlt, FaHeart } from 'react-icons/fa'
import { ImUserPlus } from 'react-icons/im'
import DEFAULT_PROFILE_PICTURE from "../../assets/images/default_profile_pic.jpg"

// Redux
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { readNotification } from "../../redux/actions/notification";
import { getUser } from "../../redux/actions/users"
import { userSelector } from "../../redux/selectors/users"

const NOTIFICATION_ACTIONS = {
  "like": {
    message: "liked your post.",
    icon: <FaHeart size={"18px"}/>
  },
  "comment": {
    message: "commented on your post.",
    icon: <FaCommentAlt size={"18px"}/>
  },
  "follow": {
    message: "followed you.",
    icon: <ImUserPlus size={"22px"}/>
  },
}

class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      icon: "",
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.fromUser)
    this.setState(NOTIFICATION_ACTIONS[this.props.action])
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  handleRead = () => {
    this.props.readNotification(this.props.notificationID)
  }

  render() {
    return(
      <Box
        className={'notif-box'}
        _hover={{bg: "rgba(200, 200, 200, 0.3)", borderRadius: "6px"}}
        as='a'
        href={this.props.action === "follow" ? `/user/${this.props.fromUser}` : `/post/${this.props.postID}`}
        onClick={this.handleRead}>
        <Flex className='notif-icon' position='relative'>
          {this.state.icon}
          {!this.props.read && <chakra.span className='unread-small-marker' rounded='full'></chakra.span>}
        </Flex>
        <Spacer />
        <Flex className='notif-tag'>
            {/* TODO: add avatar from props.userProfile instead. */}
            <Avatar src={DEFAULT_PROFILE_PICTURE}
              size="sm"
              mx="15px"
            />
            <Box noOfLines={1} textAlign={"left"}>
              <p>
                <b>{this.props.userProfile.username}</b> {this.state.message}
              </p>
            </Box>
        </Flex>
      </Box>
    )
  }
}

const actionCreators = {
  readNotification,
  getUser
}

const mapStateToProps = (state, ownProps) => ({
  userProfile: userSelector(state)
})

Notification.propTypes = {
  userProfile: PropTypes.object
}

Notification.defaultProps = {
  userProfile: {}
}

export default connect(
  mapStateToProps,
  actionCreators
)(Notification);