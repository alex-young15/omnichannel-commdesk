export default function AvatarIcon({ name }) { return <div className='w-full h-full rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold'>{(name||'U').slice(0,1)}</div>; }
