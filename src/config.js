const dev = {
  STRIPE_KEY: "pk_test_OMMnnbwMLR2If0crq5Xl25ym00aQbDPQKa",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-y7gj4lanfs8p"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://a0xwxcud6e.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_vDNs1Haq9",
    APP_CLIENT_ID: "9qnf4vb4ipumhl2hvlul57iip",
    IDENTITY_POOL_ID: "us-east-1:58c2a492-eb21-4154-8c50-54cf4580282f"
  },
  social: {
    FB: "305288310414976"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_OMMnnbwMLR2If0crq5Xl25ym00aQbDPQKa",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-tautl0m40kbx"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tnj6s3enn4.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_5WfwuPg3L",
    APP_CLIENT_ID: "4f0g15nigsvvfilgt1i5oatb8t",
    IDENTITY_POOL_ID: "us-east-1:a40960a9-3506-4792-99da-9b252951b2f6"
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
