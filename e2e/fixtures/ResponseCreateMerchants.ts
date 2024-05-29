export const UsernameisEmpty = {
    "message": [
        'user.username must be longer than or equal to 3 characters',
        'user.username must contain only letters and numbers'
      ],
      "error": 'Bad Request',
      "statusCode": 400
}
export const UsernameisAlready = {
    "message": "Username already exists",
    "error": "Conflict",
    "statusCode": 409
}
export const PasswordisEmpty = {
    "message": [
        "user.password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression",
        "user.password must be longer than or equal to 8 characters"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
export const PasswordisInvalid = {
    "message": [
        "user.password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
export const PassowrdisnotComplete = {
    "message": [
        "user.password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression",
        "user.password must be longer than or equal to 8 characters"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
export const EmailisEmpty = {
    "message": [
        "owner.email_address must be an email"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
export const EmailisAlready = {
    "message": "Email already exists",
    "error": "Conflict",
    "statusCode": 409
}