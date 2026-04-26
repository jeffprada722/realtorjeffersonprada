/**
 * GET /api/listings/[id]
 * Fetch a single MLS listing by ListingKey via Bridge Interactive.
 */

import { NextResponse } from "next/server";
import {
  fetchListingById,
  isBridgeConfigured,
  BridgeApiError,
} from "@/lib/bridge";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!isBridgeConfigured()) {
    return NextResponse.json(
      {
        error: "Bridge Interactive integration is not yet active.",
        listing: null,
      },
      {
        status: 503,
        headers: { "X-Robots-Tag": "noindex" },
      }
    );
  }

  try {
    const listing = await fetchListingById(id);
    if (!listing) {
      return NextResponse.json(
        { error: "Listing not found", listing: null },
        { status: 404, headers: { "X-Robots-Tag": "noindex" } }
      );
    }
    return NextResponse.json(
      { listing },
      {
        headers: {
          "X-Robots-Tag": "noindex",
          "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (err) {
    const status = err instanceof BridgeApiError ? err.status : 500;
    const message =
      err instanceof Error ? err.message : "Unknown error fetching listing";
    return NextResponse.json(
      { error: message, listing: null },
      { status, headers: { "X-Robots-Tag": "noindex" } }
    );
  }
}
