import Heading from "../../components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Spinner } from "@/components/spinner";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { CardCompact } from "../../components/card-compact";

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="TicketsPage" description="All your tickets in one place!" />

            <CardCompact 
                title="Create Ticket" 
                description="A new ticket will be created" 
                className="w-full max-w-[420px] self-center" 
                content={<TicketUpsertForm />} 
            />
               
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    );
}

export default TicketsPage;
