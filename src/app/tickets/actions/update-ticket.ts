'use server';

import { revalidatePath } from "next/cache";
import { prisma } from "../../../lib/prisma";
import { ticketsPath } from "../../../paths";
import { redirect } from "next/navigation";

const updateTicket = async (id: string, form: FormData) => {

const title = form.get("title");
const content = form.get("content");
    await prisma.ticket.update({
        where: { id },
        data: {
            title: title as string,
            content: content as string,
        }
    });

    revalidatePath(ticketsPath())
    redirect(ticketsPath());
}

export default updateTicket;