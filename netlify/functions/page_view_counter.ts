import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const page = urlParams.get('page');
    const view = getStore("view");

    let entry = await view.getMetadata(page);

    if (!entry) {
      await view.set(page, "view count", {
        metadata: { page_url: page, view_count: 1 },
      });
    } else {
      await view.set(page, "view count", {
        metadata: { page_url: page, view_count: entry.metadata.view_count + 1 },
      });
    }

    entry = await view.getMetadata(page);

    return Response.json({
      data: entry.metadata
    });
  }
  catch (error) {
    console.error(error);
    return Response.status(500).json({ error: "Internal Server Error" });
  }
};

