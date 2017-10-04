export default function() {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("geolocation not available"))
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    }
  }).then(getLocationDescription)
}

function getLocationDescription(position) {
  const {latitude, longitude} = position.coords
  return `${formatRounded(latitude)},${formatRounded(longitude)}`
}

function formatRounded(num) {
  return num.toFixed(3)
}
