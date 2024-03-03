"use server";

import { RenderContext } from "waku/server";

export async function createPost(this: RenderContext,formData: FormData) {
    const title = formData.get("title");
    const content = formData.get("body");
    console.log(title,content);
}