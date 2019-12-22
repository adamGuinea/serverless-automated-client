const dev = {
  STRIPE_KEY: "pk_test_OMMnnbwMLR2If0crq5Xl25ym00aQbDPQKa",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ds9aurxnmykb"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://vbw4pe23mg.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_J3SFW0lWB",
    APP_CLIENT_ID: "2iu48gvt0nqf5avv1l6g48uqc6",
    IDENTITY_POOL_ID: "us-east-2:9001875b-b489-4f36-bfb6-0a858b1ed18c"
  },
  social: {
    FB: "305288310414976"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_OMMnnbwMLR2If0crq5Xl25ym00aQbDPQKa",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-172fdyva0cbnv"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://49fpjnomqk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_niGMT98QJ",
    APP_CLIENT_ID: "1sced5991piqi5r2tbvi7mlt4i",
    IDENTITY_POOL_ID: "us-east-2:3b138062-9088-4347-ada4-640812e15e54"
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
