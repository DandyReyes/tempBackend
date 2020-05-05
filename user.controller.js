exports.select = async (request, response, next) => {
  try {
    const allUsers = {
      first: 'dandy',
      last: 'reyes',
    };
    return response.send(allUsers);
  } catch (err) {
    next(err);
  }
};
