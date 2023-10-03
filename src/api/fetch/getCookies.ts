const getXSRFCookies = async (): Promise<string> => {
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");

    return cookies().get("XSRF-TOKEN")?.value ?? "";
  }

  if (!document.cookie) return "";

  const cookies = document.cookie
    .split(";")
    .map((c) => c.trim())
    .filter((c) => c.split("=", 1)[0].toLowerCase())
    .map((c) => ({
      name: c.split("=")[0],
      value: decodeURIComponent(c.split("=")[1]),
    }));

  return cookies.find((c) => c.name === "XSRF-TOKEN")?.value ?? "";
};

export const getCookies = async () => {
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    let cookieString = "";

    cookies()
      .getAll()
      .forEach(
        (cookie) => (cookieString += cookie.name + "=" + cookie.value + ";"),
      );

    return cookieString;
  }

  return document.cookie;
};

export default getXSRFCookies;
