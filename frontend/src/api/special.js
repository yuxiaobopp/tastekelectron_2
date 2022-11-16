
'use strict';

const tastekIpcApiRoute = {
    atsqlitedbOperation: 'controller.example.atsqlitedbOperation',
    initSerialPort: 'controller.example.initSerialPort',
}

//双向通信频道
const tastekSpecialIpcRoute = {
    open_serial_success: 'open_serial_success',
    close_serial_success: 'close_serial_success',
    serial_open_error: 'serial_open_error',
    serial_close_error: 'serial_close_error',
    open_serial: 'open_serial',
    close_serial: 'close_serial'
}
module.exports = {
    tastekSpecialIpcRoute: tastekSpecialIpcRoute,
    tastekIpcApiRoute: tastekIpcApiRoute
}