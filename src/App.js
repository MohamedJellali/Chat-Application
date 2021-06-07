import { ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm"


import './App.css';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
    height="100vh"
    projectID="5438c49d-231e-441d-ba52-b497a5a8937b"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}

    />
  );
}

export default App;
