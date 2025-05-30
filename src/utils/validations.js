import Joi from "joi";

export class UsersSchema {
    static register = Joi.object({
        username: Joi.string().min(2).max(30).required(),
        password: Joi.string().min(8).max(16).required(),
        r_password: Joi.any().valid(Joi.ref('password')).required().messages({
            'any.only': 'Parollar mos kelishi kerak',
        }),
        birth_date: Joi.string().required(),
        gender: Joi.string().valid('Male', "Female"),
        branch_id: Joi.string().required()
    })

    static login = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
}
export class BranchSchema {
    static create = Joi.object({
        name: Joi.string().required(),
        address_id: Joi.string().required(),
    })
    static update = Joi.object({
        name: Joi.string(),
        address_id: Joi.string(),
    })
}

export class TransportSchema {
    static create = Joi.object({
        branch_id: Joi.string().required(), 
        model: Joi.string().required(), 
        color: Joi.string().required(),
        price: Joi.number().required()
    })
    static update = Joi.object({
        branch_id: Joi.string(), 
        model: Joi.string(), 
        color: Joi.string(),
        price: Joi.number()
    })
}