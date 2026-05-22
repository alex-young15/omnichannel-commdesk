export default function ReviewView({session}){return <div className='p-4 text-sm'><div className='font-semibold'>{session.title}</div><p>{session.history?.[0]?.text}</p></div>}
