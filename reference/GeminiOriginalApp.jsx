import React, { useState } from 'react';
import { 
  MessageSquare, 
  MessageCircle,
  Youtube, 
  Twitter, 
  Instagram, 
  Mail, 
  Facebook, 
  User, 
  PhoneOff, 
  ArrowRightLeft, 
  Search, 
  Paperclip, 
  Smile, 
  Send,
  MoreVertical,
  History,
  Layout,
  Star,
  Settings,
  Bell,
  CheckCircle,
  CreditCard,
  FileText,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Reply,
  Forward,
  Plus,
  X,
  Apple,
  AlertTriangle,
  Globe,
  ExternalLink,
  BookOpen,
  Link as LinkIcon,
  Linkedin,
  Play,
  Smartphone,
  Music,
  Pin,
  Shield,
  Calendar,
  Info,
  Navigation,
  AlertCircle,
  Image as ImageIcon,
  CheckSquare,
  MessageCircle as MessageCircleIcon,
  ThumbsUp,
  EyeOff,
  Ban,
  Ticket,
  FileEdit
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('socialmedia'); 
  const [activeSubTab, setActiveSubTab] = useState('assistant'); 
  const [activeCenterTab, setActiveCenterTab] = useState('conversation'); 
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState(5); // Set default to the Instagram post to show the 8+ comments
  const [isQueueVisible, setIsQueueVisible] = useState(true);
  
  // Updated state for multi-select filtering
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  
  const [mainMenu, setMainMenu] = useState('inbox'); // New state for Access Records

  // State for inline replying in posts
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyText, setReplyText] = useState('');

  const mainTabs = [
    { id: 'webchat', label: 'Webchat', icon: <MessageSquare size={16} /> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <MessageCircle size={16} className="text-green-400" /> },
    { id: 'haloapps', label: 'Haloapps', icon: <Smartphone size={16} /> },
    { id: 'socialmedia', label: 'Social Media', icon: <Globe size={16} /> },
  ];

  const socialChannelsList = ['facebook', 'instagram', 'x', 'linkedin', 'youtube', 'tiktok', 'appstore', 'playstore'];

  const [sessionsData, setSessionsData] = useState({
    webchat: [
      { id: 1, type: 'webchat', name: 'Dimas Abimanyu', time: '10:45 AM', title: 'Livechat', timer: '02:10', desc: 'Mengapa rekening BCA saya terblokir?', unreadCount: 0, icon: <img src="https://i.pravatar.cc/150?img=32" className="w-full h-full rounded-full object-cover" alt="Dimas" />, tabIcon: <MessageSquare size={14} className="text-[#005CAB]"/>,
        assignmentLevel: 'conversation',
        history: [
          { sender: 'agent', text: 'Selamat pagi. Halo BCA, saya Vira. Dengan siapa saya bicara?', time: '10:40 AM' },
          { sender: 'customer', text: 'dengan syarif', time: '10:41 AM' },
          { sender: 'agent', text: 'Informasi apa yang bisa saya bantu?', time: '10:41 AM' },
          { sender: 'customer', text: 'Mengapa rekening BCA saya terblokir?', time: '10:45 AM' },
          { sender: 'agent', text: 'Baiklah. Saya mengerti kendala yang anda alami. Dengan senang hati kami bantu pembukaan blokir BCA ID Bapak.', time: '10:46 AM' }
        ]
      },
    ],
    whatsapp: [
      { id: 2, type: 'whatsapp', name: 'Budi Santoso', time: '11:20 AM', title: 'WhatsApp', timer: '01:15', desc: 'Cara ganti nomor HP bagaimana?', unreadCount: 2, icon: <MessageCircle size={22} className="text-white"/>, iconBg: 'bg-[#25D366]', tabIcon: <MessageCircle size={14} className="text-[#25D366]"/>,
        assignmentLevel: 'conversation',
        history: [
          { sender: 'customer', text: 'Halo, promo cc cicilan 0% masih berlaku?', time: '11:15 AM' },
          { sender: 'customer', text: 'Cara ganti nomor HP bagaimana?', time: '11:20 AM' }
        ]
      },
    ],
    haloapps: [
      { id: 3, type: 'haloapps', name: 'Citra', time: '09:00 AM', title: 'Haloapps', timer: '05:00', desc: 'Aplikasi tidak bisa login', unreadCount: 0, icon: <Smartphone size={22} className="text-white"/>, iconBg: 'bg-[#005CAB]', tabIcon: <Smartphone size={14} className="text-[#005CAB]"/>,
        assignmentLevel: 'conversation',
        history: [
          { sender: 'customer', text: 'Aplikasi tidak bisa login, selalu force close.', time: '09:00 AM' }
        ]
      },
    ],
    facebook: [
      { id: 4, type: 'facebook', name: 'Summer Sale Post', time: '10:45 AM', title: 'Facebook', timer: '12:34', desc: 'Siti Aminah: Berapa harganya min?', unreadCount: 1, icon: <Facebook size={22} className="text-white fill-current"/>, iconBg: 'bg-[#1877F2]', tabIcon: <Facebook size={14} className="text-[#1877F2]"/>,
        assignmentLevel: 'post',
        postStatus: 'pending',
        postContext: {
            title: 'Mid-Year Summer Sale',
            text: 'Up to 50% off on all summer essentials! Get yours before they run out.',
            image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200&h=200&fit=crop'
        },
        history: [
            { id: 'c1', sender: 'customer', name: 'Siti Aminah', avatar: 'https://placehold.co/100x100/8b5cf6/ffffff?text=SA', text: 'Berapa harganya min?', time: '1 hour ago', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] },
            { id: 'c2', sender: 'customer', name: 'John Doe', avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=JD', text: 'Bisa kirim ke Papua via udara?', time: '2 hours ago', status: 'replied', agentName: 'Budi Kartika', isLiked: true, isHidden: false, isBlocked: false, replies: [ { sender: 'agent', text: 'Bisa kak! Silahkan cek ongkir saat checkout ya.', time: '1 hour ago' } ] }
        ]
      },
    ],
    instagram: [
      { id: 5, type: 'instagram', name: '11.11 Promo Post (Comment)', time: '09:15 AM', title: 'Instagram Post', timer: '02:01', desc: '4 Unread Comments', unreadCount: 4, icon: <Instagram size={22} className="text-white"/>, iconBg: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', tabIcon: <Instagram size={14} className="text-[#E1306C]"/>,
        assignmentLevel: 'post',
        postStatus: 'pending',
        postContext: {
            title: '11.11 Waterfall Property Promo',
            image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200&h=200&fit=crop',
            text: 'Explore our new waterfall properties. Find your dream home today. #RealEstate #Nature'
        },
        history: [
            { id: 'c3', sender: 'customer', name: 'Diana Prince', avatar: 'https://placehold.co/100x100/8b5cf6/ffffff?text=DP', text: 'Ini penipuan atau bukan ya? mau tanya kalau prosedur kpr bagaimana ya', time: '09:15 AM', status: 'pending_review', isLiked: false, isHidden: false, isBlocked: false, replies: [] },
            { id: 'c4', sender: 'customer', name: 'Budi Santoso', avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=BS', text: 'Berapa cicilan per bulannya min?', time: '10:00 AM', status: 'unread', isLiked: true, isHidden: false, isBlocked: false, replies: [ { sender: 'agent', text: 'Halo kak Budi, untuk cicilan mulai dari 3 jutaan ya.', time: '10:05 AM' }, { sender: 'customer', text: 'Wah terjangkau ya, minta brosurnya dong min.', time: '10:15 AM' } ] },
            { id: 'c_new1', sender: 'customer', name: 'Rina Kusuma', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=RK', text: 'Lokasi detailnya di mana min?', time: '10:30 AM', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] },
            { id: 'c_new2', sender: 'customer', name: 'Ahmad Dani', avatar: 'https://placehold.co/100x100/10b981/ffffff?text=AD', text: 'Bisa KPR bank lain nggak?', time: '10:45 AM', status: 'replied', agentName: 'Budi Kartika', isLiked: false, isHidden: false, isBlocked: false, replies: [ { sender: 'agent', text: 'Halo kak Ahmad, saat ini promo khusus KPR kami saja ya.', time: '10:50 AM' } ] },
            { id: 'c_new3', sender: 'customer', name: 'Sisca Melly', avatar: 'https://placehold.co/100x100/f59e0b/ffffff?text=SM', text: 'Bagus banget view-nya 😍', time: '11:00 AM', status: 'no_reply_needed', agentName: 'Budi Kartika', isLiked: true, isHidden: false, isBlocked: false, replies: [] },
            { id: 'c_new4', sender: 'customer', name: 'Kevin Wijaya', avatar: 'https://placehold.co/100x100/6366f1/ffffff?text=KW', text: 'Harganya mulai berapaan?', time: '11:15 AM', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] },
            { id: 'c_new5', sender: 'customer', name: 'Putri Ayu', avatar: 'https://placehold.co/100x100/ef4444/ffffff?text=PA', text: 'Ada promo DP 0% kah untuk 11.11?', time: '11:30 AM', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] },
            { id: 'c_new6', sender: 'customer', name: 'Dimas Pratama', avatar: 'https://placehold.co/100x100/0ea5e9/ffffff?text=DP', text: 'Penipuan nih paling, foto editan.', time: '11:45 AM', status: 'pending_review', isLiked: false, isHidden: true, isBlocked: false, replies: [] }
        ]
      },
      { id: 51, type: 'instagram', name: 'Reza Rahardian (Mention)', time: '10:00 AM', title: 'Instagram Mention', timer: '01:30', desc: '@Brand tolong cek DM ya', unreadCount: 1, icon: <Instagram size={22} className="text-white"/>, iconBg: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', tabIcon: <Instagram size={14} className="text-[#E1306C]"/>,
        assignmentLevel: 'post',
        postStatus: 'pending',
        postContext: {
            title: 'User Post Mentioning You',
            text: 'Pelayanan cabang Sudirman hari ini sangat cepat. Terima kasih @Brand untuk pelayanannya yang luar biasa!',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop'
        },
        history: [
            { id: 'c5', sender: 'customer', name: 'Reza Rahardian', avatar: 'https://placehold.co/100x100/10b981/ffffff?text=RR', text: '@Brand tolong cek DM ya, ada dokumen yang mau saya tanyakan.', time: '10:00 AM', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] }
        ]
      },
      { id: 52, type: 'instagram', name: 'Siska (#BankDance)', time: '09:45 AM', title: 'Instagram Hashtag', timer: '02:00', desc: 'Keren banget promonya #BankDance', unreadCount: 0, icon: <Instagram size={22} className="text-white"/>, iconBg: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', tabIcon: <Instagram size={14} className="text-[#E1306C]"/>,
        assignmentLevel: 'post',
        postStatus: 'handled',
        postContext: {
            title: 'Hashtag Feed: #BankDance',
            text: 'Ikutan challenge #BankDance buat dapetin hadiahnya! Semoga menang tahun ini 😍',
            image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f51?w=200&h=200&fit=crop'
        },
        history: [
            { id: 'c6', sender: 'customer', name: 'Siska', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=SK', text: 'Keren banget promonya #BankDance', time: '09:45 AM', status: 'no_reply_needed', agentName: 'Budi Kartika', isLiked: true, isHidden: false, isBlocked: false, replies: [] }
        ]
      }
    ],
    x: [
      { id: 6, type: 'x', name: '@dimas_prabowo (Chat/DM)', time: '10:30 AM', title: 'X Chat', timer: '08:34', desc: 'Bisa bantu cek status transaksi?', unreadCount: 2, icon: <Twitter size={22} className="text-white fill-current"/>, iconBg: 'bg-[#1DA1F2]', tabIcon: <Twitter size={14} className="text-[#1DA1F2] fill-current"/>,
        assignmentLevel: 'conversation',
        history: [
          { sender: 'customer', text: 'Halo admin, selamat pagi.', time: '10:28 AM' },
          { sender: 'customer', text: 'Bisa bantu cek status transaksi saya? Sepertinya nyangkut.', time: '10:30 AM' }
        ]
      },
      { id: 61, type: 'x', name: '@alex_gamer (Public Post)', time: '10:35 AM', title: 'X Post', timer: '05:00', desc: 'Mobile app down lagi ya?', unreadCount: 1, icon: <Twitter size={22} className="text-white fill-current"/>, iconBg: 'bg-[#1DA1F2]', tabIcon: <Twitter size={14} className="text-[#1DA1F2] fill-current"/>,
        assignmentLevel: 'post',
        postContext: {
            title: 'In reply to @TechNews_ID',
            text: 'Beberapa aplikasi mobile banking dilaporkan mengalami gangguan pagi ini. Apakah aplikasi bank kalian aman?',
        },
        history: [
            { id: 'c7', sender: 'customer', name: '@alex_gamer', avatar: 'https://placehold.co/100x100/f59e0b/ffffff?text=AG', text: '@Brand CS mobile app down lagi ya? Error 205 dari tadi ga bisa transfer.', time: '10:35 AM', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] }
        ]
      }
    ],
    linkedin: [
      { id: 7, type: 'linkedin', name: 'John Doe', time: '08:30 AM', title: 'LinkedIn', timer: '00:45', desc: 'Inquiry regarding corporate account', unreadCount: 0, icon: <Linkedin size={22} className="text-white fill-current"/>, iconBg: 'bg-[#0A66C2]', tabIcon: <Linkedin size={14} className="text-[#0A66C2] fill-current"/>,
        assignmentLevel: 'conversation',
        history: [
          { sender: 'customer', text: 'Hello, I have an inquiry regarding corporate account.', time: '08:30 AM' }
        ]
      },
    ],
    youtube: [
      { id: 8, type: 'youtube', name: 'Q3 Earnings Video', time: 'Yesterday', title: 'YouTube', timer: '24:00', desc: 'User123: When will the dividends be paid out?', unreadCount: 1, icon: <Youtube size={22} className="text-white fill-current"/>, iconBg: 'bg-[#FF0000]', tabIcon: <Youtube size={14} className="text-[#FF0000] fill-current"/>,
        assignmentLevel: 'post',
        postContext: {
            title: 'Q3 2025 Earnings Call',
            image: '',
            text: 'Watch our CEO discuss the record-breaking Q3 results and future outlook.'
        },
        history: [
            { id: 'c8', sender: 'customer', name: 'InvestorPro', avatar: 'https://placehold.co/100x100/64748b/ffffff?text=IP', text: 'When will the dividends be paid out?', time: 'Yesterday', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] }
        ]
      },
    ],
    tiktok: [
      { id: 9, type: 'tiktok', name: 'TikTok User', time: 'Yesterday', title: 'TikTok', timer: '12:00', desc: 'Apakah ada promo kartu kredit?', unreadCount: 3, icon: <Music size={22} className="text-white"/>, iconBg: 'bg-[#000000]', tabIcon: <Music size={14} className="text-[#000000]"/>,
        assignmentLevel: 'post',
        postContext: {
            title: 'Dance Challenge Promo',
            image: '',
            text: 'Join the #BankDance challenge and win up to 50 million!'
        },
        history: [
            { id: 'c9', sender: 'customer', name: 'TikToker123', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=TK', text: 'Apakah ada promo kartu kredit?', time: 'Yesterday', status: 'unread', isLiked: false, isHidden: false, isBlocked: false, replies: [] }
        ]
      },
    ],
    appstore: [
      { id: 10, type: 'appstore', name: 'TechGuru99', time: 'Yesterday', title: 'App Store', timer: '05:12', desc: 'Great app but needs dark mode.', unreadCount: 0, icon: <Apple size={22} className="text-white fill-current"/>, iconBg: 'bg-[#000000]', tabIcon: <Apple size={14} className="text-gray-800"/>,
        assignmentLevel: 'comment',
        appName: 'BCA Mobile',
        appVersion: 'v2.1.0',
        rating: 4,
        history: [
          { id: 'c10', sender: 'customer', text: 'Great app but needs dark mode. It burns my eyes at night.', time: 'Yesterday, 10:00 AM', status: 'unread', isLiked: false, isHidden: false, isBlocked: false }
        ]
      },
    ],
    playstore: [
      { id: 11, type: 'playstore', name: 'AndroidUser1', time: '2 Days Ago', title: 'Play Store', timer: '48:00', desc: 'Tolong perbaiki bug saat scan QRIS', unreadCount: 0, icon: <Play size={22} className="text-white fill-current"/>, iconBg: 'bg-[#01875F]', tabIcon: <Play size={14} className="text-[#01875F]"/>,
        assignmentLevel: 'comment',
        appName: 'BCA Mobile',
        appVersion: 'v2.1.0',
        rating: 2,
        history: [
          { id: 'c11', sender: 'customer', text: 'Tolong perbaiki bug saat scan QRIS sering loading lama. Sangat mengganggu saat mau bayar di kasir.', time: '2 Days Ago', status: 'replied', agentName: 'Budi Kartika', isLiked: false, isHidden: false, isBlocked: false }
        ]
      },
    ]
  });

  const getCombinedSessions = () => {
    if (activeTab === 'socialmedia') {
      const allSocials = socialChannelsList.flatMap(ch => sessionsData[ch] || []);
      return allSocials.filter(s => {
        const channelMatch = selectedChannels.length === 0 || selectedChannels.includes(s.type);
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(s.assignmentLevel);
        return channelMatch && typeMatch;
      });
    }
    return sessionsData[activeTab] || [];
  };

  const currentSessionsList = getCombinedSessions().filter(s => {
    const isHandled = s.sessionStatus === 'handled' || s.postStatus === 'handled';
    return mainMenu === 'access_records' ? isHandled : !isHandled;
  });

  const activeSession = currentSessionsList.find(s => s.id === selectedSessionId) || currentSessionsList[0] || {
    name: 'System',
    title: 'Dashboard',
    time: '',
    desc: 'Select an active session from the left queue to begin.',
    icon: <Layout size={22} className="text-gray-400"/>,
    iconBg: 'bg-gray-200',
    type: 'system',
    assignmentLevel: 'conversation',
    history: []
  };

  const submitPostReply = (targetId, text) => {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    setSessionsData(prev => {
        const newData = { ...prev };
        Object.keys(newData).forEach(channel => {
            newData[channel] = newData[channel].map(session => {
                if (session.id === activeSession.id) {
                    let updatedHistory = [...(session.history || [])];

                    if (targetId === 'post') {
                        updatedHistory.push({
                            id: `r-${Date.now()}`,
                            sender: 'agent',
                            name: 'Your Brand',
                            avatar: 'https://placehold.co/100x100/333/fff?text=Ag',
                            text: text,
                            time: now,
                            status: 'replied',
                            agentName: 'Budi Kartika'
                        });
                    } else {
                        updatedHistory = updatedHistory.map(c => {
                            if (c.id === targetId) {
                                return {
                                    ...c,
                                    status: 'replied',
                                    agentName: 'Budi Kartika',
                                    replies: [...(c.replies || []), { sender: 'agent', text: text, time: now }]
                                };
                            }
                            return c;
                        });
                    }
                    return { ...session, history: updatedHistory };
                }
                return session;
            });
        });
        return newData;
    });
    setReplyingToId(null);
    setReplyText('');
  };

  const renderInlineComposer = (targetId) => {
    if (replyingToId !== targetId) return null;
    return (
        <div className="mt-3 bg-white p-3 rounded-lg border border-blue-200 shadow-sm animate-in fade-in zoom-in duration-200">
            <textarea 
                autoFocus
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#005CAB] resize-none mb-2"
                placeholder="Write a public reply..."
                rows="2"
            />
            <div className="flex justify-end gap-2">
                <button 
                    onClick={() => { setReplyingToId(null); setReplyText(''); }} 
                    className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-100 rounded-md transition-colors"
                >
                    Cancel
                </button>
                <button 
                    onClick={() => submitPostReply(targetId, replyText)}
                    className="px-4 py-1.5 bg-[#005CAB] text-white text-xs font-bold rounded-md hover:bg-blue-700 flex items-center gap-1 transition-colors"
                >
                    <Send size={12} /> Post Reply
                </button>
            </div>
        </div>
    );
  };

  const handleCommentAction = (sessionId, commentId, actionType) => {
    setSessionsData(prev => {
      const newData = { ...prev };
      Object.keys(newData).forEach(channel => {
        newData[channel] = newData[channel].map(session => {
          if (session.id === sessionId && session.history) {
            return {
              ...session,
              history: session.history.map(comment => {
                if (comment.id === commentId) {
                  // Handle Specific Toggles
                  if (actionType === 'toggle_like') return { ...comment, isLiked: !comment.isLiked };
                  if (actionType === 'hide') return { ...comment, isHidden: true, status: 'no_reply_needed', agentName: 'Budi Kartika' };
                  if (actionType === 'block') return { ...comment, isBlocked: true, status: 'no_reply_needed', agentName: 'Budi Kartika' };
                  
                  // Handle Primary Status Updates
                  if (['pending_review', 'no_reply_needed', 'replied', 'unread'].includes(actionType)) {
                    return { 
                      ...comment, 
                      status: actionType, 
                      agentName: (actionType === 'replied' || actionType === 'no_reply_needed') ? 'Budi Kartika' : comment.agentName 
                    };
                  }
                }
                return comment;
              })
            };
          }
          return session;
        });
      });
      return newData;
    });
  };

  const handleCompleteSession = (sessionId) => {
    setSessionsData(prev => {
      const newData = { ...prev };
      Object.keys(newData).forEach(channel => {
        newData[channel] = newData[channel].map(session => {
          if (session.id === sessionId) {
            // Auto-mark any remaining unread as no_reply_needed
            const updatedHistory = session.history?.map(comment => 
                comment.status === 'unread' ? { ...comment, status: 'no_reply_needed', agentName: 'Budi Kartika' } : comment
            );
            return { 
                ...session, 
                sessionStatus: 'handled', 
                postStatus: 'handled', 
                history: updatedHistory,
                unreadCount: 0 // Explicitly set unread count to 0 when completed
            };
          }
          return session;
        });
      });
      return newData;
    });
    
    // Clear selection so the UI naturally shifts to the next unhandled ticket
    if (mainMenu === 'inbox') {
        setSelectedSessionId(null);
    }
  };

  const scrollToNextUnread = () => {
    const unreadElements = document.querySelectorAll('[data-status="unread"]');
    if (unreadElements.length > 0) {
      unreadElements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const toggleChannel = (channel) => {
    setSelectedChannels(prev => 
      prev.includes(channel) ? prev.filter(c => c !== channel) : [...prev, channel]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const renderSidebar = (title, items) => {
    if (!isQueueVisible) {
      return (
        <div className="w-16 border-r border-gray-200 flex flex-col bg-gray-50 items-center transition-all flex-shrink-0 z-10 shadow-inner">
          <div 
            className="p-3 border-b border-gray-100 w-full flex justify-center bg-white cursor-pointer hover:bg-gray-100 transition-colors" 
            onClick={() => setIsQueueVisible(true)}
            title={`Show ${title}`}
          >
            <ChevronRight size={14} className="text-gray-500"/>
          </div>
          <div className="flex-1 w-full overflow-y-auto py-4 flex flex-col items-center space-y-4 no-scrollbar">
            {items.map((item) => {
              const isActive = item.id === selectedSessionId;
              const isHandled = item.sessionStatus === 'handled' || item.postStatus === 'handled';
              return (
                <div key={item.id} className="flex justify-center w-full">
                  <div className="relative">
                    <div 
                      onClick={() => {
                        setSelectedSessionId(item.id);
                        setActiveCenterTab('conversation');
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition-all ${item.iconBg || 'bg-gray-400'} ${isActive ? 'ring-2 ring-offset-2 ring-[#005CAB]' : 'hover:scale-105'} ${isHandled && !isActive && mainMenu !== 'access_records' ? 'opacity-40 grayscale' : 'opacity-80 hover:opacity-100'}`}
                      title={item.name}
                    >
                      <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden">
                        {item.icon}
                      </div>
                    </div>
                    {item.unreadCount > 0 && !isHandled && (
                      <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center z-10 border border-white pointer-events-none shadow-sm">
                        {item.unreadCount}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="w-72 border-r border-gray-200 flex flex-col bg-white flex-shrink-0 transition-all">
        <div className="p-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <span className="text-sm font-bold text-gray-800">{title}</span>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsQueueVisible(false)} 
              className="flex items-center space-x-1 text-gray-500 hover:text-[#005CAB] transition-colors focus:outline-none"
            >
              <ChevronLeft size={14} />
              <span className="text-xs font-semibold">Hide</span>
            </button>
          </div>
        </div>

        {/* Social Media Sub-filters */}
        {activeTab === 'socialmedia' && (
          <div className="border-b border-gray-100 bg-gray-50 flex flex-col">
            <div className="px-3 py-2 flex flex-wrap gap-1.5 border-b border-gray-100/50">
              <button onClick={() => setSelectedChannels([])} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap ${selectedChannels.length === 0 ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}>All Channels</button>
              <button onClick={() => toggleChannel('facebook')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('facebook') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Facebook size={10}/> <span>FB</span></button>
              <button onClick={() => toggleChannel('instagram')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('instagram') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Instagram size={10}/> <span>IG</span></button>
              <button onClick={() => toggleChannel('x')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('x') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Twitter size={10}/> <span>X</span></button>
              <button onClick={() => toggleChannel('youtube')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('youtube') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Youtube size={10}/> <span>YT</span></button>
              <button onClick={() => toggleChannel('linkedin')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('linkedin') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Linkedin size={10}/> <span>IN</span></button>
              <button onClick={() => toggleChannel('tiktok')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('tiktok') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Music size={10}/> <span>TK</span></button>
              <button onClick={() => toggleChannel('appstore')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('appstore') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Apple size={10}/> <span>App Store</span></button>
              <button onClick={() => toggleChannel('playstore')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedChannels.includes('playstore') ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Play size={10}/> <span>Play Store</span></button>
            </div>
            <div className="px-3 py-2 flex flex-wrap gap-1.5">
              <button onClick={() => setSelectedTypes([])} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap ${selectedTypes.length === 0 ? 'bg-indigo-100 text-indigo-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}>All Types</button>
              <button onClick={() => toggleType('conversation')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedTypes.includes('conversation') ? 'bg-indigo-100 text-indigo-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><MessageSquare size={10}/> <span>Chats</span></button>
              <button onClick={() => toggleType('post')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedTypes.includes('post') ? 'bg-indigo-100 text-indigo-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Layout size={10}/> <span>Posts</span></button>
              <button onClick={() => toggleType('comment')} className={`px-2.5 py-1 text-[10px] rounded-full whitespace-nowrap flex items-center space-x-1 ${selectedTypes.includes('comment') ? 'bg-indigo-100 text-indigo-700 font-bold' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}><Star size={10}/> <span>Reviews</span></button>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-6 text-center text-xs text-gray-400">No active sessions in this filter.</div>
          ) : items.map((item) => {
            const isActive = item.id === selectedSessionId;
            const isHandled = item.sessionStatus === 'handled' || item.postStatus === 'handled';
            return (
              <div 
                key={item.id} 
                onClick={() => {
                  setSelectedSessionId(item.id);
                  setActiveCenterTab('conversation');
                }}
                className={`flex items-center px-4 py-4 cursor-pointer border-b border-gray-100 transition-colors ${
                  isActive ? 'bg-[#EAF5FF]' : (isHandled && mainMenu !== 'access_records' ? 'bg-gray-50 opacity-60 grayscale-[50%]' : 'bg-white hover:bg-gray-50')
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white ${item.iconBg || 'bg-gray-400'} mr-3 overflow-hidden`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center space-x-2 truncate pr-2">
                        <span className="text-[15px] text-gray-700 truncate font-medium">{item.name}</span>
                        {item.assignmentLevel === 'conversation' && <span className="bg-blue-100 text-blue-700 text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0">Chat</span>}
                        {item.assignmentLevel === 'post' && <span className="bg-purple-100 text-purple-700 text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0">Post</span>}
                        {item.assignmentLevel === 'comment' && <span className="bg-orange-100 text-orange-700 text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0">Review</span>}
                    </div>
                    <span className="text-gray-400 text-[13px] flex-shrink-0 ml-2">{isActive ? 'Now' : item.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-[12px] truncate pr-2">{item.desc}</span>
                    {item.unreadCount > 0 && !isHandled && (
                      <div className="bg-red-600 text-white text-[11px] font-bold h-5 min-w-[20px] px-1.5 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.unreadCount}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#F0F2F5] font-sans text-slate-700 overflow-hidden">
      {/* Top Navbar */}
      <header className="bg-[#005CAB] h-14 flex items-center justify-between px-4 text-white shadow-md z-10">
        <div className="flex items-center space-x-6 w-full">
          <div className="flex space-x-1 h-14 items-end overflow-x-auto no-scrollbar w-full pb-1">
            <button 
              onClick={() => {
                setActiveTab('home');
                setSelectedSessionId(null);
                setMainMenu('inbox');
              }}
              className={`px-4 py-2 text-sm flex items-center space-x-1 whitespace-nowrap mb-[4px] border-b-4 transition-colors ${
                activeTab === 'home' && mainMenu === 'inbox'
                ? 'border-white font-semibold' 
                : 'border-transparent opacity-80 hover:opacity-100 hover:border-white/50'
              }`}
            >
              <Layout size={16} />
              <span>Home</span>
            </button>

            {mainTabs.map(tab => {
              // Calculate unread count based on grouped channels
              let unreadCount = 0;
              if (tab.id === 'socialmedia') {
                unreadCount = socialChannelsList.reduce((acc, curr) => acc + (sessionsData[curr] || []).reduce((a, c) => a + c.unreadCount, 0), 0);
              } else {
                unreadCount = (sessionsData[tab.id] || []).reduce((acc, curr) => acc + curr.unreadCount, 0);
              }

              const isActive = activeTab === tab.id && mainMenu === 'inbox';

              return (
                <button 
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMainMenu('inbox'); // Return to inbox mode on channel switch
                    if (tab.id === 'socialmedia') {
                      setSelectedChannels([]);
                      setSelectedTypes([]);
                      const firstAvail = socialChannelsList.flatMap(ch => sessionsData[ch] || []).filter(s => s.sessionStatus !== 'handled' && s.postStatus !== 'handled')[0];
                      setSelectedSessionId(firstAvail ? firstAvail.id : null);
                    } else {
                      const firstAvail = (sessionsData[tab.id] || []).filter(s => s.sessionStatus !== 'handled' && s.postStatus !== 'handled')[0];
                      setSelectedSessionId(firstAvail ? firstAvail.id : null);
                    }
                  }}
                  className={`px-4 py-2 text-sm flex items-center space-x-1 whitespace-nowrap mb-[4px] border-b-4 transition-colors ${
                    isActive 
                    ? 'border-white font-semibold' 
                    : 'border-transparent opacity-80 hover:opacity-100 hover:border-white/50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {unreadCount > 0 && (
                    <span className="ml-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center shadow-sm">
                      {unreadCount}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Dynamic Access Records Tab */}
            {mainMenu === 'access_records' && (
              <div className="flex items-center px-4 py-2 text-sm space-x-2 whitespace-nowrap mb-[4px] border-b-4 transition-colors border-white font-semibold bg-white/20 rounded-t-md ml-2 cursor-default">
                <History size={16} />
                <span>Access Records</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setMainMenu('inbox'); // Closes the tab and returns to the inbox
                  }} 
                  className="hover:bg-black/20 p-0.5 rounded-full transition-colors ml-1"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* 1. Left Sidebar (Narrow Icons) */}
        <aside className="w-14 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6 shadow-sm z-10">
          <Layout className="text-gray-400 hover:text-[#005CAB] cursor-pointer" size={20} />
          <div onClick={() => setMainMenu('inbox')} className="relative cursor-pointer group" title="Inbox">
             <MessageSquare className={`${mainMenu === 'inbox' ? 'text-[#005CAB]' : 'text-gray-400 group-hover:text-[#005CAB]'}`} size={20} />
          </div>
          <div onClick={() => setMainMenu('access_records')} className="relative cursor-pointer group" title="Access Records">
             <History className={`${mainMenu === 'access_records' ? 'text-[#005CAB]' : 'text-gray-400 group-hover:text-[#005CAB]'}`} size={20} />
          </div>
          <Star className="text-gray-400 hover:text-[#005CAB] cursor-pointer" size={20} />
          <div className="mt-auto pb-4">
            <Settings className="text-gray-400 hover:text-[#005CAB] cursor-pointer" size={20} />
          </div>
        </aside>

        {/* 2. Queue / Active Sessions Sidebar */}
        {renderSidebar(mainMenu === 'access_records' ? 'Access Records' : (activeTab === 'socialmedia' ? 'Social Media Inbox' : 'Sessions'), currentSessionsList)}

        {/* 3. Center Panel: Main Workspace */}
        <main className="flex-1 flex flex-col bg-[#F0F2F5] overflow-hidden border-r border-gray-200">
          
          {/* Customer Session Header Tabs */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 pt-3 flex items-center space-x-1 overflow-x-auto no-scrollbar flex-shrink-0">
            <button 
              onClick={() => setActiveCenterTab('crm')}
              className={`flex items-center flex-shrink-0 space-x-2 px-4 py-2 text-xs rounded-t-lg transition-colors border-t border-x ${
                activeCenterTab === 'crm' 
                ? 'bg-white border-gray-200 text-[#005CAB] font-bold shadow-[0_-2px_4px_rgba(0,0,0,0.05)]' 
                : 'text-gray-500 hover:bg-gray-200 border-transparent'
              }`}
            >
              <User size={14} />
              <span>CRM</span>
            </button>
            <button 
              onClick={() => setActiveCenterTab('conversation')}
              className={`flex items-center flex-shrink-0 space-x-2 px-4 py-2 text-xs rounded-t-lg transition-colors border-t border-x ${
                activeCenterTab === 'conversation' 
                ? 'bg-white border-gray-200 text-[#005CAB] font-bold shadow-[0_-2px_4px_rgba(0,0,0,0.05)]' 
                : 'text-gray-500 hover:bg-gray-200 border-transparent'
              }`}
            >
              <MessageSquare size={14} />
              <span>Conversation</span>
            </button>
            <button 
              onClick={() => setActiveCenterTab('transfer')}
              className={`flex items-center flex-shrink-0 space-x-2 px-4 py-2 text-xs rounded-t-lg transition-colors border-t border-x ${
                activeCenterTab === 'transfer' 
                ? 'bg-white border-gray-200 text-[#005CAB] font-bold shadow-[0_-2px_4px_rgba(0,0,0,0.05)]' 
                : 'text-gray-500 hover:bg-gray-200 border-transparent'
              }`}
            >
              <ArrowRightLeft size={14} />
              <span>Transfer</span>
            </button>
          </div>

          {/* Conditional Rendering based on Center Tab */}
          {activeTab === 'home' ? (
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 text-gray-500 p-6">
              <Layout size={64} className="mb-4 text-gray-300" />
              <h2 className="text-2xl font-bold text-gray-700">System Homepage</h2>
              <p className="mt-2 text-sm max-w-md text-center">Welcome to your Agent Dashboard. Select a text channel from the tabs above to begin serving customers and handling pending interactions.</p>
            </div>
          ) : activeCenterTab === 'crm' ? (
            <div className="flex-1 flex overflow-hidden bg-white">
              {/* Left Nav Menu for CRM */}
              <div className="w-48 bg-gray-50 border-r border-gray-200 p-4 space-y-3 overflow-y-auto custom-scrollbar flex-shrink-0 shadow-inner">
                {['Information', 'More Information', 'Single View', 'Omni Channel', 'Request', 'Call Wrap Up', 'Archived Request', 'Problem Support', 'History Email', 'Supporting Documents'].map((menu, i) => (
                  <div key={i} className={`text-sm font-semibold cursor-pointer px-2 py-1.5 rounded transition-colors ${i===0 ? 'text-[#005CAB] bg-blue-50' : 'text-gray-600 hover:text-[#005CAB] hover:bg-blue-50/50'}`}>
                    {menu}
                  </div>
                ))}
              </div>
              
              {/* Main CRM Content */}
              <div className="flex-1 p-8 overflow-y-auto bg-white space-y-8">
                {/* CRM Header */}
                <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
                  <div className="w-16 h-16 bg-gray-100 border border-gray-300 rounded shadow-sm flex items-center justify-center">
                    <Layout size={32} className="text-gray-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 underline decoration-2 underline-offset-4 decoration-gray-300">Information</h2>
                    <p className="text-sm font-bold text-gray-600 mt-1">Customer: Syarief Noor</p>
                  </div>
                </div>

                {/* General Section */}
                <div className="border border-gray-200 rounded-lg bg-gray-50/50 overflow-hidden">
                  <div className="bg-[#E6F0FA] text-[#005CAB] font-bold text-lg px-5 py-2.5 border-b border-gray-200">General</div>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4 p-6">
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">CIS Number</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800 font-mono">00000078398</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Segmentation</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Salutation</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Membership</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">First Name</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Last Name</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800 uppercase">ZAENAL</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Full Name</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">Syarief Noor</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Birth Place</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800 uppercase">JAKARTA</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Alias Name</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">Syarief Noor</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Birth Date</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800 flex justify-between items-center">
                        22/12/1950 <Calendar size={12} className="text-gray-400" />
                      </div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Mother's Maiden Name</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800 uppercase">IBU ZAENAL</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Gender</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">Male</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Customer Code</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">ID Number</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800 font-mono">0457869200014</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Occupation</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">7 - Pensiunan</div>
                    </div>
                  </div>
                </div>

                {/* Information Section */}
                <div className="border border-gray-200 rounded-lg bg-gray-50/50 overflow-hidden">
                  <div className="bg-[#E6F0FA] text-[#005CAB] font-bold text-lg px-5 py-2.5 border-b border-gray-200">Information</div>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4 p-6">
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Address Type</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">Home</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">City</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Address Line 1</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">INDONESIA, JAKARTA 12345, JL K</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">State/Province</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Address Line 2</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">ZIP/Postal Code</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Address Line 3</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Country/Region</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Telephone No.</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800 font-mono">8110142208</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Business No.</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">0</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Handphone No.</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">Fax No.</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 text-gray-800">0</div>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-1/3 text-right pr-4 text-gray-600 font-medium">E-mail</span>
                      <div className="flex-1 bg-gray-100 border border-gray-300 rounded px-2.5 py-1.5 min-h-[26px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeCenterTab === 'transfer' ? (
            <div className="flex-1 flex flex-col items-center justify-center bg-white p-6 space-y-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#005CAB] mb-2">
                <ArrowRightLeft size={32} />
              </div>
              <h2 className="text-lg font-bold text-gray-700">Transfer Session</h2>
              <p className="text-sm text-gray-500 max-w-md text-center mb-6">Select a department or specific agent to transfer the active session with <strong>{activeSession?.name}</strong>.</p>
              
              <div className="flex space-x-4 w-full max-w-md">
                <button className="flex-1 bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center justify-center space-y-2 group">
                  <User size={24} className="text-gray-400 group-hover:text-blue-500" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600">Specific Agent</span>
                </button>
                <button className="flex-1 bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center justify-center space-y-2 group">
                  <Layout size={24} className="text-gray-400 group-hover:text-blue-500" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600">Department Queue</span>
                </button>
              </div>
            </div>
          ) : currentSessionsList.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center bg-white text-gray-500 p-6">
              <CheckCircle size={48} className="mb-4 text-green-300" />
              <h2 className="text-lg font-bold text-gray-700">All Caught Up!</h2>
              <p className="mt-2 text-sm text-center">There are no pending sessions in the selected filter.</p>
            </div>
          ) : activeSession.assignmentLevel === 'conversation' ? (
            /* CONVERSATION INTERFACE (Realtime Chat logic) */
            <div className="flex-1 flex flex-col relative bg-white">
              {/* Header for Conversation Assignment */}
              <div className="h-14 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between shadow-sm z-10 flex-shrink-0">
                  <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-gray-800">Chat with {activeSession.name}</span>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                          Chat
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${(activeSession.sessionStatus === 'handled' || activeSession.postStatus === 'handled') ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                          {(activeSession.sessionStatus === 'handled' || activeSession.postStatus === 'handled') ? 'Handled' : 'Pending'}
                      </span>
                  </div>
                  {/* Action Buttons moved to Header */}
                  <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setShowCloseModal(true)}
                        className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors flex items-center gap-1 shadow-sm"
                      >
                          <PhoneOff size={14} /> Release
                      </button>
                      {(activeSession.sessionStatus !== 'handled' && activeSession.postStatus !== 'handled') && (
                          <button 
                            onClick={() => handleCompleteSession(activeSession.id)}
                            className="px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-bold hover:bg-green-100 transition-colors flex items-center gap-1 shadow-sm"
                          >
                             <CheckCircle size={14} /> Complete
                          </button>
                      )}
                      <MoreVertical size={16} className="text-gray-400 cursor-pointer ml-1" />
                  </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto bg-white space-y-6">
                <div className="flex justify-center">
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-3 py-1 rounded-full uppercase tracking-wider">Today</span>
                </div>
                {activeSession.history?.map((msg, idx) => {
                  if (msg.sender === 'customer') {
                    return (
                      <div key={idx} className="flex items-end max-w-[80%] mb-4">
                        <img src="https://placehold.co/100x100/ec4899/ffffff?text=C" className="w-6 h-6 rounded-full mr-2 mb-1 object-cover" alt="Customer"/>
                        <div className="flex flex-col">
                            <div className="bg-gray-100 text-gray-900 px-4 py-2.5 rounded-2xl rounded-bl-none text-sm shadow-sm inline-block">
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            <span className="text-[10px] text-gray-400 mt-1 ml-1">{msg.time}</span>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={idx} className="flex flex-col items-end max-w-[80%] ml-auto mb-4">
                        <div className="bg-[#005CAB] text-white px-4 py-2.5 rounded-2xl rounded-br-none text-sm shadow-sm inline-block text-left">
                            <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 mr-1">{msg.time} • Agent</span>
                      </div>
                    );
                  }
                })}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex items-center space-x-4 mb-3 text-gray-400">
                  <Smile size={18} className="cursor-pointer hover:text-[#005CAB]" />
                  <Paperclip size={18} className="cursor-pointer hover:text-[#005CAB]" />
                  <Layout size={18} className="cursor-pointer hover:text-[#005CAB]" />
                  <History size={18} className="cursor-pointer hover:text-[#005CAB]" />
                </div>
                <div className="flex space-x-2 mb-3">
                  <input 
                    type="text" 
                    placeholder="Write a message..." 
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#005CAB]"
                  />
                </div>
                <div className="flex justify-end items-center">
                  <button className="bg-[#005CAB] text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium text-sm flex items-center space-x-2 transition-colors">
                    <Send size={16} />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>
          ) : activeSession.assignmentLevel === 'post' ? (
            /* POST INTERFACE (Feed logic with nested replies) */
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              {/* Header */}
              <div className="h-14 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between shadow-sm z-10 flex-shrink-0">
                <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-gray-800">Reply to {activeSession.title}</span>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
                        Post
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${(activeSession.sessionStatus === 'handled' || activeSession.postStatus === 'handled') ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                        {(activeSession.sessionStatus === 'handled' || activeSession.postStatus === 'handled') ? 'Handled' : 'Pending'}
                    </span>
                    {/* Totals Badge */}
                    <span className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                        <MessageSquare size={12}/> {activeSession.history?.length || 0} Total
                    </span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={scrollToNextUnread}
                    className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center gap-1 shadow-sm"
                  >
                     <ChevronDown size={14} /> Next Unread
                  </button>
                  <button 
                    onClick={() => setShowCloseModal(true)}
                    className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors flex items-center gap-1 shadow-sm"
                  >
                      <PhoneOff size={14} /> Release
                  </button>
                  {(activeSession.sessionStatus !== 'handled' && activeSession.postStatus !== 'handled') && (
                      <button 
                        onClick={() => handleCompleteSession(activeSession.id)}
                        className="px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-bold hover:bg-green-100 transition-colors flex items-center gap-1 shadow-sm"
                      >
                         <CheckCircle size={14} /> Complete
                      </button>
                  )}
                  <MoreVertical size={16} className="text-gray-400 cursor-pointer ml-1" />
                </div>
              </div>

              {/* Original Post Context */}
              <div className="flex-shrink-0 border-b border-gray-200 bg-gray-50 p-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex gap-4 max-w-4xl mx-auto">
                    {activeSession.postContext?.image && (
                        <img src={activeSession.postContext.image} className="w-24 h-24 object-cover rounded-lg border border-gray-100" alt="Post" />
                    )}
                    <div className="flex-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center">
                            <Pin size={12} className="mr-1"/> Original Post Context
                        </p>
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">{activeSession.postContext?.title}</h4>
                        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{activeSession.postContext?.text}</p>
                        <div className="mt-3 flex items-center gap-4">
                            <a href="#" className="text-xs text-[#005CAB] hover:underline flex items-center gap-1 font-medium"><ExternalLink size={12}/> View original post</a>
                            <button onClick={() => setReplyingToId('post')} className="text-xs text-[#005CAB] hover:underline flex items-center gap-1 font-medium"><Reply size={12}/> Reply to Post</button>
                        </div>
                        {renderInlineComposer('post')}
                    </div>
                </div>
              </div>

              {/* Feed of Comments */}
              <div className="flex-1 flex flex-col bg-white min-h-0">
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                  {activeSession.history?.map((comment, idx) => (
                    <div 
                        key={comment.id || idx} 
                        data-status={comment.status || 'read'}
                        className={`mb-2 pb-5 border-b border-gray-100 last:border-0 rounded-xl p-3 transition-colors ${comment.status === 'unread' ? 'bg-blue-50/40 ring-1 ring-blue-100' : ''}`}
                    >
                        <div className="flex items-start">
                            <img src={comment.avatar || "https://placehold.co/100x100/8b5cf6/ffffff?text=C"} className="w-9 h-9 rounded-full mr-3 mt-0.5 object-cover ring-2 ring-white shadow-sm" alt="User" />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="font-bold text-sm text-gray-900">{comment.name}</span>
                                    <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => comment.status !== 'unread' && handleCommentAction(activeSession.id, comment.id, 'unread')} title="Click to revert to Unread">
                                        {comment.isHidden && <span className="flex items-center gap-1 text-[10px] text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full font-bold border border-gray-300"><EyeOff size={10}/> Hidden</span>}
                                        {comment.isBlocked && <span className="flex items-center gap-1 text-[10px] text-red-700 bg-red-100 px-2 py-0.5 rounded-full font-bold border border-red-200"><Ban size={10}/> Blocked</span>}
                                        {comment.status === 'unread' && <span className="flex items-center gap-1.5 text-[10px] text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full font-bold border border-blue-200 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span> Unread</span>}
                                        {comment.status === 'replied' && <span className="flex items-center gap-1 text-[10px] text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full font-bold border border-green-200"><CheckCircle size={10}/> Replied by {comment.agentName || 'Agent'}</span>}
                                        {comment.status === 'no_reply_needed' && <span className="flex items-center gap-1 text-[10px] text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full font-bold border border-gray-200">Handled by {comment.agentName || 'Budi Kartika'}</span>}
                                        {comment.status === 'pending_review' && <span className="flex items-center gap-1 text-[10px] text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full font-bold border border-orange-200"><Shield size={10}/> Pending Review</span>}
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 inline-block border border-gray-100">
                                    <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">{comment.text}</p>
                                </div>
                                
                                {/* Post-Level Actions */}
                                <div className="flex flex-wrap items-center gap-4 mt-2 ml-2 text-[11px] font-semibold">
                                    <button onClick={() => handleCommentAction(activeSession.id, comment.id, 'toggle_like')} className={`${comment.isLiked ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'} transition-colors flex items-center gap-1`}>
                                        <ThumbsUp size={13} className={comment.isLiked ? "fill-blue-600" : ""}/> {comment.isLiked ? 'Liked' : 'Like'}
                                    </button>
                                    
                                    {comment.status === 'unread' ? (
                                        <>
                                            <button onClick={() => setReplyingToId(comment.id)} className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"><Reply size={13}/> Reply</button>
                                            <button onClick={() => handleCommentAction(activeSession.id, comment.id, 'no_reply_needed')} className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"><CheckCircle size={13}/> Mark as Handled</button>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-gray-400 font-normal">{comment.time}</span>
                                            {comment.status !== 'replied' && <button onClick={() => setReplyingToId(comment.id)} className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1"><Reply size={13}/> Reply</button>}
                                        </>
                                    )}

                                    <div className="flex items-center gap-3 ml-auto text-gray-400 border-l border-gray-200 pl-3">
                                        <button onClick={() => handleCommentAction(activeSession.id, comment.id, 'hide')} className="hover:text-gray-700 transition-colors flex items-center gap-1" title="Hide Comment"><EyeOff size={13}/> Hide</button>
                                        <button onClick={() => handleCommentAction(activeSession.id, comment.id, 'block')} className="hover:text-red-600 transition-colors flex items-center gap-1" title="Block User"><Ban size={13}/> Block</button>
                                        <button className="hover:text-indigo-600 transition-colors flex items-center gap-1" title="Create CRM Ticket"><Ticket size={13}/> Create Ticket</button>
                                        <button onClick={() => handleCommentAction(activeSession.id, comment.id, 'pending_review')} className="hover:text-orange-600 transition-colors flex items-center gap-1" title="Record Service Upgrade / TL Review"><FileEdit size={13}/> Record Escalation</button>
                                    </div>
                                </div>

                                {/* Inline Composer */}
                                {renderInlineComposer(comment.id)}

                                {/* Threaded Replies */}
                                {comment.replies?.map((reply, rIdx) => (
                                    <div key={rIdx} className="flex items-start mt-4 ml-8 relative before:absolute before:-left-5 before:top-4 before:w-4 before:border-t-2 before:border-gray-200 before:rounded-bl">
                                      <img src={reply.sender === 'agent' ? "https://placehold.co/100x100/333/fff?text=Ag" : comment.avatar} className="w-7 h-7 rounded-full mr-3 object-cover shadow-sm ring-2 ring-white" alt={reply.sender} />
                                      <div className="flex-1">
                                          <div className={`border rounded-2xl rounded-tl-none px-4 py-2.5 inline-block ${reply.sender === 'agent' ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'}`}>
                                              <span className={`font-bold text-xs block mb-1 flex items-center gap-1 ${reply.sender === 'agent' ? 'text-[#005CAB]' : 'text-gray-900'}`}>
                                                  {reply.sender === 'agent' ? <><User size={10}/> Your Brand</> : comment.name}
                                              </span>
                                              <p className="text-sm text-gray-800 whitespace-pre-wrap">{reply.text}</p>
                                          </div>
                                          <div className="text-[10px] text-gray-400 mt-1 ml-2">{reply.time}</div>
                                      </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* COMMENT/REVIEW INTERFACE (App Stores logic) */
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              <div className="h-14 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between shadow-sm z-10 flex-shrink-0">
                <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-gray-800">Reply to {activeSession.title} Review</span>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                        Review
                    </span>
                    {activeSession.appName && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-gray-200 text-gray-700 border border-gray-300">
                            {activeSession.appName} {activeSession.appVersion}
                        </span>
                    )}
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${(activeSession.sessionStatus === 'handled' || activeSession.postStatus === 'handled') ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                        {(activeSession.sessionStatus === 'handled' || activeSession.postStatus === 'handled') ? 'Handled' : 'Pending'}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setShowCloseModal(true)}
                      className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors flex items-center gap-1 shadow-sm"
                    >
                        <PhoneOff size={14} /> Release
                    </button>
                    {(activeSession.sessionStatus !== 'handled' && activeSession.postStatus !== 'handled') && (
                        <button 
                          onClick={() => handleCompleteSession(activeSession.id)}
                          className="px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-bold hover:bg-green-100 transition-colors flex items-center gap-1 shadow-sm"
                        >
                           <CheckCircle size={14} /> Complete
                        </button>
                    )}
                    <MoreVertical size={16} className="text-gray-400 cursor-pointer ml-1" />
                </div>
              </div>
              <div className="flex-1 p-6 overflow-y-auto bg-white">
                 {activeSession.history?.map((msg, idx) => {
                    if (msg.sender === 'customer') {
                        const stars = '★'.repeat(activeSession.rating || 5) + '☆'.repeat(5 - (activeSession.rating || 5));
                        return (
                            <div key={msg.id || idx} className="bg-yellow-50 p-5 rounded-lg border border-yellow-200 mb-6 shadow-sm">
                                <div className="flex justify-between items-center mb-3 border-b border-yellow-200/50 pb-2">
                                    <span className="font-bold text-sm text-gray-900">{activeSession.name}</span>
                                    <span className="text-yellow-500 text-lg tracking-widest">{stars}</span>
                                </div>
                                <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                
                                {/* Review Actions */}
                                <div className="flex flex-wrap items-center gap-4 mt-4 text-[11px] font-semibold border-t border-yellow-200/50 pt-3">
                                    <button onClick={() => handleCommentAction(activeSession.id, msg.id, 'toggle_like')} className={`${msg.isLiked ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'} transition-colors flex items-center gap-1`}>
                                        <ThumbsUp size={13} className={msg.isLiked ? "fill-blue-600" : ""}/> {msg.isLiked ? 'Helpful' : 'Helpful?'}
                                    </button>
                                    <span className="text-gray-400 font-normal">{msg.time}</span>
                                    
                                    <div className="flex items-center gap-3 ml-auto text-gray-400 border-l border-yellow-200 pl-3">
                                        <button className="hover:text-indigo-600 transition-colors flex items-center gap-1" title="Create CRM Ticket"><Ticket size={13}/> Create Ticket</button>
                                        <button onClick={() => handleCommentAction(activeSession.id, msg.id, 'pending_review')} className="hover:text-orange-600 transition-colors flex items-center gap-1" title="Record Escalation"><FileEdit size={13}/> Record Escalation</button>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={idx} className="flex items-start ml-8 border-l-2 border-[#005CAB] pl-4 mt-4">
                                <img src="https://placehold.co/100x100/333/fff?text=Ag" className="w-8 h-8 rounded-full mr-3 mt-0.5 object-cover" alt="Agent" />
                                <div className="flex-1">
                                    <div className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3 inline-block">
                                        <span className="font-bold text-sm text-[#005CAB] block mb-1">Agent Reply</span>
                                        <p className="text-sm text-gray-800 whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                    <div className="mt-1 ml-2 text-xs text-gray-400">{msg.time}</div>
                                </div>
                            </div>
                        )
                    }
                 })}
              </div>
              {/* App Review Input */}
              <div className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
                  <textarea 
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#005CAB] resize-none mb-3"
                    placeholder="Write a public developer response..."
                    rows="2"
                  ></textarea>
                  <div className="flex justify-end items-center">
                    <button className="px-8 py-2 bg-gray-800 text-white text-xs font-bold rounded-lg shadow-md hover:bg-black flex items-center space-x-2 transition-colors">
                      <Send size={14} />
                      <span>Publish Reply</span>
                    </button>
                  </div>
              </div>
            </div>
          )}
        </main>

        {/* 5. Right Panel: Assistant & Connection */}
        <aside className="w-[380px] bg-[#F8FAFC] flex flex-col shadow-inner justify-between border-l border-gray-200 flex-shrink-0 z-10 relative">
          <div className="flex flex-col h-full bg-white overflow-hidden">
            {/* Tabs for Right Side */}
            <div className="flex bg-gray-100 border-b border-gray-200 flex-shrink-0">
              {[
                { id: 'assistant', label: 'Assistant' },
                { id: 'connection', label: 'Connection' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex-1 py-3 text-xs font-bold text-center transition-all ${
                    activeSubTab === tab.id 
                    ? 'bg-[#3B82F6] text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]' 
                    : 'text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              {activeSubTab === 'assistant' ? (
                <>
                  {/* Top Nav Row from Image 2 */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 overflow-x-auto no-scrollbar gap-5 text-gray-500 flex-shrink-0 bg-white">
                      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#005CAB] group min-w-max">
                          <div className="relative"><Info size={16} /></div>
                          <span className="text-[10px] font-medium group-hover:text-[#005CAB]">Informasi</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#005CAB] group min-w-max">
                          <div className="relative"><Navigation size={16} /></div>
                          <span className="text-[10px] font-medium group-hover:text-[#005CAB]">Navigasi</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#005CAB] group min-w-max">
                          <div className="relative"><AlertTriangle size={16} /></div>
                          <span className="text-[10px] font-medium group-hover:text-[#005CAB]">Pelanggaran</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#005CAB] group min-w-max">
                          <div className="relative">
                              <User size={16} />
                              <CheckCircle size={8} className="absolute -bottom-1 -right-1 text-green-500 fill-white bg-white rounded-full" />
                          </div>
                          <span className="text-[10px] font-medium group-hover:text-[#005CAB]">Pelanggan</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#005CAB] group min-w-max">
                          <div className="relative">
                              <ImageIcon size={16} />
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                          </div>
                          <span className="text-[10px] font-medium group-hover:text-[#005CAB]">Potret</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#005CAB] group min-w-max">
                          <div className="relative">
                              <FileText size={16} />
                              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-[8px] font-bold px-1 rounded-sm leading-none border border-white">B</div>
                          </div>
                          <span className="text-[10px] font-medium group-hover:text-[#005CAB]">Transkripsi</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#005CAB] group min-w-max">
                          <div className="relative"><CheckSquare size={16} /></div>
                          <span className="text-[10px] font-medium group-hover:text-[#005CAB]">Kesimpulan</span>
                      </div>
                  </div>
                  
                  {/* Recommendations and Alerts from Image 2 */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 custom-scrollbar">
                     {/* Card 1: Emosi (Red) */}
                     <div className="bg-red-50/80 border border-red-200 p-3.5 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-red-600 font-bold text-[13px]">
                                <AlertCircle size={16} className="fill-red-100 text-red-500" />
                                <span>Emosi pelanggan: tidak puas jalan jenderal gatot subroto mbak ika i...</span>
                            </div>
                            <X size={14} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>
                        <div className="mt-2.5 text-xs text-gray-700 leading-relaxed border-b border-red-200/50 pb-3">
                            melalui ATM BCA adalah 60 hari sejak pengajuan penggantian kartu.
                            <div className="mt-2 text-[10px] text-gray-500 leading-tight">
                                Sumber Pengetahuan: 《Cara Ganti dan Aktivasi Kartu Debit BCA yang Expired》<br/>
                                <a href="#" className="text-blue-600 hover:underline break-all inline-block mt-0.5">https://huawei.speaklyai.com/r-obj/6699d2d5ca5518000124ef57/r/20241121/673ea1a53a5233d8e2b89664.pdf</a>
                            </div>
                        </div>
                        <div className="mt-2.5">
                            <div className="flex justify-between items-center text-xs text-gray-700 font-medium">
                                <span>Kartu kredit apa saja yang mendapatkan Reward ?</span>
                                <ChevronDown size={14} className="text-gray-400" />
                            </div>
                            <button className="w-full mt-2.5 py-1.5 border border-gray-300 text-blue-600 bg-white hover:bg-blue-50/50 flex justify-center items-center gap-1.5 rounded-lg text-[11px] font-semibold transition-colors shadow-sm">
                                <ExternalLink size={12} /> Buka
                            </button>
                        </div>
                     </div>

                     {/* Card 2: Bahasa (Yellow) */}
                     <div className="bg-yellow-50 border border-yellow-200 p-3.5 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 text-yellow-600 font-bold text-[13px]">
                            <AlertTriangle size={16} className="fill-yellow-100 text-yellow-500" />
                            <span className="truncate">Bahasa layanan tidak pantas aja telah berhasil dibuka apakah ada hal l...</span>
                        </div>
                     </div>

                     {/* Card 3: Rekomendasi 1 (Blue) */}
                     <div className="bg-indigo-50/30 border border-indigo-100 p-3.5 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs mb-2">
                            <MessageCircleIcon size={14} className="fill-indigo-800 text-indigo-100" />
                            <span>Rekomendasi pembicaraan</span>
                        </div>
                        <div className="flex items-start gap-2 bg-white border border-indigo-50 rounded-lg p-2.5 mb-3 shadow-sm">
                            <MessageSquare size={12} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-indigo-950 font-medium leading-relaxed">
                                saya baru saja mengirimkan email link jika sudah diterima ibu bisa m...
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center text-xs text-gray-700 font-medium px-1">
                                <span>Saya ingin mengurus pembekuan kartu bank</span>
                                <ChevronDown size={14} className="text-gray-400" />
                            </div>
                            <button className="w-full mt-2.5 py-1.5 border border-indigo-200 text-indigo-700 bg-white hover:bg-indigo-50 flex justify-center items-center gap-1.5 rounded-lg text-[11px] font-semibold transition-colors shadow-sm">
                                <ExternalLink size={12} /> Buka
                            </button>
                        </div>
                     </div>

                     {/* Card 4: Rekomendasi 2 (Blue) */}
                     <div className="bg-indigo-50/30 border border-indigo-100 p-3.5 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs mb-2">
                            <MessageCircleIcon size={14} className="fill-indigo-800 text-indigo-100" />
                            <span>Rekomendasi pembicaraan</span>
                        </div>
                        <div className="flex items-start gap-2 bg-white border border-indigo-50 rounded-lg p-2.5 mb-3 shadow-sm">
                            <MessageSquare size={12} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-indigo-950 font-medium leading-relaxed">
                                udah saya submit ya mbak tolong bantu cek ya
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center text-xs text-gray-700 font-medium px-1">
                                <span>cek atur batas transfer aplikasi</span>
                                <ChevronDown size={14} className="text-gray-400" />
                            </div>
                            <button className="w-full mt-2.5 py-1.5 border border-indigo-200 text-indigo-700 bg-white hover:bg-indigo-50 flex justify-center items-center gap-1.5 rounded-lg text-[11px] font-semibold transition-colors shadow-sm">
                                <ExternalLink size={12} /> Buka
                            </button>
                        </div>
                     </div>

                     {/* Card 5: Rekomendasi 3 (Blue) */}
                     <div className="bg-indigo-50/30 border border-indigo-100 p-3.5 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs mb-2">
                            <MessageCircleIcon size={14} className="fill-indigo-800 text-indigo-100" />
                            <span>Rekomendasi pembicaraan</span>
                        </div>
                        <div className="flex items-start gap-2 bg-white border border-indigo-50 rounded-lg p-2.5 mb-3 shadow-sm">
                            <MessageSquare size={12} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-indigo-950 font-medium leading-relaxed">
                                sosi saya he em
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center text-xs text-gray-700 font-medium px-1">
                                <span>Sudah memiliki kartu kredit bank lain</span>
                                <ChevronDown size={14} className="text-gray-400" />
                            </div>
                            <button className="w-full mt-2.5 py-1.5 border border-indigo-200 text-indigo-700 bg-white hover:bg-indigo-50 flex justify-center items-center gap-1.5 rounded-lg text-[11px] font-semibold transition-colors shadow-sm">
                                <ExternalLink size={12} /> Buka
                            </button>
                        </div>
                     </div>
                  </div>
                </>
              ) : activeSubTab === 'connection' ? (
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 custom-scrollbar">
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-600">
                        <LinkIcon size={12} />
                      </div>
                      <h4 className="font-bold text-sm text-gray-800">Quick Links</h4>
                    </div>

                    <div className="grid gap-3">
                      <a 
                        href="https://www.bca.co.id/en/informasi/Edukatips" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-purple-50 p-2 rounded-lg text-purple-600 group-hover:bg-purple-100 transition-colors">
                            <BookOpen size={16} />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-gray-800 group-hover:text-purple-700 transition-colors">Knowledge Base</h5>
                            <p className="text-[10px] text-gray-500">Bank policies and procedures</p>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </a>

                      <a 
                        href="https://halo.bca.co.id/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-50 p-2 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                            <Globe size={16} />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Halo BCA Portal</h5>
                            <p className="text-[10px] text-gray-500">Internal support tools</p>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </a>

                      <a 
                        href="#" 
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-50 p-2 rounded-lg text-green-600 group-hover:bg-green-100 transition-colors">
                            <CreditCard size={16} />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-gray-800 group-hover:text-green-700 transition-colors">Card Systems</h5>
                            <p className="text-[10px] text-gray-500">Credit & Debit issuing platform</p>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-gray-400 group-hover:text-green-600 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </aside>
      </div>

      {/* Close Session Confirmation Modal */}
      {showCloseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-2xl">
            <div className="flex items-center space-x-3 mb-4 text-red-600">
              <AlertTriangle size={24} />
              <h3 className="font-bold text-lg">Close Session?</h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Are you sure you want to close the session for <strong>{activeSession?.name}</strong>? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCloseModal(false)}
                className="px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowCloseModal(false);
                  
                  // Clean up combined sessions
                  if (activeTab === 'socialmedia') {
                    setSessionsData(prev => {
                      const newSessions = { ...prev };
                      socialChannelsList.forEach(ch => {
                        if (newSessions[ch]) {
                          newSessions[ch] = newSessions[ch].filter(s => s.id !== activeSession.id);
                        }
                      });
                      return newSessions;
                    });
                  } else {
                    setSessionsData(prev => {
                      const currentList = prev[activeTab] || [];
                      return {
                        ...prev,
                        [activeTab]: currentList.filter(s => s.id !== activeSession.id)
                      };
                    });
                  }
                  setSelectedSessionId(null);
                }}
                className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors"
              >
                Yes, Release Session
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
