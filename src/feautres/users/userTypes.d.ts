declare interface userType {
    _id: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    imageURL?: string;
    // updatedAt: string;
}
declare interface usersType {
    data: userType[];
}
