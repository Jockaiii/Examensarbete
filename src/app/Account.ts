export interface Account {
	id?: number;
	name: string;
	password: string;
	accountType: AccountType;
  }

  export enum AccountType {
	User,
	admin
  }