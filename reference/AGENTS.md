# AGENTS.md

## Project
This is an Omnichannel CommDesk frontend prototype for a contact center agent dashboard.

## Source of truth
The original Gemini-generated React prototype is stored in:

reference/GeminiOriginalApp.jsx

Use that file as the source of truth for:
- visual layout
- mock data
- channel tabs
- social media filters
- Access Records
- queue behavior
- CRM tab
- Conversation tab
- Transfer tab
- inline replies
- post/comment workflows
- App Store and Play Store review workflows
- Assistant panel
- Connection panel
- Release modal

## Stack
- React
- Vite
- Tailwind CSS
- lucide-react
- JavaScript
- Mock data only
- No backend

## Goal
Create a clean, maintainable React + Vite app from the Gemini prototype.

## Rules
- Preserve the current UI and behavior as much as possible.
- Keep primary blue: #005CAB.
- Keep full-screen dashboard layout.
- Keep the dense enterprise contact-center style.
- Do not redesign into a generic SaaS dashboard.
- Do not add backend logic.
- Do not add unnecessary dependencies.
- Do not remove existing functionality.
- Use functional components and React hooks.
- Use immutable state updates.
- Move mock data into src/data/mockSessions.js.
- Move constants into src/constants/channels.js.
- Move pure helper logic into src/utils/sessionUtils.js.
- Keep App.jsx focused on state orchestration and layout composition.
- Make sure npm run build passes.

## Target structure
src/
  App.jsx
  main.jsx
  index.css
  data/
    mockSessions.js
  constants/
    channels.js
  utils/
    sessionUtils.js
  components/
    TopNav.jsx
    LeftIconRail.jsx
    QueueSidebar.jsx
    AssistantPanel.jsx
    ReleaseSessionModal.jsx
    Badge.jsx
    AvatarIcon.jsx
    Workspace/
      Workspace.jsx
      WorkspaceTabs.jsx
      CRMView.jsx
      TransferView.jsx
      ConversationView.jsx
      PostView.jsx
      ReviewView.jsx
