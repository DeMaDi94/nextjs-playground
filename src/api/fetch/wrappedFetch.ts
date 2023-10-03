import getXSRFCookies, { getCookies } from "./getCookies";

const wrappedFetch = async (url: string, init?: RequestInit) => {
  if (init !== undefined && typeof window !== "undefined") {
    await wrappedFetch(process.env.API_URL + "/sanctum/csrf-cookie");
  }

  const defaultInit = {
    method: "get",
    credentials: "include",
    mode: "cors",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-XSRF-TOKEN": await getXSRFCookies(),
      referer: await getReferer(),
      cookie: await getCookies(),
    },
  } as RequestInit;

  return await fetch(url, { ...defaultInit, ...init });
};

const getReferer = async () => {
  if (typeof window === "undefined") {
    const { headers } = await import("next/headers");

    return headers().get("referer") ?? process.env.CLIENT_URL;
  } else {
    return window.location.host;
  }
};

export default wrappedFetch;
