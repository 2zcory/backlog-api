declare namespace NSBacklog {
  interface User {
    id: number;
    keyword: string;
    lang: string;
    lastLoginTime: string;
    mailAddress: string;
    name: string;
    nulabAccount: NulabAccount;
    roleType: number;
    userId: null;
  }

  interface NulabAccount {
    iconUrl: string;
    name: string;
    nulabId: string;
    uniqueId: string;
  }

  namespace Query {
    interface User {}
  }
}
