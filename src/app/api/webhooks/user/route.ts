import type { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import type { WebhookRequiredHeaders } from "svix";
import { PrismaClient } from "@prisma/client";

const webhookSecret = process.env.WEBHOOK_SECRET ?? "";
const prisma = new PrismaClient();

async function handler(request: Request) {
  const payload = (await request.json()) as Record<string, unknown>;
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders,
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, ...attributes } = evt.data;
    await prisma.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        first_name: attributes.first_name as string,
        last_name: attributes.last_name as string,
        image_url: attributes.image_url as string,
        email_addresses: JSON.stringify(attributes.email_addresses),
        username: attributes.username as string,
        created_at: new Date(attributes.created_at as string),
        updated_at: new Date(attributes.updated_at as string),
      },
      update: {
        first_name: attributes.first_name as string,
        last_name: attributes.last_name as string,
        image_url: attributes.image_url as string,
        email_addresses: JSON.stringify(attributes.email_addresses),
        username: attributes.username as string,
        created_at: new Date(attributes.created_at as string),
        updated_at: new Date(attributes.updated_at as string),
      },
    });
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;
    await prisma.user.delete({
      where: { externalId: id as string },
    });
  }

  return NextResponse.json({}, { status: 200 });
}

type EventType = "user.created" | "user.updated" | "user.deleted";

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
