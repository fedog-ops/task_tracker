import Link from "next/link";
import { Placeholder } from "../../../components/placeholder";
import { Button } from "../../../components/ui/button";
import { initialTickets } from "../../../data";
import { TicketItem } from "../../../features/ticket/components/ticket-item";
import { ticketsPath } from "../../../paths";

type TicketPageProps = {
    params: {
        ticketId: string
    };
};

const TicketPage = ({ params }: TicketPageProps) => {
    const ticket = initialTickets.find(t => t.id === params.ticketId);

    if (!ticket) {
        return <Placeholder 
            label="Ticket not found" 
            button={
                <Button asChild variant="default">
                    <Link href={ticketsPath()}>Go to tickets</Link>
                </Button>
            }
            />;
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    )
}

export default TicketPage;
