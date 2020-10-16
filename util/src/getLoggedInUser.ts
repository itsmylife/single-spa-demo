// Inside of your api utility module, you can lazily fetch data either when another microfrontend calls your exported
// functions, or eagerly fetch it when the route changes.
export const loggedInUserPromise = (user: string) => {
  console.log("I am coming from util.... " + user);
};
