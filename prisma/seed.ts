import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialTickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket.",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket.",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket.",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "Ticket 4",
    content: "This is the fourth ticket.",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 5",
    content: "This is the fifth ticket.",
    status: "DONE" as const,
  },
  {
    title: "Ticket 6",
    content: "This is the sixth ticket.",
    status: "OPEN" as const,
  }
];

const seed = async () => {
    const t0 = performance.now();
    console.log("Seeding database...");
    await prisma.ticket.deleteMany();

    await prisma.ticket.createMany({
        data: initialTickets,
        skipDuplicates: true,
    });

    const t1 = performance.now();
    console.log(`Database has been seeded. 🌱 ${t1 - t0}ms`);
};

seed();
