export default async function handler(req, res) {
  const response = await fetch('https://v1.hitokoto.cn')
  const data = await response.text()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200).send(data)
}
