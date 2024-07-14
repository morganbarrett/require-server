if (!globalThis.isServer) {
  throw new Error("This file should only be imported on the server");
}
