const { returnSameStringRequest } = require("./questions_pb")
const { QuestionServiceClient } = require("./questions_grpc_web_pb")
var client = new QuestionServiceClient('http://localhost:50553');

var request = new returnSameStringRequest()

client.returnSameString(request, {}, (err, response) => {
    console.log("Result : ", response.getResult())
});

//client.r(request, {}, (err, response) => {
//    console.log("Result of Add : ",response.getResult())
//})