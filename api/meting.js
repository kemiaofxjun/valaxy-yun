export default async function handler(req, res) {
  const { url } = req.query
  if (!url) {
    return res.status(400).send('Missing URL')
  }

  try {
    const response = await fetch(url)
    const data = await response.text()

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send('Fetch failed')
  }
}
