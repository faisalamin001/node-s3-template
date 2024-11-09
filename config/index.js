const convict = require("convict")
convict.addFormat(require("convict-format-with-validator").ipaddress)

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 8080,
    env: "PORT",
    arg: "port",
  },
  db: {
    uri: {
      doc: "Database host uri",
      format: String,
      default: "127.0.0.1",
      env: "DATABASE_HOST",
    },
    name: {
      doc: "Database host name",
      format: String,
      default: "",
      env: "DATABASE_NAME",
    },
  },
  signIn: {
    jwtSecret: {
      doc: "JWT Secret",
      format: String,
      default: "",
      env: "JWT_SECRET",
    },
    jwtExpiresIn: {
      doc: "JWT Expire",
      format: String,
      default: "30d",
      env: "JWT_EXPIRE",
    },
  },
  aws: {
    region: {
      doc: "Region of aws",
      format: String,
      default: "",
      env: "AWS_REGION",
    },
    accessKey: {
      doc: "Access key of aws",
      format: String,
      default: "",
      env: "AWS_ACCESS_KEY_ID",
    },
    secretAccessKey: {
      doc: "Secret access key of aws",
      format: String,
      default: "",
      env: "AWS_SECRET_ACCESS_KEY",
    },
    contentBucketUrl: {
      doc: "Bucket url",
      format: String,
      default: "",
      env: "CONTENT_ENDPOINT",
    },
    contentSignKeyId: {
      doc: "Bucket content key",
      format: String,
      default: "",
      env: "CONTENT_SIGN_PUBLIC_KEY",
    },
    contentBucket: {
      doc: "Bucket name",
      format: String,
      default: "",
      env: "CONTENT_BUCKET_NAME",
    },
    contentSignKey: {
      doc: "content sign key",
      format: String,
      default: "",
      env: "CONTENT_SIGN_PRIVATE_KEY",
    },
    avatarQueueUrl: {
      doc: "URL of the Avatar SQS queue",
      format: String,
      default: "",
      env: "QUEUE_AVATAR_GENERATOR",
    },
    videoQueueUrl: {
      doc: "URL of the Video SQS queue",
      format: String,
      default: "",
      env: "QUEUE_VIDEO_PROCESSOR",
    },
    videoCreationUrl: {
      doc: "URL of the Video Creation SQS queue",
      format: String,
      default: "",
      env: "QUEUE_VIDEO_CREATION",
    },
    templateProcessorUrl: {
      doc: "URL of the template Processor SQS queue",
      format: String,
      default: "",
      env: "QUEUE_TEMPLATE_PROCESSOR",
    },
    templateContactProcessorUrl: {
      doc: "URL of the template Processor SQS queue",
      format: String,
      default: "",
      env: "QUEUE_TEMPLATE_CONTACT_PROCESSOR",
    },
    videoScriptProcessor: {
      doc: "URL of the Video script generator Processor SQS queue",
      format: String,
      default: "",
      env: "QUEUE_VIDEO_SCRIPT_PROCESSOR",
    },
    slackEventBridgeRoleArn: {
      doc: "EventBridge Scheduler for Slack Notification",
      format: String,
      default: "",
      env: "SLACK_EVENT_BRIDGE",
    },
    slackLambdaTargetFunctionArn: {
      doc: "Lambda Function Call by EventBridge Scheduler to send Slack notification",
      format: String,
      default: "",
      env: "SLACK_LAMBDA_FUNCTION",
    },
    videoEditingProcessorUrl: {
      doc: "URL of the Video Editing Processor SQS queue",
      format: String,
      default: "",
      env: "QUEUE_VIDEO_EDITING_PROCESSOR",
    },
  },
  endpoint: {
    doc: "Current endpoint host",
    format: String,
    default: "",
    env: "CURRENT_ENDPOINT_HOST",
  },
})

const env = config.get("env")
if (env === "development" || env === "test") {
  config.loadFile(__dirname + "/environments/" + env + ".json")
}

config.validate({ allowed: "strict" })
module.exports = config
