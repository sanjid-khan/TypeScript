interface User {
  name: string;
  email: string;
}

export const createUserService = (user: User): User => {
  // business logic
  return user;
};