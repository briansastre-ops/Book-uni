import ImageKit from "imagekit";
import config from "@/lib/config";

const imageKit = new ImageKit({
  publicKey: config.env.imagekit.publicKey,
  privateKey: config.env.imagekit.privateKey,
  urlEndpoint: config.env.imagekit.urlEndpoint,
});
