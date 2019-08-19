module.exports = function (arr, fct) {
  var dfd = Promise.resolve();
  var res = arr.map(function(item,idx) {
    dfd = dfd.then(function() {
      return fct(item,idx)
    });
    return dfd
  });
  return Promise.all(res)
}
