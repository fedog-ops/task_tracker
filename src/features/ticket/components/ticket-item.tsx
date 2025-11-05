import Link from "next/link"
import clsx from "clsx"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { editTicketPath, ticketPath, ticketsPath } from "@/paths"
import { TICKET_ICONS } from "../constants"
import { LucidePencil, LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Ticket } from "@prisma/client"
import deleteTicket from "@/app/tickets/actions/delete-ticket";

type ticketProps = {
    ticket: Ticket
    isDetail?: boolean
}

export const TicketItem = ({ ticket, isDetail }: ticketProps) => {
    const detailButton = (
        <Button variant={"outline"} size="icon">
            <Link prefetch href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight />
            </Link>
        </Button>
    );

    const deleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)}>
            <Button variant={"outline"} size="icon">
                <LucideTrash />
            </Button>
        </form>
    );

    const editButton = (
        <Button variant={"outline"} size="icon" asChild>
            <Link prefetch href={editTicketPath(ticket.id)}>
                <LucidePencil />
            </Link>
        </Button>
    );

    return (
        <div className={clsx("w-full flex gap-x-1",
            {
                " max-w-[540px]": isDetail,
                " max-w-[420px]": !isDetail
            })}>
            <Card
                className="w-full"
            >
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">
                            {ticket.title}
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span
                        className={clsx("whitespace-break-spaces", {
                            "line-clamp-3": !isDetail,
                        })}
                    >
                        {ticket.content}
                    </span>
                </CardContent>
            </Card>
            <div className="flex flex-col flex-y-1">
                <>
                    {isDetail ? deleteButton : detailButton}
                    {editButton}
                </>
            </div>
        </div>
    )
}