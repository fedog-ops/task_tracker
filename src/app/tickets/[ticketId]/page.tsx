import { initialTickets } from "../../../data";

type TicketPageProps = {
    params: { 
        ticketId: string };
};

const TicketPage = ({ params }: TicketPageProps) => {
    const ticket = initialTickets.find(t => t.id === params.ticketId);   

    if (!ticket) {
        return <div>Ticket not found</div>;
    }
    
    return (
    <div>
        <h2 className="text-lg">{ticket.title}</h2>
        <p className="text-lg">{ticket.content}</p>
        <p className="text-lg">{ticket.status}</p>
    </div> 
    )
}

export default TicketPage;
