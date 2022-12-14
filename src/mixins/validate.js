import { extend } from 'vee-validate'
// import { email } from 'vee-validate/dist/rules'

/* set Rules for vaildation input */
extend('min', value => {
    if (value.length > 3) {
        return true
    }
    return '`username min length should be ${__field__} character!`'    
})
extend('minMax', {
    validate (value, {min, max}) {
        if (value.length > min && value.length < max) {
            return true
        }
        return "{_field_} must be between min:{min} and max:{max}."
    },
    params: [ 'min', 'max' ]

})
extend('charOnly', value => {
    let reg = /^[a-zA-Z]+$/
    if (reg.test(value)) {
        return true
    }
    return "username should be charactor only!"
})
extend('required', {
    validate (value) {
        return {
            required: true,
            valid: ['', null, undefined].indexOf(value) === -1 // checks value if not found -1
        }
    },
    message: '* {_field_} is mandatory!', // field name placeholder
    computesRequired: true
})

extend('emailReg', {
    validate (value) {
        let reg = /^[\w]+(@)(gmail|yahoo)(\.){1}([a-z]{2,3})$/
        return {
            valid: reg.test(value)
        }
    },
    message: 'Invalid {_field_} !'
})
/* extend('email', email) */ // uncomment above import statement to use this available rule.

extend('DOBReg', {
    validate (value) {
        let reg = /^\d{4}-\d{2}-\d{2}$/
        return {
            valid: reg.test(value)
        }
    },
    message: 'Invalid {_field_}!'
})
extend('MinAge', {
    validate (value) {
        let birthDate = Date.parse(value)
        let currentDate = new Date()
        let diff = (currentDate - birthDate)
        let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))
        // console.log(age)
        // age must be 18 or more
        return {
            valid: age >= 19
        }
    },
    message: 'Are you sure you are 18+ year\'s old !'
})
extend('loginPasswordMinMax', {
    validate (value, { min, max }) {
        if (value.length > min && value.length < max) {
            return true
        }
        return "Invalid {_field_}"
    },
    params: [ 'min', 'max' ]
})