
import './App.css'
import {ChatControls} from './components/chat-controls'
import { ChatContactList } from './components/chat-contact-list'
import { ChatContact } from './components/chat-contact'
import { ChatDiscussionContacts } from './components/chat-discussion-contacts'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatMessage } from './components/chat-message'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'
import { ChatStartDiscussionButton } from './components/chat-start-discussion-button'
import { ChatLayout } from './components/chat-layout'


function App() {
  return<>

  <ChatLayout 
      controls={<ChatControls/>} 
      aside={<ChatDiscussionList/>} 
      main={<ChatMessageList/>}/>
  </>
}

export default App
