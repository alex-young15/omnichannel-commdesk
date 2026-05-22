import { SOCIAL_CHANNELS } from '../constants/channels';

export const getCombinedSessions = (activeTab, sessionsData, selectedChannels, selectedTypes) => {
  if (activeTab !== 'socialmedia') return sessionsData[activeTab] || [];
  return SOCIAL_CHANNELS.flatMap((ch) => sessionsData[ch] || []).filter((s) =>
    (selectedChannels.length === 0 || selectedChannels.includes(s.type)) &&
    (selectedTypes.length === 0 || selectedTypes.includes(s.assignmentLevel))
  );
};

export const getCurrentSessionsList = (combined, mainMenu) => combined.filter((s) => {
  const handled = s.sessionStatus === 'handled' || s.postStatus === 'handled';
  return mainMenu === 'access_records' ? handled : !handled;
});

export const getActiveSession = (list, selectedSessionId) => list.find((s) => s.id === selectedSessionId) || list[0] || { id: 0, name: 'System', title: 'Dashboard', desc: 'Select session.', assignmentLevel: 'conversation', history: [] };
export const toggleSelection = (value, arr) => (arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value]);
