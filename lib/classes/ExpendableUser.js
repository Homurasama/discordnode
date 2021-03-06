"use strict";

const User = require('./User');

class ExpendableUser extends User {
    constructor(data) {
        super(data);
        
        this.email = data.email;
        this.verified = data.verified;
        this.mfa = data.mfa_enabled;
    }
}

module.exports = ExpendableUser;