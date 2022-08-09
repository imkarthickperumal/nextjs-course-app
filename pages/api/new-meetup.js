// /api/new-meetup
// POST /api/new-meetup
function handler(req, res) {
  if (req.metthod === "POST") {
    const data = req.body;
    const { title, img, address, description } = data;
  }
}
