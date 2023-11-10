import siteConfig from "@generated/docusaurus.config";

const FEEDBACK_API_URL = siteConfig.customFields.FEEDBACK_API_URL;

export const serverRequest = (method, data=undefined, retries=3) => {
  if (!FEEDBACK_API_URL) {
    console.log("FEEDBACK_API_URL not defined");
    return {ok: false};
  }
  // const resp = await fetch(`http://${FEEDBACK_API_URL}/api/v1/${method}`, {
  return fetch(`https://5993-212-115-157-45.ngrok-free.app/api/v1/${method}`, {
    method: !data ? "GET" : "POST",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...data, service: "warehouse"})
  })
  .then(resp => resp.json())
  .catch(err => {
    console.log(err);
    if (retries > 0) {
      return serverRequest(method, data, retries - 1)
    }
    return {ok: false};
  });
};
