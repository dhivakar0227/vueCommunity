/**
 * @fileoverview gRPC-Web generated client stub for questionnaire
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.questionnaire = require('./Questions_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.questionnaire.QuestionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.questionnaire.QuestionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.questionnaire.getQuestionsRequest,
 *   !proto.questionnaire.getQuestionsResponse>}
 */
const methodDescriptor_QuestionService_getQuestions = new grpc.web.MethodDescriptor(
  '/questionnaire.QuestionService/getQuestions',
  grpc.web.MethodType.UNARY,
  proto.questionnaire.getQuestionsRequest,
  proto.questionnaire.getQuestionsResponse,
  /**
   * @param {!proto.questionnaire.getQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.getQuestionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.questionnaire.getQuestionsRequest,
 *   !proto.questionnaire.getQuestionsResponse>}
 */
const methodInfo_QuestionService_getQuestions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.questionnaire.getQuestionsResponse,
  /**
   * @param {!proto.questionnaire.getQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.getQuestionsResponse.deserializeBinary
);


/**
 * @param {!proto.questionnaire.getQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.questionnaire.getQuestionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.questionnaire.getQuestionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.questionnaire.QuestionServiceClient.prototype.getQuestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/questionnaire.QuestionService/getQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_getQuestions,
      callback);
};


/**
 * @param {!proto.questionnaire.getQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.questionnaire.getQuestionsResponse>}
 *     Promise that resolves to the response
 */
proto.questionnaire.QuestionServicePromiseClient.prototype.getQuestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/questionnaire.QuestionService/getQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_getQuestions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.questionnaire.createQuestionsRequest,
 *   !proto.questionnaire.createQuestionsResponse>}
 */
const methodDescriptor_QuestionService_createQuestions = new grpc.web.MethodDescriptor(
  '/questionnaire.QuestionService/createQuestions',
  grpc.web.MethodType.UNARY,
  proto.questionnaire.createQuestionsRequest,
  proto.questionnaire.createQuestionsResponse,
  /**
   * @param {!proto.questionnaire.createQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.createQuestionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.questionnaire.createQuestionsRequest,
 *   !proto.questionnaire.createQuestionsResponse>}
 */
const methodInfo_QuestionService_createQuestions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.questionnaire.createQuestionsResponse,
  /**
   * @param {!proto.questionnaire.createQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.createQuestionsResponse.deserializeBinary
);


/**
 * @param {!proto.questionnaire.createQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.questionnaire.createQuestionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.questionnaire.createQuestionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.questionnaire.QuestionServiceClient.prototype.createQuestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/questionnaire.QuestionService/createQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_createQuestions,
      callback);
};


/**
 * @param {!proto.questionnaire.createQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.questionnaire.createQuestionsResponse>}
 *     Promise that resolves to the response
 */
proto.questionnaire.QuestionServicePromiseClient.prototype.createQuestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/questionnaire.QuestionService/createQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_createQuestions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.questionnaire.updateQuestionsRequest,
 *   !proto.questionnaire.updateQuestionsResponse>}
 */
const methodDescriptor_QuestionService_updateQuestions = new grpc.web.MethodDescriptor(
  '/questionnaire.QuestionService/updateQuestions',
  grpc.web.MethodType.UNARY,
  proto.questionnaire.updateQuestionsRequest,
  proto.questionnaire.updateQuestionsResponse,
  /**
   * @param {!proto.questionnaire.updateQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.updateQuestionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.questionnaire.updateQuestionsRequest,
 *   !proto.questionnaire.updateQuestionsResponse>}
 */
const methodInfo_QuestionService_updateQuestions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.questionnaire.updateQuestionsResponse,
  /**
   * @param {!proto.questionnaire.updateQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.updateQuestionsResponse.deserializeBinary
);


/**
 * @param {!proto.questionnaire.updateQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.questionnaire.updateQuestionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.questionnaire.updateQuestionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.questionnaire.QuestionServiceClient.prototype.updateQuestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/questionnaire.QuestionService/updateQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_updateQuestions,
      callback);
};


/**
 * @param {!proto.questionnaire.updateQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.questionnaire.updateQuestionsResponse>}
 *     Promise that resolves to the response
 */
proto.questionnaire.QuestionServicePromiseClient.prototype.updateQuestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/questionnaire.QuestionService/updateQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_updateQuestions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.questionnaire.returnSameStringRequest,
 *   !proto.questionnaire.returnSameStringResponse>}
 */
const methodDescriptor_QuestionService_returnSameString = new grpc.web.MethodDescriptor(
  '/questionnaire.QuestionService/returnSameString',
  grpc.web.MethodType.UNARY,
  proto.questionnaire.returnSameStringRequest,
  proto.questionnaire.returnSameStringResponse,
  /**
   * @param {!proto.questionnaire.returnSameStringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.returnSameStringResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.questionnaire.returnSameStringRequest,
 *   !proto.questionnaire.returnSameStringResponse>}
 */
const methodInfo_QuestionService_returnSameString = new grpc.web.AbstractClientBase.MethodInfo(
  proto.questionnaire.returnSameStringResponse,
  /**
   * @param {!proto.questionnaire.returnSameStringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.questionnaire.returnSameStringResponse.deserializeBinary
);


/**
 * @param {!proto.questionnaire.returnSameStringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.questionnaire.returnSameStringResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.questionnaire.returnSameStringResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.questionnaire.QuestionServiceClient.prototype.returnSameString =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/questionnaire.QuestionService/returnSameString',
      request,
      metadata || {},
      methodDescriptor_QuestionService_returnSameString,
      callback);
};


/**
 * @param {!proto.questionnaire.returnSameStringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.questionnaire.returnSameStringResponse>}
 *     Promise that resolves to the response
 */
proto.questionnaire.QuestionServicePromiseClient.prototype.returnSameString =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/questionnaire.QuestionService/returnSameString',
      request,
      metadata || {},
      methodDescriptor_QuestionService_returnSameString);
};


module.exports = proto.questionnaire;

