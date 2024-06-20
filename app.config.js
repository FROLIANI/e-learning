require('dotenv').config();

module.exports = {
    name: 'e-learning',
    version: '1.0.0',
    extra: {
        clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    scheme: 'elearning' 
};
