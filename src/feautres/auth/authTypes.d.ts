declare interface RegisterTypes {
    [x: string]: any;
    updatedAt: any;
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: string;
    password: string;
    confirmPassword: string;
    avatar: string;
    status?: string;
    createdAt?: string;
    confirmationToken?: string;
    confirmationTokenExpires?: string;
    imageURL?: string;
}
declare interface userTypes {
    token?: string;
    user?: RegisterTypes;
}
declare interface ResTypes {
    data: data;
}
