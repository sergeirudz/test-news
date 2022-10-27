const updateUser = async (req: any, res: any) => {
  const { username, token } = req;

  if (username === username && token === token) {
    res.status(200).json({
      message: 'Success, info updated!',
      username: username,
      token: token,
    });
  } else {
    res.status(400).json({
      message: 'Incorrect user!',
      username: username,
      token: token,
    });
  }
};

export default updateUser;
