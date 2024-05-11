import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const page = urlParams.get('page');
    const view = getStore("view");

    let entry = await view.get(page);

    if (!entry) {
      await view.set(page, 1);
    } else {
      await view.set(page, parseInt(entry) + 1);
    }

    entry = await view.get(page);

    return Response.json({
      page_url: page,
      view_count: entry
    });
  }
  catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" });
  }
};

