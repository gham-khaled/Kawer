const aws_exports = {
  API: {
    endpoints: [
      {
        name: 'Kawer-API',
        endpoint:'https://ua84sa3gl7.execute-api.us-east-1.amazonaws.com/prod',
      },
    ],
  },
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_6uHZFMcnE',
    identityPoolId: 'us-east-1:5a0fae7d-0072-416d-8b8e-85f2f6b16155',
    userPoolWebClientId: '3t3b90h4fbl75n4f7vrvklv8mk'
  }
}

export default aws_exports

