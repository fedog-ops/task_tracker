import { TicketItem } from "@/features/ticket/components/ticket-item";
import {getTicket} from "@/app/tickets/queries/get-ticket";
import {notFound} from "next/navigation";

type TicketPageProps = {
    params: {
        ticketId: string
    };
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const ticket = await getTicket(params.ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    )
}

export default TicketPage;
