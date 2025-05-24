import Joi from "joi";


export class UsersSchema {
    static register = Joi.object({
        surname: Joi.string().min(2).max(30).required(),
        lastname: Joi.string().min(2).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        r_password: Joi.any().valid(Joi.ref('password')).required().messages({
            'any.only': 'Parollar mos kelishi kerak',
        }),
        birthDate: Joi.date().required(),
        role: Joi.string().valid("SuperAdmin", "Admin", "User"),
    })

    static login = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}