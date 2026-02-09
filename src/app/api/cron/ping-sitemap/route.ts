import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site";

const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

export const dynamic = "force-dynamic";
export const maxDuration = 10;

export async function GET() {
  const results: { google?: boolean; bing?: boolean } = {};

  try {
    await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    results.google = true;
  } catch {
    results.google = false;
  }

  try {
    await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    results.bing = true;
  } catch {
    results.bing = false;
  }

  return NextResponse.json({ ok: true, pinged: results });
}
