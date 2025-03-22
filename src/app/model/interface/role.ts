// these interfaces are not exactly like that of in other languages 
// these here define the structure of the data that is supposed to be 
// basically these are somewhat like user data types 
// they do not need compulsory implementations
// basically when we call an api using this as the datatype , the compiler expects the data to be in this format itself
// this also increases the typesafety and then it also helps us easily select any of the properties from the daa 


export interface Irole{
    roleId:number;
    role:string
}

export interface Idesignation{
    designationId:number;
    designation:string
}
// this is an interface that is defining the basic structure of the response recieved from the api 
export interface APIResponseModel{ // this is an interface for all the responses the api returns because they all have the same structure
    message:string;// these are the properties in that response 
    result:boolean;
    data:any
}
export interface employee{
    empName: string,
      empId: string,
      empCode: string,
      empEmailId:string ,
      empDesignation: string,
      role: string
}
export interface Project {
    empName: string;
    empId: string;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: string; 
    expectedEndDate: string; 
    clientName: string;
    clientProjectId: number;
}
