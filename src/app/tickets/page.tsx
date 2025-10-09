import Heading from "../../components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Spinner } from "@/components/spinner";
import { TicketCreateForm } from "../../features/ticket/components/create-ticket-form";
import { CardCompact } from "../../components/card-compact";

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="TicketsPage" description="All your tickets in one place!" />

            <CardCompact 
                title="Create Ticket" 
                description="A new ticket will be created" 
                className="w-full max-w-[420px] self-center" 
                content={<TicketCreateForm />} 
            />
               
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    );
}

export default TicketsPage;
