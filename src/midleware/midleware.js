import {writer} from "../error/loger.js";
export const  errorMiddleware = ((err, req, res, next) => {
      const statusCode = err.statusCode || 500;
      const message = err.message || 'Serverda nomaʼlum xatolik';
      
      if (statusCode >= 500){
            writer.error(message);
      }
      res.status(statusCode).json({
          statusCode,
          success: false,
          message: statusCode < 500 ? message : 'Serverda nomaʼlum xatolik',
      })
});
