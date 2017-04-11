import React, { PropTypes } from 'react';
import TopBar from './TopBar';
import { MessageSender } from '../containers';
import { MessagesList } from '../components';


const propTypes = {
  messages: PropTypes.array.isRequired,
  goToConversationList: PropTypes.func.isRequired,
  user: PropTypes.object,
  data: PropTypes.object,
  isNewConversation: PropTypes.bool,
};

function Conversation({ messages, isNewConversation, goToConversationList, user, data }) {
  function renderTitle() {
    if (isNewConversation) {
      return (
        <div className="erxes-topbar-title">
          <div>New conversation</div>
          <span>with Support staffs</span>
        </div>
      );
    }

    if (user) {
      const avatar = user.details.avatar || 'https://crm.nmma.co/assets/images/userDefaultIcon.png';
      return (
        <div className="erxes-staff-profile">
          <img src={avatar} alt={user.details.fullName} />
          <div className="erxes-staff-name">{user.details.fullName}</div>
          <div className="erxes-staff-company">Support staff</div>
        </div>
      );
    }

    return null;
  }

  const color = data.uiOptions && data.uiOptions.color;

  return (
    <div className="erxes-messenger">
      <TopBar
        middle={renderTitle()}
        buttonClass="back"
        color={color}
        onButtonClick={goToConversationList}
      />
      <MessagesList color={color} messages={messages} />
      <MessageSender placeholder={isNewConversation ? 'Send a message ...' : 'Write a reply ...'} />
    </div>
  );
}

Conversation.propTypes = propTypes;

export default Conversation;