// Note: Might need a fetch polyfill for older browsers

const POST_ENDPOINT = "/submit-survey"

// For testing in dev or hosting on github pages (where the POST will fail)
const FORCE_SUCCESS = true

export default function(formValues) {
  return fetch(POST_ENDPOINT, {
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(formValues),
  })
    .then((response) => {
      if (!FORCE_SUCCESS && !response.ok) {
        throw new Error("Failed")
      }
    })
}
