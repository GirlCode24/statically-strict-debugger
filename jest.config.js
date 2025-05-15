export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'], // optional
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/ts/$1',
  },
};
