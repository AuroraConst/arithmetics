// import type { ValidationAcceptor, ValidationChecks } from 'langium';
// import type { ArithmeticsAstType, Person } from './generated/ast.js';
import type { ArithmeticsServices } from './arithmetics-module.js';

// /**
//  * Register custom validation checks.
//  */
export function registerValidationChecks(services: ArithmeticsServices) {
    // const registry = services.validation.ValidationRegistry;
    // const checks: ValidationChecks<ArithmeticsAstType> = {
    //     Person: validator.checkPersonStartsWithCapital
    // };
    // registry.register(checks, validator);
}

// /**
//  * Implementation of custom validations.
//  */
// export class ArithmeticsValidator {

//     checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
//         if (person.name) {
//             const firstChar = person.name.substring(0, 1);
//             if (firstChar.toUpperCase() !== firstChar) {
//                 accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
//             }
//         }
//     }

// }
