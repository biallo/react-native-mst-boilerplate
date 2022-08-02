// 用法：wait(1000).then(() => console.log(1));
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export {
  wait
};
