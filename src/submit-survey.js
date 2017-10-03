// Note: Might need a fetch polyfill for older browsers

const POST_ENDPOINT = "/submit-survey"

export default function(formValues) {
  return fetch(POST_ENDPOINT, {
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(formValues),
  })
}
