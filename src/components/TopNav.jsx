import { Layout, Globe, MessageSquare, MessageCircle, Smartphone } from 'lucide-react';
import { MAIN_TABS } from '../constants/channels';
const icons={webchat:MessageSquare,whatsapp:MessageCircle,haloapps:Smartphone,socialmedia:Globe};
export default function TopNav({activeTab,setActiveTab}){return <header className='bg-[#005CAB] h-14 text-white flex items-end px-3 gap-2'>{['home',...MAIN_TABS.map(t=>t.id)].map(id=>{const I=icons[id]||Layout;return <button key={id} onClick={()=>setActiveTab(id)} className={`px-3 py-2 border-b-4 ${activeTab===id?'border-white':'border-transparent opacity-80'}`}><span className='inline-flex gap-1 items-center'><I size={14}/>{id==='home'?'Home':MAIN_TABS.find(t=>t.id===id)?.label}</span></button>})}</header>}
