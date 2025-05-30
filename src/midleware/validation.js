import { CustomError } from "../CustomError/customError.js";
import { BranchSchema, UsersSchema,TransportSchema} from "../utils/validations.js";


export default (req, res, next) => {
    try {
        if (req.path == "/register") {
            let { error, value } = UsersSchema.register.validate(req.body);
            if (error) throw new CustomError(error.details[0].message, 400);
        }
        if (req.path == "/login") {
            let { error, value } = UsersSchema.login.validate(req.body);

            if (error) throw new CustomError(error.details[0].message, 400);
        }

        if (req.path == "/addBranch") {
            let { error, value } = BranchSchema.create.validate(req.body)

            if (error) throw new CustomError(error.details[0].message, 400);
        }
        if (req.path == "/changeBranch") {
            let { error, value } = BranchSchema.update.validate(req.body)

            if (error) throw new CustomError(error.details[0].message, 400);
        }

        if (req.path == "/addTransport") {
            let { error, value } = TransportSchema.create.validate(req.body)

            if (error) throw new CustomError(error.details[0].message, 400);
        }
        if (req.path == "/changeTransport") {
            let { error, value } = TransportSchema.update.validate(req.body)

            if (error) throw new CustomError(error.details[0].message, 400);
        }
        
        if (req.path == "/login") {
            let { error, value } = UsersSchema.login.validate(req.body);

            if (error) throw new CustomError(error.details[0].message, 400);
        }
        next();
    } catch (error) {
        next(error)
    }

}
