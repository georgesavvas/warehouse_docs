import siteConfig from "@generated/docusaurus.config";

const FEEDBACK_API_URL = siteConfig.customFields.FEEDBACK_API_URL;

export async function serverRequest(method, data=undefined) {
  const resp = await fetch(`http://${FEEDBACK_API_URL}/api/v1/${method}`, {
    method: !data ? "GET" : "POST",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...data, service: "warehouse"})
  });
  return await resp.json();
}