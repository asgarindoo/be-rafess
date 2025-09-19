import { getAuthUrl, getAccessToken } from "../services/xService.js";

export const loginWithX = (req, res) => {
  const url = getAuthUrl();
  res.redirect(url);
};

export const callbackFromX = async (req, res) => {
  const { code } = req.query;

  try {
    const token = await getAccessToken(code);
    // TODO: simpan token ke DB / cookie
    res.json(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
