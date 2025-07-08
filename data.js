let lastId = 999;

function getNextId() {
  lastId += 1;
  return lastId;
}

module.exports = {
  users: [],
  getNextId
};