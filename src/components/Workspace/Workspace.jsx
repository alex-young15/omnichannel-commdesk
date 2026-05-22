import WorkspaceTabs from './WorkspaceTabs';
import CRMView from './CRMView';
import ConversationView from './ConversationView';
import TransferView from './TransferView';
import PostView from './PostView';
import ReviewView from './ReviewView';
export default function Workspace(props){const {session,activeCenterTab}=props;const main=session.assignmentLevel==='post'?<PostView {...props}/>:session.assignmentLevel==='comment'?<ReviewView session={session}/>:activeCenterTab==='crm'?<CRMView session={session}/>:activeCenterTab==='transfer'?<TransferView/>:<ConversationView session={session}/>;return <main className='flex-1 flex flex-col'><WorkspaceTabs activeCenterTab={props.activeCenterTab} setActiveCenterTab={props.setActiveCenterTab}/><div className='flex-1 overflow-y-auto bg-[#F8FAFC]'>{main}</div><div className='p-2 border-t bg-white flex justify-end gap-2'><button onClick={()=>props.onCompleteSession(session.id)} className='px-3 py-1 bg-green-600 text-white rounded text-sm'>Complete Session</button><button onClick={props.onOpenRelease} className='px-3 py-1 bg-gray-200 rounded text-sm'>Release Session</button></div></main>}
