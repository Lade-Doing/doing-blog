const path = require('path')

module.exports = {
  swaggerConfig: {
    basePath: '/',
    swagger: '2.0.0',
    title: 'swagger-express-jsdoc',
    version: '1.0.0',
    apis: [
      path.join(__dirname, '../routes/*.js')
    ],
    swaggerOptions: {
      validatorUrl: null  // 禁用“Validate”按钮
    },
    routerPath: '/api-docs',
    schemes: ['http', 'https'],
    tags: [
      {
        name: 'user',
        description: "check user handler"
      },
      {
        name: 'articles',
        description: "check user handler"
      },
      {
        name: 'comments',
        description: "check user handler"
      },
      {
        name: 'sorts',
        description: "check user handler"
      },
    ]
  }
}