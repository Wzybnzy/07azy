const message = (that, res) => {
  return that.$message({
    message: res.data.msg,
    offset: 50,
    duration: 1500
  });
}

export default message