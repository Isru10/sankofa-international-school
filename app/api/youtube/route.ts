// app/api/youtube/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    if (!apiKey || !channelId) {
      return NextResponse.json({ error: "YouTube API credentials are not configured." }, { status: 500 });
    }

    // PRO-TRICK: Replace the 'UC' in the Channel ID with 'UU' to get the Uploads Playlist ID.
    // This reduces the API quota cost from 100 units to 1 unit per request.
    const uploadsPlaylistId = channelId.replace(/^UC/, 'UU');

    // Fetch the 10 most recent videos from the uploads playlist
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${apiKey}`,
      { next: { revalidate: 3600 } } // Cache the response for 1 hour to save API calls
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from YouTube API");
    }

    const data = await response.json();

    // Map the raw Google data into a clean, predictable array for your frontend
    const videos = data.items
      .filter((item: any) => item.snippet.title !== "Private video" && item.snippet.title !== "Deleted video")
      .map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        desc: item.snippet.description,
        date: new Date(item.snippet.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        }),
      }));

    return NextResponse.json({ videos });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}