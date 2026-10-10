// donnee envoie lors de l'inscription
export interface RegisterData {
    name:string,
    first_name:string,
    telephone:number,
    email:string,
    password:string,
}

// donnee envoie lors de connexion
export interface LoginData {
    email:string,
    password:string,
}

// donnee envoie pour la verification otp
export interface OtpData {
    email:string,
    code:string,
}
// Un utilisateur renvoyé par l'API
export interface User {
    id:string,
    name:string,
    first_name:string,
    telephone:number,
    email:string,
    isVerfied:boolean
}
// Réponse générique de l'API : T change selon la requête
export interface ApiResponse<T>{
    sucess:boolean,
    message:string,
    data?:T
}
