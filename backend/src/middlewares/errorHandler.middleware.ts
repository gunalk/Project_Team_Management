import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorHandler= (
    error:any, 
    req: any, 
    res: any, 
    next: any
) => {
   console.log(`Error Occured on PATH:${req.path}`,error)
  if(error instanceof SyntaxError){
    return res.status(HTTPSTATUS.BAD_REQUEST).json({
        message:  "Invalid JSON payload",
       
    })
  }
    res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
        message:  "Internal Server Error",
        error:  error.message || "unknown error occurred", 
    });

    return; 
};
