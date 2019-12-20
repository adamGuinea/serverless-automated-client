const dev = {
  STRIPE_KEY: "pk_test_OMMnnbwMLR2If0crq5Xl25ym00aQbDPQKa",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-y7gj4lanfs8p"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://a0xwxcud6e.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ScTF6HUtl",
    APP_CLIENT_ID: "5ii2q26on0k79nj5su96v2k3iv",
    IDENTITY_POOL_ID: "us-east-2:67a66cb7-97c7-4661-9a4f-85193163a993"
  },
  social: {
    FB: "305288310414976"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_OMMnnbwMLR2If0crq5Xl25ym00aQbDPQKa",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-oap73zut2q8f"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://hd58q0nv57.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_IQRZo4yH1",
    APP_CLIENT_ID: "2k7nl2v93ho1travh05r9n9i71",
    IDENTITY_POOL_ID: "us-east-2:eebb7faf-95df-48b1-be06-4f16d9b2db26"
  },
  social: {
    FB: "305288310414976"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
