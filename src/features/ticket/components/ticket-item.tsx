import Link from "next/link"
import clsx from "clsx"
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card"
import { ticketPath } from "../../../paths"
import { Ticket } from "../types"
import { TICKET_ICONS } from "../constants"
import { LucideSquareArrowOutUpRight } from "lucide-react"
import { Button } from "../../../components/ui/button"

type ticketProps = {
    ticket: Ticket
    isDetail?: boolean
}

export const TicketItem = ({ ticket, isDetail }: ticketProps) => {
    const detailBtn = (
        <Button variant={"outline"} size="icon" asChild>
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight />
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

            {!isDetail && <div className="flex flex-col flex-y-1">{detailBtn}</div>}
        </div>
    )
}