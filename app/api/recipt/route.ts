import { NextResponse } from 'next/server';

import { prisma } from '@/app/_utils/prismaSingleton';

export const dynamic = 'force-dynamic';

export async function GET() {
  const user = await prisma.department.findMany();
  return NextResponse.json(user, { status: 200 });
}

