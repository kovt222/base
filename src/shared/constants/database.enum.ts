// User
export enum USER_ROLE {
  ADMIN = 'ADMIN',
  CHECK = 'CHECK',
  MOD = 'MOD',
  USER = 'USER',
  ADMIN_PRODUCT = 'ADMIN_PRODUCT',
  NEWS = 'NEWS',
  MARKETING = 'MARKETING',
}

// Value_set type
export enum VALUE_SET_TYPE {
  HERO = 'HERO',
  WEAPON = 'WEAPON',
  SERVER = 'SERVER',
  TAGCODE = 'TAGCODE',
  GAME = 'GAME',
  NOTHING = 'NOTHING',
  CATEGORY = 'CATEGORY',
  GAME_CATEGORY = 'GAME_CATEGORY',
  ACCOUNT_WHOLESALE_TYPE = 'ACCOUNT_WHOLESALE_TYPE',
}

// // Account detail
export enum ACCOUNT_TYPE {
  VIP = 'VIP',
  REROLL = 'REROLL',
  REROLLVIP = 'REROLLVIP',
  RANDOM = 'RANDOM',
  NEW = 'NEW',
  CODE = 'CODE'
}

// Transaction
export enum TRANSACTION_TYPE {
  NAPTK = 'Nạp tiền tài khoản',
  NAPGAME = 'Nạp tiền vào game',
  MUAACC = 'Mua nick',
  CAYTHUE = 'Cày thuê',
  MUAACCSI = 'Mua acc sỉ',
}
export enum TRANSACTION_STATUS {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  EXPIRED = 'EXPIRED',
  ERROR = 'ERROR',
}

export enum BANK_NAME {
  // ACB = 'ACB',
  // MBBANK = 'MBBANK',
  VCB = 'VCB',
  MOMO = 'MOMO',
  CARD = 'CARD',
}

// Order
export enum ORDER_TYPE {
  DOITHUONG = 'Đổi thưởng',
  MUAMOHINH = 'Mua mô hình',
  QUAYTHUONG = 'Quay thuởng',
}

export enum ORDER_STATUS {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  DELIVERY = 'DELIVERY',
  EXPIRED = 'EXPIRED',
  ERROR = 'ERROR',
}

export enum PACK_LIST_TYPE {
  NAPGAME = 'Nạp game',
  CAYTHUE = 'Cày thuê'
}

// History
export enum HISTORY_TYPE {
  AMOUNT_TRANSFERRED = 'AMOUNT_TRANSFERRED',
  BUY_ACCOUNT_BY_USER = 'BUY_ACCOUNT_BY_USER',
  // TRANSACTION = 'TRANSACTION',
  BONUS = 'BONUS',
  BONUS_PRESENTER = 'BONUS_PRESENTER',
  DEPOSIT = 'DEPOSIT',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  DELETE_USER = 'DELETE_USER',
  
  
  ADMIN_CHANGE = 'ADMIN_CHANGE',
  USER_CHANGE = 'USER_CHANGE',
}