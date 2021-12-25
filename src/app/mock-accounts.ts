import { Account, AccountType } from './Account';

export const ACCOUNTS: Account[] = [
  {
    id: 1,
    name: 'Joakim',
    password: '123',
    accountType: AccountType.admin,
  },
  {
    id: 2,
    name: 'Kristoffer',
    password: 'abc',
    accountType: AccountType.User,
  },
];