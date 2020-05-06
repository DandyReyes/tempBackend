exports.select = async (request, response, next) => {
  try {
    const allUsers = {
      first: 'dandy',
      last: 'reyes',
    };
    response.send(allUsers);
  } catch (err) {
    next(err);
  }
};
