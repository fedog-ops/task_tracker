import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../../components/ui/card"
import { ticketPath } from "../../../paths"
import { Ticket } from "../types"
import { TICKET_ICONS } from "../constants"
import { LucideSquareArrowOutUpRight } from "lucide-react"
import { Button } from "../../../components/ui/button"

type ticketProps = {
    ticket: Ticket
}

export const TicketItem = ({ ticket }: ticketProps) => {
    const detailBtn = (
    <Button variant={"outline"} size="icon" asChild>
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight />
            </Link>
        </Button>
    );

    return (
        <div className="w-full max-w-[420px] flex gap-x-1">
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
                    <span className="line-clamp-3 whitespace-break-spaces">
                        {ticket.content}
                    </span>
                </CardContent>
            </Card>
            
            <div className="flex flex-col flex-y-1">{detailBtn}</div>
        </div>
    )
}