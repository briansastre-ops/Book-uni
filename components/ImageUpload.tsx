"use client";

import React from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `request failed: ${response.status}: ${response.errorText}`,
      );
    }

    const data = await response.json();

    const { signature, experi, token } = data;

    return { signature, experi, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const ImageUpload = () => {
  return <div>ImageUpload</div>;
};
export default ImageUpload;
