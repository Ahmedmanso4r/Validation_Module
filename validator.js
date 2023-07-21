const validate = (fullname, email, password, age, gender) => {
    const errors = {};
    // Check Fullname
    if (!fullname || fullname.trim() === '') {
    errors.fullname = 'Fullname is required';
    } else if (fullname !== fullname.toLowerCase()) {
    errors.fullname = 'Fullname should be in lowercase';
    }
    // Check Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim() === '') {
    errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email format';
    }
    // Check Password
    if (!password || password.trim() === '') {
    errors.password = 'Password is required';
    } else if (password.length < 6) {
    errors.password = 'Password should have a minimum length of 6 characters';
    }
    // Check Age
    if (!age || isNaN(age)) {
    errors.age = 'Age is required';
    } else if (age <= 18) {
    errors.age = 'Age should be greater than 18';
    }

    // Check Gender
    if (!gender || (gender !== 'Male' && gender !== 'Female')) {
    errors.gender = 'Gender should be either Male or Female';
    }

    if (Object.keys(errors).length > 0) {
    return { errors };
    }
    
return { success: true, message: 'Validation successful' };

};

module.exports = validate;