const errorHandler = (err, req, res, next) => {
    // Log more information
    console.error(`Error occurred on ${req.method} ${req.url}`);
    console.error(err);

    let message = 'Server Error';
    let status = 500;

    switch (err.name) {
        case 'NotFound':
            status = 404;
            message = 'Error Not Found';
            break;
        case 'Unauthenticated':
        case 'Unauthorized':
        case 'InvalidCred':
            status = 401;
            message = 'Error ' + err.name;
            break;
        case 'UniqueName':
            status = 400;
            message = 'Username already exist';
            break;
        default:
            // In development, send full error message
            if (process.env.NODE_ENV === 'development') {
                message = err.message;
            }
    }

    res.status(status).json({message});
}

module.exports = errorHandler;
