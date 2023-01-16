import sample from "../../static/data.json";

export default function handler(req, res) {
  const { id } = req.query;
  const index = parseInt(id);
  if (typeof index == undefined) {
    console.log("undefined");
    return res.status(200).json(sample.profiles.slice(0, 10));
  } else {
    console.log(sample.profiles.slice(index * 10, index * 10 + 10));
    return res
      .status(200)
      .json(sample.profiles.slice(index * 10, index * 10 + 10));
  }
}
