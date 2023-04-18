// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from 'react-chat-engine-advanced';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = props => {
  //   const chatProps = useMultiChatLogic(
  //     '8b45a01f-126e-48f8-85d2-bc4c3057de63',
  //     props.user.username,
  //     props.user.secret
  //   );
  return (
    // <div style={{ height: '100vh' }}>
    //   <MultiChatSocket {...chatProps} />
    //   <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    // </div>
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="8b45a01f-126e-48f8-85d2-bc4c3057de63"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;
