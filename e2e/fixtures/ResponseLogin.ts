export const PlatformisEmpty = {
    "statusCode": 400,
    "error": "Bad Request",
    "message": [
        "platform must be one of the following values: AdminPanel, PoS"
    ]
}
export const PlatformisInvalid = {
    "statusCode": 400,
    "error": "Bad Request",
    "message": [
        "platform must be one of the following values: AdminPanel, PoS"
    ]
}
export const UsernameisEmpty = {
    "message": [
        "username must be longer than or equal to 3 characters",
        "username must contain only letters and numbers"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
export const UsernameisInvalid ={
    "statusCode": 403,
    "message": "Wrong email or password."
}
export const UsernameisLowcase = {
    "message": [
        "username must be a lowercase string"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
export const PasswordisEmpty = {
    "message": [
        "password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression",
        "password must be longer than or equal to 8 characters"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
export const Passwordisinvalid ={
    "message": [
        "password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression",
        "password must be longer than or equal to 8 characters"
    ],
    "error": "Bad Request",
    "statusCode": 400
}