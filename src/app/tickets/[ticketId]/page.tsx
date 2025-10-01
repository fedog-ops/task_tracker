import { initialTickets } from "../../../data";
import { TicketItem } from "../../../features/ticket/components/ticket-item";

type TicketPageProps = {
    params: {
        ticketId: string
    };
};

const TicketPage = ({ params }: TicketPageProps) => {
    const ticket = initialTickets.find(t => t.id === params.ticketId);

    if (!ticket) {
        return <div>Ticket not found</div>;
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    )
}

export default TicketPage;
