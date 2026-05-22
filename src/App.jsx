import { useState } from 'react';
import TopNav from './components/TopNav';
import LeftIconRail from './components/LeftIconRail';
import QueueSidebar from './components/QueueSidebar';
import AssistantPanel from './components/AssistantPanel';
import ReleaseSessionModal from './components/ReleaseSessionModal';
import Workspace from './components/Workspace/Workspace';
import { mockSessions } from './data/mockSessions';
import { SOCIAL_CHANNELS } from './constants/channels';
import { getCombinedSessions, getCurrentSessionsList, getActiveSession, toggleSelection } from './utils/sessionUtils';

export default function App() {
  const [activeTab, setActiveTab] = useState('socialmedia');
  const [activeSubTab] = useState('assistant');
  const [activeCenterTab, setActiveCenterTab] = useState('conversation');
  const [selectedSessionId, setSelectedSessionId] = useState(5);
  const [isQueueVisible, setIsQueueVisible] = useState(true);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [mainMenu] = useState('inbox');
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [sessionsData, setSessionsData] = useState(mockSessions);

  const combined = getCombinedSessions(activeTab, sessionsData, selectedChannels, selectedTypes);
  const currentSessionsList = getCurrentSessionsList(combined, mainMenu);
  const activeSession = getActiveSession(currentSessionsList, selectedSessionId);

  const submitPostReply = (targetId, text) => { if (!text.trim()) return; setSessionsData((prev) => Object.fromEntries(Object.entries(prev).map(([k,v])=>[k,v.map((s)=>s.id!==activeSession.id?s:{...s,history:(s.history||[]).map((c)=>c.id===targetId?{...c,status:'replied',replies:[...(c.replies||[]),{sender:'agent',text}]}:c)} )]))); setReplyText(''); setReplyingToId(null);};
  const handleCommentAction = (sessionId, commentId, actionType) => setSessionsData((prev)=>Object.fromEntries(Object.entries(prev).map(([k,v])=>[k,v.map((s)=>s.id!==sessionId?s:{...s,history:(s.history||[]).map((c)=>c.id===commentId?{...c,status:actionType==='toggle_like'?c.status:actionType,isLiked:actionType==='toggle_like'?!c.isLiked:c.isLiked,isHidden:actionType==='hide'||c.isHidden,isBlocked:actionType==='block'||c.isBlocked}:c)} )])));
  const handleCompleteSession = (sessionId) => setSessionsData((prev)=>Object.fromEntries(Object.entries(prev).map(([k,v])=>[k,v.map((s)=>s.id===sessionId?{...s,sessionStatus:'handled',postStatus:'handled',unreadCount:0}:s)])));
  const handleReleaseSession = () => { setShowCloseModal(false); setSelectedSessionId(currentSessionsList[0]?.id ?? null); };
  const scrollToNextUnread = () => document.querySelector('[data-status="unread"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const toggleChannel = (channel) => setSelectedChannels((p) => toggleSelection(channel, p));
  const toggleType = (type) => setSelectedTypes((p) => toggleSelection(type, p));

  return <div className='h-screen flex flex-col bg-[#F0F2F5]'>
    <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
    <div className='flex-1 flex overflow-hidden'>
      <LeftIconRail mainMenu={mainMenu} />
      <QueueSidebar sessions={currentSessionsList} selectedSessionId={activeSession.id} setSelectedSessionId={setSelectedSessionId} isQueueVisible={isQueueVisible} setIsQueueVisible={setIsQueueVisible} activeTab={activeTab} selectedChannels={selectedChannels} selectedTypes={selectedTypes} toggleChannel={toggleChannel} toggleType={toggleType} socialChannelsList={SOCIAL_CHANNELS} scrollToNextUnread={scrollToNextUnread} />
      <Workspace session={activeSession} activeCenterTab={activeCenterTab} setActiveCenterTab={setActiveCenterTab} onAction={handleCommentAction} onReply={submitPostReply} replyingToId={replyingToId} setReplyingToId={setReplyingToId} replyText={replyText} setReplyText={setReplyText} onCompleteSession={handleCompleteSession} onOpenRelease={()=>setShowCloseModal(true)} />
      {activeSubTab==='assistant' && <AssistantPanel />}
    </div>
    <ReleaseSessionModal open={showCloseModal} onClose={()=>setShowCloseModal(false)} onRelease={handleReleaseSession}/>
  </div>;
}
