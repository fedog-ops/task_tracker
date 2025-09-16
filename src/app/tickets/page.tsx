import Link from "next/link";
import clsx from "clsx";
import { initialTickets } from '../../data';
import { ticketPath } from "../../paths";

// const DocumentIcon = () => {
//     return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//     </svg>)
// }

// const PencilIcon = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
//         </svg>

//     )
// }

// const TickIcon = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
//         </svg>

//     )
// }
const TICKET_ICONS = {
    OPEN: "O",
    IN_PROGRESS: "IP",
    DONE: "D",
}

const Tickets = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">
                    TicketsPage
                </h2>
                <h2 className="text-sm text-muted-foreground">
                    All your tickets in one place!
                </h2>
            </div>
            <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
                {initialTickets.map(ticket => (
                    <div
                        key={ticket.id}
                        className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
                    >
                        <div>{TICKET_ICONS[ticket.status]}</div>
                        <h2 className="text-lg font-semibold truncate">
                            {ticket.title}
                        </h2>
                        <p className={clsx("text-sm text-slate-500 truncate", {
                            "line-through": ticket.status === 'DONE',
                        })}>
                            {ticket.content}
                        </p>
                        <Link href={ticketPath(ticket.id)} className="text-sm underline">
                            View
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Tickets;
