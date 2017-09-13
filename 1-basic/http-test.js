var http = require('http');

http.createServer(function( request, response ) {
    /* 
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    
    /*
        Response Body 를 "Hello World" 로 설정
    */
    response.end("Hello World\n");

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');

// console.log(http);
// { IncomingMessage:
//     { [Function: IncomingMessage]
//       super_:
//        { [Function: Readable]
//          ReadableState: [Function: ReadableState],
//          super_: [Object],
//          _fromList: [Function: fromList] } },
//    OutgoingMessage:
//     { [Function: OutgoingMessage]
//       super_:
//        { [Function: Stream]
//          super_: [Object],
//          Readable: [Object],
//          Writable: [Object],
//          Duplex: [Object],
//          Transform: [Object],
//          PassThrough: [Object],
//          Stream: [Circular] } },
//    METHODS:
//     [ 'ACL',
//       'BIND',
//       'CHECKOUT',
//       'CONNECT',
//       'COPY',
//       'DELETE',
//       'GET',
//       'HEAD',
//       'LINK',
//       'LOCK',
//       'M-SEARCH',
//       'MERGE',
//       'MKACTIVITY',
//       'MKCALENDAR',
//       'MKCOL',
//       'MOVE',
//       'NOTIFY',
//       'OPTIONS',
//       'PATCH',
//       'POST',
//       'PROPFIND',
//       'PROPPATCH',
//       'PURGE',
//       'PUT',
//       'REBIND',
//       'REPORT',
//       'SEARCH',
//       'SUBSCRIBE',
//       'TRACE',
//       'UNBIND',
//       'UNLINK',
//       'UNLOCK',
//       'UNSUBSCRIBE' ],
//    Agent:
//     { [Function: Agent]
//       super_:
//        { [Function: EventEmitter]
//          EventEmitter: [Circular],
//          usingDomains: false,
//          defaultMaxListeners: [Getter/Setter],
//          init: [Function],
//          listenerCount: [Function] },
//       defaultMaxSockets: Infinity },
//    globalAgent:
//     Agent {
//       domain: null,
//       _events: { free: [Function] },
//       _eventsCount: 1,
//       _maxListeners: undefined,
//       defaultPort: 80,
//       protocol: 'http:',
//       options: { path: null },
//       requests: {},
//       sockets: {},
//       freeSockets: {},
//       keepAliveMsecs: 1000,
//       keepAlive: false,
//       maxSockets: Infinity,
//       maxFreeSockets: 256 },
//    ServerResponse: { [Function: ServerResponse] super_: { [Function: OutgoingMessage] super_: [Object] } },
//    STATUS_CODES:
//     { '100': 'Continue',
//       '101': 'Switching Protocols',
//       '102': 'Processing',
//       '200': 'OK',
//       '201': 'Created',
//       '202': 'Accepted',
//       '203': 'Non-Authoritative Information',
//       '204': 'No Content',
//       '205': 'Reset Content',
//       '206': 'Partial Content',
//       '207': 'Multi-Status',
//       '208': 'Already Reported',
//       '226': 'IM Used',
//       '300': 'Multiple Choices',
//       '301': 'Moved Permanently',
//       '302': 'Found',
//       '303': 'See Other',
//       '304': 'Not Modified',
//       '305': 'Use Proxy',
//       '307': 'Temporary Redirect',
//       '308': 'Permanent Redirect',
//       '400': 'Bad Request',
//       '401': 'Unauthorized',
//       '402': 'Payment Required',
//       '403': 'Forbidden',
//       '404': 'Not Found',
//       '405': 'Method Not Allowed',
//       '406': 'Not Acceptable',
//       '407': 'Proxy Authentication Required',
//       '408': 'Request Timeout',
//       '409': 'Conflict',
//       '410': 'Gone',
//       '411': 'Length Required',
//       '412': 'Precondition Failed',
//       '413': 'Payload Too Large',
//       '414': 'URI Too Long',
//       '415': 'Unsupported Media Type',
//       '416': 'Range Not Satisfiable',
//       '417': 'Expectation Failed',
//       '418': 'I\'m a teapot',
//       '421': 'Misdirected Request',
//       '422': 'Unprocessable Entity',
//       '423': 'Locked',
//       '424': 'Failed Dependency',
//       '425': 'Unordered Collection',
//       '426': 'Upgrade Required',
//       '428': 'Precondition Required',
//       '429': 'Too Many Requests',
//       '431': 'Request Header Fields Too Large',
//       '451': 'Unavailable For Legal Reasons',
//       '500': 'Internal Server Error',
//       '501': 'Not Implemented',
//       '502': 'Bad Gateway',
//       '503': 'Service Unavailable',
//       '504': 'Gateway Timeout',
//       '505': 'HTTP Version Not Supported',
//       '506': 'Variant Also Negotiates',
//       '507': 'Insufficient Storage',
//       '508': 'Loop Detected',
//       '509': 'Bandwidth Limit Exceeded',
//       '510': 'Not Extended',
//       '511': 'Network Authentication Required' },
//    _connectionListener: [Function: connectionListener],
//    Server: { [Function: Server] super_: { [Function: Server] super_: [Object] } },
//    createServer: [Function: createServer],
//    ClientRequest: { [Function: ClientRequest] super_: { [Function: OutgoingMessage] super_: [Object] } },
//    request: [Function: request],
//    get: [Function: get] }

