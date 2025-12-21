export { };

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: 'admin' | 'user' | 'guest';
        };
    }

    interface UserPublicMetadata {
        role?: 'admin' | 'user' | 'guest';
    }
}
