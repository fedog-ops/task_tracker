'use server';

import { redirect } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import { ticketsPath } from "../../../paths";
import { revalidatePath } from "next/cache";

const deleteTicket = async (id: string) => {
    await prisma.ticket.delete({
        where: { id }
    });

    revalidatePath(ticketsPath());
    redirect(ticketsPath());
}

export default deleteTicket;
