export const swDev = () => {
  let swDev = `${process.env.PUBLIC_URL}/sw.ts`;
  navigator.serviceWorker.register(swDev).then((result) => {
    console.log("result", result);
  });
};
